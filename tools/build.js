'use strict';

/**
 * 静态博客生成器
 *   node build.js           生成到 ../blog
 * 逻辑：扫描仓库根目录下各分类目录里的 .md / .html 文章 -> 渲染 -> 输出静态站点
 */

const fs = require('fs');
const path = require('path');
const config = require('./config');
const { scanArticles, relatedArticles } = require('./lib/scan');
const pages = require('./lib/pages');
const { posix, escapeHtml, hash6 } = require('./lib/util');

const ROOT = path.resolve(__dirname, '..');
// 允许用 BLOG_OUT=docs node build.js 换输出目录（GitHub Pages 的分支+/docs 模式会用到）
const OUT_DIR_NAME = process.env.BLOG_OUT || config.outputDir;
const OUT = path.join(ROOT, OUT_DIR_NAME);
const ASSETS_SRC = path.join(__dirname, 'lib', 'assets');

function writeFile(absPath, content) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content);
}

function buildTagList(articles) {
  const counts = new Map();
  for (const a of articles) for (const t of a.tags) counts.set(t, (counts.get(t) || 0) + 1);
  const max = Math.max(1, ...[...counts.values()]);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-Hans-CN'))
    .map(([name, count]) => ({ name, count, weight: Math.round((count / max) * 4) }));
}

function buildSearchIndex(articles) {
  const docs = articles.map((a) => ({
    t: a.title,
    u: a.url,
    c: a.categoryName,
    s: a.subcategory || '',
    g: a.tags,
    w: a.words,
    // 全文检索用：剔除裸链接（否则搜索结果里全是图床地址），单篇截断控制体积
    x: a.plain.replace(/https?:\/\/\S+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 8000),
  }));
  return `window.__SEARCH_INDEX__ = ${JSON.stringify({ docs })};\n`;
}

const FAVICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4f6bed"/><stop offset="1" stop-color="#7d5cf6"/>
  </linearGradient></defs>
  <rect width="64" height="64" rx="16" fill="url(#g)"/>
  <text x="32" y="43" font-size="34" font-family="PingFang SC, Microsoft YaHei, sans-serif" font-weight="700" fill="#fff" text-anchor="middle">胡</text>
</svg>
`;

/** 生成一份 Markdown 版总览，方便直接阅读或另作他用 */
function buildOverviewMd(articles, categories, tags) {
  const words = articles.reduce((s, a) => s + a.words, 0);
  const lines = [];
  lines.push('# 文章总览', '');
  lines.push(`> 共 ${articles.length} 篇文章，${categories.length} 个分类，${tags.length} 个标签，合计约 ${words.toLocaleString('zh-CN')} 字。`);
  lines.push('> 本文档由 `tools/build.js` 自动生成，请勿手工修改。', '');
  lines.push('## 目录', '');
  for (const c of categories) {
    lines.push(`- [${c.name}](#${c.slug})（${c.articles.length} 篇）`);
  }
  lines.push('');
  for (const c of categories) {
    lines.push(`## ${c.name}`, '');
    lines.push(`${c.desc}`, '');
    const groups = c.subcategories.length
      ? c.subcategories.map((s) => ({ name: s.name, items: c.articles.filter((a) => a.subcategory === s.name) }))
      : [{ name: '', items: c.articles }];
    for (const g of groups) {
      if (g.name) lines.push(`### ${g.name}`, '');
      for (const a of g.items) {
        const meta = [`${a.words} 字`].concat(a.tags.slice(0, 3).map((t) => `#${t}`)).join(' · ');
        lines.push(`- [${a.title}](blog/${a.url}index.html) — ${meta}`);
      }
      lines.push('');
    }
    lines.push(`<a id="${c.slug}"></a>`, '');
  }
  return lines.join('\n');
}

/** 校验所有站内链接与资源是否存在 */
function checkLinks() {
  const problems = [];
  const htmlFiles = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith('.html')) htmlFiles.push(full);
    }
  })(OUT);

  const attrRe = /(?:href|src)="([^"]+)"/g;
  for (const file of htmlFiles) {
    const html = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = attrRe.exec(html)) !== null) {
      const target = m[1];
      if (/^(https?:|mailto:|tel:|data:|javascript:)/i.test(target)) continue;
      const clean = target.split('#')[0].split('?')[0];
      if (!clean) continue;
      const abs = path.resolve(path.dirname(file), decodeURIComponent(clean));
      const rel = posix(path.relative(OUT, abs));
      // 只校验站点自身的页面与资源；正文里指向别处的相对引用（比如 GitHub 上的 CHANGELOG.md）不算
      if (rel.startsWith('..')) continue;
      if (!/\.(html|css|js|svg|json)$/i.test(rel)) continue;
      if (!fs.existsSync(abs)) {
        problems.push(`${posix(path.relative(OUT, file))} -> ${target}`);
      }
    }
  }
  // 搜索索引里的地址也校验一遍
  const idxPath = path.join(OUT, 'assets', 'search-index.js');
  if (fs.existsSync(idxPath)) {
    const raw = fs.readFileSync(idxPath, 'utf8');
    const data = JSON.parse(raw.replace(/^window\.__SEARCH_INDEX__ = /, '').replace(/;\s*$/, ''));
    for (const doc of data.docs) {
      const abs = path.join(OUT, doc.u, 'index.html');
      if (!fs.existsSync(abs)) problems.push(`search-index -> ${doc.u}`);
    }
  }
  return { problems, htmlFiles };
}

