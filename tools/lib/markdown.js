'use strict';

const MarkdownIt = require('markdown-it');
const { escapeHtml, slugify, stripMarkdown } = require('./util');

const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: false,
  typographer: false,
});

// ---------- 图片：简书图床强制 https、懒加载、点击灯箱 ----------
md.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token = tokens[idx];
  const srcIndex = token.attrIndex('src');
  if (srcIndex >= 0) {
    let src = token.attrs[srcIndex][1];
    if (/^http:\/\/(upload-images|cdn2)\.jianshu\.io/.test(src)) {
      src = src.replace(/^http:/, 'https:');
    }
    if (/^http:\/\//.test(src) && /jianshu/.test(src)) src = src.replace(/^http:/, 'https:');
    token.attrs[srcIndex][1] = src;
  }
  if (token.attrIndex('loading') < 0) token.attrPush(['loading', 'lazy']);
  if (token.attrIndex('decoding') < 0) token.attrPush(['decoding', 'async']);
  if (token.attrIndex('class') < 0) token.attrPush(['class', 'md-img']);
  const alt = token.content ? escapeHtml(token.content) : '';
  return `<span class="md-img-wrap">${self.renderToken(tokens, idx, options)}${alt ? `<span class="md-img-cap">${alt}</span>` : ''}</span>`;
};

// ---------- 链接：站外链接新窗口打开 ----------
const defaultLinkOpen =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options);
  };
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const href = tokens[idx].attrGet('href') || '';
  if (/^https?:\/\//i.test(href)) {
    tokens[idx].attrSet('target', '_blank');
    tokens[idx].attrSet('rel', 'noopener noreferrer');
  }
  return defaultLinkOpen(tokens, idx, options, env, self);
};

// ---------- 代码块：加语言标签 + 复制按钮 ----------
md.renderer.rules.fence = function (tokens, idx) {
  const token = tokens[idx];
  const info = (token.info || '').trim();
  const lang = info.split(/\s+/)[0] || '';
  const code = token.content;
  const copyBtn = '<button class="code-copy" type="button" data-copy>复制</button>';
  // 没有标注语言的代码块（简书导出后大部分都是这种）用悬浮复制按钮，界面更干净
  if (!lang) {
    return (
      `<div class="code-block is-plain">${copyBtn}` +
      `<pre class="code-pre"><code>${escapeHtml(code)}</code></pre></div>`
    );
  }
  return (
    `<div class="code-block" data-lang="${escapeHtml(lang)}">` +
    `<div class="code-head"><span class="code-lang">${escapeHtml(lang)}</span>${copyBtn}</div>` +
    `<pre class="code-pre"><code>${escapeHtml(code)}</code></pre></div>`
  );
};

// ---------- 标题：生成锚点 id，供 TOC 与站内跳转使用 ----------
const slugCounts = new Map();
md.core.ruler.push('heading_anchor', (state) => {
  slugCounts.clear();
  let seq = 0;
  for (let i = 0; i < state.tokens.length; i++) {
    const token = state.tokens[i];
    if (token.type !== 'heading_open') continue;
    const inline = state.tokens[i + 1];
    const text = inline && inline.type === 'inline' ? inline.content : '';
    seq += 1;
    let base = slugify(stripMarkdown(text));
    // 纯中文标题会落到哈希兜底，这种用 sec-N 更短更稳定
    if (!base || base.startsWith('p-')) base = `sec-${seq}`;
    const used = slugCounts.get(base) || 0;
    slugCounts.set(base, used + 1);
    const id = used === 0 ? base : `${base}-${used + 1}`;
    token.attrSet('id', id);
  }
  return true;
});

/** 从 tokens 里提取二级/三级标题，生成目录 */
function extractToc(tokens) {
  const toc = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.type !== 'heading_open') continue;
    const level = Number(token.tag.slice(1));
    if (level < 2 || level > 4) continue;
    const inline = tokens[i + 1];
    const text = stripMarkdown(inline && inline.content ? inline.content : '').replace(/\s+/g, ' ').trim();
    if (!text) continue;
    toc.push({ level, text, id: token.attrGet('id') });
  }
  return toc;
}

function renderMarkdown(content) {
  const env = {};
  const tokens = md.parse(content, env);
  const toc = extractToc(tokens);
  const html = md.renderer.render(tokens, md.options, env);
  return { html, toc };
}

module.exports = { md, renderMarkdown, extractToc };
