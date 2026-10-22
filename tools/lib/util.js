'use strict';

const path = require('path');

/** HTML 转义 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** 字符串哈希（FNV-1a 变体），返回 6 位 base36 */
function hash6(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36).padStart(6, '0').slice(-6);
}

/** 生成 URL slug：保留 ASCII 可读部分，中文等非 ASCII 部分用短哈希兜底 */
function slugify(input) {
  const ascii = String(input)
    .normalize('NFKD')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
    .slice(0, 60);
  if (ascii.replace(/-/g, '').length >= 3) return ascii;
  return 'p-' + hash6(String(input));
}

/** 去掉 markdown 语法，得到纯文本（用于摘要、搜索索引） */
function stripMarkdown(md) {
  return String(md)
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    .replace(/^---\n[\s\S]*?\n---\n/, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s{0,3}(#{1,6})\s*/gm, '')
    .replace(/^\s{0,3}>\s?/gm, '')
    .replace(/^\s{0,3}[-*+]\s+/gm, '')
    .replace(/^\s{0,3}\d+\.\s+/gm, '')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/[*_~]{1,3}/g, '')
    .replace(/\|/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

/** 中英混排字数统计：中日韩字符逐字计数，其余按单词计数 */
function countWords(text) {
  const cjk = (text.match(/[\u3400-\u4dbf\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g) || []).length;
  const latin = (text.replace(/[\u3400-\u4dbf\u4e00-\u9fff\u3040-\u30ff\uac00-\ud7af]/g, ' ').match(/[A-Za-z0-9_'-]+/g) || []).length;
  return cjk + latin;
}

/** 预计阅读时间（分钟） */
function readingTime(words) {
  return Math.max(1, Math.round(words / 350));
}

/** 摘要：取正文里第一段像样的文字，剔除裸链接之类的噪音 */
function makeExcerpt(plain, limit = 96) {
  const cleaned = String(plain)
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/www\.\S+/g, ' ');
  const paras = cleaned
    .split(/\n+/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    // 去掉只剩符号 / 太短的碎片
    .filter((p) => p.replace(/[\s\p{P}\p{S}]/gu, '').length >= 8);
  const text = (paras[0] || '').trim();
  if (text.length <= limit) return text;
  return text.slice(0, limit).trim() + '…';
}

/** 把文件名字符串转成更可读的标题：中文与英文之间的连字符换成空格 */
function prettifyTitle(filename) {
  return filename
    .replace(/\.md$/i, '')
    .replace(/(?<=[\u3400-\u9fff])-/g, ' ')
    .replace(/-(?=[\u3400-\u9fff])/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** 简要解析 YAML front matter（只支持 key: value 与 - 列表，够用且无依赖） */
function parseFrontMatter(raw) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!m) return { data: {}, content: raw };
  const data = {};
  let lastKey = null;
  for (const line of m[1].split(/\r?\n/)) {
    if (!line.trim() || /^\s*#/.test(line)) continue;
    const listItem = /^\s*-\s+(.*)$/.exec(line);
    if (listItem && lastKey) {
      if (!Array.isArray(data[lastKey])) data[lastKey] = [];
      data[lastKey].push(unquote(listItem[1]));
      continue;
    }
    const kv = /^([A-Za-z0-9_-]+)\s*:\s*(.*)$/.exec(line);
    if (kv) {
      lastKey = kv[1];
      const value = kv[2].trim();
      if (value === '') {
        data[lastKey] = [];
      } else if (value.startsWith('[') && value.endsWith(']')) {
        data[lastKey] = value
          .slice(1, -1)
          .split(',')
          .map((v) => unquote(v.trim()))
          .filter(Boolean);
      } else {
        data[lastKey] = unquote(value);
      }
    }
  }
  return { data, content: raw.slice(m[0].length) };
}

function unquote(v) {
  return String(v).replace(/^["']|["']$/g, '').trim();
}

/** 相对路径工具：把站点根路径 / 转成相对当前页面深度的链接 */
function makeUrlResolver(prefix) {
  return (absPath) => {
    const clean = String(absPath).replace(/^\/+/, '');
    if (!clean) return prefix + 'index.html';
    // 目录形式的链接一律补 index.html，保证 file:// 直接双击打开也能跳转
    if (/\/$/.test(absPath) || !/\.[a-z0-9]+$/i.test(clean)) {
      return prefix + clean.replace(/\/+$/, '') + '/index.html';
    }
    return prefix + clean;
  };
}

/** 日期格式化为 YYYY-MM-DD */
function formatDate(d) {
  if (!d) return '';
  const date = d instanceof Date ? d : new Date(d);
  if (Number.isNaN(date.getTime())) return String(d);
  const p = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

function posix(p) {
  return p.split(path.sep).join('/');
}

module.exports = {
  escapeHtml,
  hash6,
  slugify,
  stripMarkdown,
  countWords,
  readingTime,
  makeExcerpt,
  prettifyTitle,
  parseFrontMatter,
  makeUrlResolver,
  formatDate,
  posix,
};