function main() {
  const t0 = Date.now();
  // 清空输出目录：macOS 的 Finder 会时不时往目录里写 .DS_Store，整目录删除容易 ENOTEMPTY，
  // 所以保留目录本身、只清里面的内容。
  fs.mkdirSync(OUT, { recursive: true });
  for (const entry of fs.readdirSync(OUT)) {
    fs.rmSync(path.join(OUT, entry), { recursive: true, force: true, maxRetries: 8, retryDelay: 120 });
  }

  const { articles, categories } = scanArticles(ROOT, config);
  if (!articles.length) {
    console.error('没有扫描到任何文章，请检查 config.sourceDirs / excludeDirs 配置。');
    process.exit(1);
  }

  // 把分类主色带到文章上，首页精选卡片会用到
  const colorByKey = new Map(categories.map((c) => [c.key, c.color]));
  for (const a of articles) a.categoryColor = colorByKey.get(a.categoryKey) || '#4f6bed';

  const tags = buildTagList(articles);
  const ctx = {
    site: config.site,
    config,
    articles,
    categories,
    tags,
    related: relatedArticles,
  };

  // ---- 静态资源
  writeFile(path.join(OUT, 'assets', 'style.css'), fs.readFileSync(path.join(ASSETS_SRC, 'style.css')));
  writeFile(path.join(OUT, 'assets', 'app.js'), fs.readFileSync(path.join(ASSETS_SRC, 'app.js')));
  writeFile(path.join(OUT, 'assets', 'favicon.svg'), FAVICON);
  // GitHub Pages / Gitee Pages 默认会跑 Jekyll，空文件 .nojekyll 表示「原样发布」
  writeFile(path.join(OUT, '.nojekyll'), '');
  writeFile(path.join(OUT, 'assets', 'search-index.js'), buildSearchIndex(articles));

  // ---- 页面
  writeFile(path.join(OUT, 'index.html'), pages.renderHome({ ...ctx, rel: './' }));
  writeFile(path.join(OUT, 'categories', 'index.html'), pages.renderCategories({ ...ctx, rel: '../' }));
  for (const c of categories) {
    writeFile(path.join(OUT, 'categories', c.slug, 'index.html'), pages.renderCategory({ ...ctx, rel: '../../' }, c));
  }
  for (const a of articles) {
    writeFile(path.join(OUT, 'posts', a.slug, 'index.html'), pages.renderPost({ ...ctx, rel: '../../' }, a));
  }
  writeFile(path.join(OUT, 'tags', 'index.html'), pages.renderTags({ ...ctx, rel: '../' }));
  writeFile(path.join(OUT, 'archive', 'index.html'), pages.renderArchive({ ...ctx, rel: '../' }));
  writeFile(path.join(OUT, 'about', 'index.html'), pages.renderAbout({ ...ctx, rel: '../' }));

  // ---- 汇总 Markdown
  writeFile(path.join(ROOT, '文章总览.md'), buildOverviewMd(articles, categories, tags));

  // ---- 校验
  const { problems, htmlFiles } = checkLinks();

  const totalWords = articles.reduce((s, a) => s + a.words, 0);
  console.log('生成完成：');
  console.log(`  输出目录   ${posix(path.relative(ROOT, OUT))}/`);
  console.log(`  文章       ${articles.length} 篇（约 ${totalWords.toLocaleString('zh-CN')} 字）`);
  console.log(`  分类       ${categories.length} 个：${categories.map((c) => `${c.name}(${c.articles.length})`).join('、')}`);
  console.log(`  标签       ${tags.length} 个，页面 ${htmlFiles.length} 个`);
  console.log(`  搜索索引   ${(fs.statSync(path.join(OUT, 'assets', 'search-index.js')).size / 1024).toFixed(0)} KB`);
  console.log(`  耗时       ${Date.now() - t0} ms`);
  if (problems.length) {
    console.log(`\n⚠ 发现 ${problems.length} 个可能失效的链接：`);
    problems.slice(0, 20).forEach((p) => console.log('   ' + p));
    process.exitCode = 1;
  } else {
    console.log('  链接校验   通过 ✓');
  }
}

main();
