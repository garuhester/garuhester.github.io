'use strict';

const { escapeHtml, makeUrlResolver } = require('./util');
const { collator } = require('./scan');

// ---------------------------------------------------------------- 公共片段

function head({ site, rel, u, title, description, depthPath }) {
  const fullTitle = title ? `${title} · ${site.title}` : `${site.title} · ${site.subtitle}`;
  const canonical = depthPath ? u(depthPath) : `${rel}index.html`;
  return `<!DOCTYPE html>
<html lang="zh-CN" data-theme="auto">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${escapeHtml(fullTitle)}</title>
<meta name="description" content="${escapeHtml(description || site.description)}">
<meta name="author" content="${escapeHtml(site.author)}">
<link rel="canonical" href="${canonical}">
<link rel="icon" href="${u('assets/favicon.svg')}" type="image/svg+xml">
<link rel="stylesheet" href="${u('assets/style.css')}">
<script>
  (function () {
    var t = null;
    try { t = localStorage.getItem('blog-theme'); } catch (e) {}
    // 没有手动设置过就跟随系统，并在首屏前定好主题，避免闪一下浅色/两个图标同时出现
    if (!t) {
      t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', t);
  })();
</script>
</head>`;
}

function topbar({ site, u, articleCount, categoryCount, active }) {
  const link = (href, label, key) =>
    `<a class="nav-link${active === key ? ' is-active' : ''}" href="${href}">${escapeHtml(label)}</a>`;
  return `<header class="topbar">
  <div class="topbar-inner">
    <a class="brand" href="${u('')}">
      <span class="brand-mark" aria-hidden="true">胡</span>
      <span class="brand-text"><strong>${escapeHtml(site.title)}</strong><em>${articleCount} 篇 · ${categoryCount} 类</em></span>
    </a>
    <nav class="nav" aria-label="主导航">
      ${link(u(''), '首页', 'home')}
      ${link(u('categories/'), '分类', 'categories')}
      ${link(u('tags/'), '标签', 'tags')}
      ${link(u('archive/'), '归档', 'archive')}
      ${link(u('about/'), '关于', 'about')}
    </nav>
    <div class="topbar-actions">
      <button class="icon-btn search-btn" type="button" data-search-open aria-label="搜索文章" title="搜索（按 / 或 ⌘K）">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
        <span class="search-btn-text">搜索</span>
      </button>
      <button class="icon-btn" type="button" data-theme-toggle aria-label="切换深色模式" title="切换深色模式">
        <svg class="i-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6"/></svg>
        <svg class="i-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/></svg>
      </button>
      <button class="icon-btn menu-btn" type="button" data-menu-toggle aria-label="打开菜单" aria-expanded="false">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
      </button>
    </div>
  </div>
  <nav class="mobile-nav" data-mobile-nav aria-label="移动端导航">
    ${link(u(''), '首页', 'home')}
    ${link(u('categories/'), '分类', 'categories')}
    ${link(u('tags/'), '标签', 'tags')}
    ${link(u('archive/'), '归档', 'archive')}
    ${link(u('about/'), '关于', 'about')}
  </nav>
</header>`;
}

function footer({ site, u, articleCount }) {
  return `<footer class="footer">
  <div class="footer-inner">
    <p class="footer-line">${escapeHtml(site.title)} · 共收录 ${articleCount} 篇文章</p>
    <p class="footer-line dim">由简书导出的 Markdown 自动生成 · <a href="${u('about/')}">关于本站</a></p>
  </div>
</footer>`;
}

function searchOverlay({ u }) {
  return `<div class="search-overlay" data-search-overlay hidden>
  <div class="search-panel" role="dialog" aria-modal="true" aria-label="搜索文章">
    <div class="search-field">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
      <input type="search" data-search-input placeholder="搜索标题、标签或正文关键词…" autocomplete="off" spellcheck="false">
      <kbd>Esc</kbd>
    </div>
    <div class="search-meta" data-search-meta>输入关键词开始搜索</div>
    <ul class="search-results" data-search-results></ul>
  </div>
</div>`;
}

function layout({ site, rel, u, title, description, active, body, articleCount, categoryCount, depthPath, withSearch = true }) {
  return `${head({ site, rel, u, title, description, depthPath })}
<body>
<a class="skip-link" href="#main">跳到正文</a>
${topbar({ site, u, articleCount, categoryCount, active })}
<main id="main">
${body}
</main>
${footer({ site, u, articleCount })}
${withSearch ? searchOverlay({ u }) : ''}
<script>window.__BASE__ = ${JSON.stringify(rel)};</script>
<script src="${u('assets/search-index.js')}"></script>
<script src="${u('assets/app.js')}"></script>
</body>
</html>
`;
}

// ---------------------------------------------------------------- 通用小块

function tagChips(tags, u) {
  return tags
    .map(
      (t) =>
        `<a class="chip chip-tag" href="${u('tags/')}?tag=${encodeURIComponent(t)}" data-tag="${escapeHtml(t)}">#${escapeHtml(t)}</a>`
    )
    .join('');
}

function articleRow(a, u, opts = {}) {
  const meta = [
    a.subcategory ? `<span class="meta-item">${escapeHtml(a.subcategory)}</span>` : '',
    a.words ? `<span class="meta-item">${a.words} 字</span>` : '',
    a.words ? `<span class="meta-item">约 ${a.readingTime} 分钟</span>` : `<span class="meta-item">${a.images} 张图</span>`,
    a.codeBlocks ? `<span class="meta-item">${a.codeBlocks} 段代码</span>` : '',
    a.date ? `<span class="meta-item">${escapeHtml(a.date)}</span>` : '',
  ]
    .filter(Boolean)
    .join('<span class="dot">·</span>');
  return `<article class="post-row"${opts.attrs || ''}>
  <h3 class="post-row-title"><a href="${u(a.url)}">${escapeHtml(a.title)}</a></h3>
  ${a.excerpt ? `<p class="post-row-excerpt">${escapeHtml(a.excerpt)}</p>` : ''}
  <div class="post-row-meta">${meta}${a.tags.length ? `<span class="dot">·</span>${tagChips(a.tags.slice(0, 3), u)}` : ''}</div>
</article>`;
}

function categoryCard(c, u) {
  const subs = (c.subcategories || []).slice(0, 4);
  return `<a class="cat-card" href="${u(`categories/${c.slug}/`)}" style="--cat:${c.color}">
  <div class="cat-card-top">
    <span class="cat-icon" aria-hidden="true">${c.icon}</span>
    <span class="cat-count">${c.articles.length}</span>
  </div>
  <h3 class="cat-name">${escapeHtml(c.name)}</h3>
  <p class="cat-desc">${escapeHtml(c.desc)}</p>
  <div class="cat-subs">${
    subs.length
      ? subs.map((s) => `<span class="sub-pill">${escapeHtml(s.name)} ${s.count}</span>`).join('')
      : (c.topTags || [])
          .slice(0, 4)
          .map((t) => `<span class="sub-pill">#${escapeHtml(t.name)} ${t.count}</span>`)
          .join('')
  }</div>
</a>`;
}

function statBar(articles, categories, tagCount) {
  const words = articles.reduce((sum, a) => sum + a.words, 0);
  const codes = articles.reduce((sum, a) => sum + a.codeBlocks, 0);
  const item = (num, label) => `<div class="stat"><strong>${num}</strong><span>${label}</span></div>`;
  return `<div class="stat-bar">
  ${item(articles.length, '篇文章')}
  ${item(categories.length, '个分类')}
  ${item(tagCount, '个标签')}
  ${item(Math.round(words / 1000) + 'k', '总字数')}
  ${item(codes, '段代码')}
</div>`;
}

// ---------------------------------------------------------------- 首页

function renderHome(ctx) {
  const { site, categories, articles, tags, rel, config } = ctx;
  const u = makeUrlResolver(rel);
  const featured = config.featured
    .map((name) => articles.find((a) => a.fileBase === name))
    .filter(Boolean);
  const longest = [...articles].sort((a, b) => b.words - a.words).slice(0, 4);
  const picks = [...new Set([...featured, ...longest])].slice(0, 6);

  const body = `
<section class="hero">
  <p class="hero-kicker">${escapeHtml(site.author)}的简书文章汇总</p>
  <h1 class="hero-title">${escapeHtml(site.title)}</h1>
  <p class="hero-sub">${escapeHtml(site.subtitle)}</p>
  <button class="hero-search" type="button" data-search-open>
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
    <span>搜索 ${articles.length} 篇文章…</span>
    <kbd>⌘K</kbd>
  </button>
  ${statBar(articles, categories, tags.length)}
</section>

<section class="section">
  <div class="section-head">
    <h2>分类浏览</h2>
    <a class="more" href="${u('categories/')}">全部分类 →</a>
  </div>
  <div class="cat-grid">
    ${categories.map((c) => categoryCard(c, u)).join('\n')}
  </div>
</section>

<section class="section">
  <div class="section-head">
    <h2>值得一读</h2>
    <a class="more" href="${u('archive/')}">全部文章 →</a>
  </div>
  <div class="pick-grid">
    ${picks
      .map(
        (a) => `<a class="pick" href="${u(a.url)}" style="--cat:${a.categoryColor || '#4f6bed'}">
      <span class="pick-cat">${a.categoryIcon} ${escapeHtml(a.categoryName)}</span>
      <strong class="pick-title">${escapeHtml(a.title)}</strong>
      <span class="pick-meta">${a.words} 字 · 约 ${a.readingTime} 分钟</span>
    </a>`
      )
      .join('\n')}
  </div>
</section>

<section class="section">
  <div class="section-head">
    <h2>热门标签</h2>
    <a class="more" href="${u('tags/')}">标签云 →</a>
  </div>
  <div class="tag-cloud is-compact">
    ${tags
      .slice(0, 24)
      .map((t) => `<a class="tag-pill" href="${u('tags/')}?tag=${encodeURIComponent(t.name)}" style="--w:${t.weight}">#${escapeHtml(t.name)}<em>${t.count}</em></a>`)
      .join('')}
  </div>
</section>
`;
  return layout({
    site,
    rel,
    u,
    title: '',
    description: site.description,
    active: 'home',
    body,
    articleCount: articles.length,
    categoryCount: categories.length,
    depthPath: '',
  });
}

// ---------------------------------------------------------------- 分类总览

function renderCategories(ctx) {
  const { site, categories, articles, rel } = ctx;
  const u = makeUrlResolver(rel);
  const body = `
<section class="page-head">
  <nav class="crumbs"><a href="${u('')}">首页</a><span>/</span><span>分类</span></nav>
  <h1>全部分类</h1>
  <p class="page-desc">${categories.length} 个分类，共 ${articles.length} 篇文章。</p>
</section>
<div class="cat-list">
  ${categories
    .map(
      (c) => `<section class="cat-block" style="--cat:${c.color}">
    <header class="cat-block-head">
      <span class="cat-icon" aria-hidden="true">${c.icon}</span>
      <div>
        <h2><a href="${u(`categories/${c.slug}/`)}">${escapeHtml(c.name)}</a> <em>${c.articles.length}</em></h2>
        <p>${escapeHtml(c.desc)}</p>
      </div>
    </header>
    ${
      c.subcategories.length
        ? `<div class="cat-block-subs">${c.subcategories
            .map((s) => `<a class="sub-pill" href="${u(`categories/${c.slug}/`)}#${s.id}">${escapeHtml(s.name)} ${s.count}</a>`)
            .join('')}</div>`
        : ''
    }
    <ul class="cat-block-list">
      ${c.articles
        .slice(0, 8)
        .map((a) => `<li><a href="${u(a.url)}">${escapeHtml(a.title)}</a><span>${a.words} 字</span></li>`)
        .join('')}
    </ul>
    ${c.articles.length > 8 ? `<p class="cat-block-more"><a href="${u(`categories/${c.slug}/`)}">还有 ${c.articles.length - 8} 篇 →</a></p>` : ''}
  </section>`
    )
    .join('\n')}
</div>
`;
  return layout({
    site,
    rel,
    u,
    title: '分类',
    description: '按主题浏览全部文章分类',
    active: 'categories',
    body,
    articleCount: articles.length,
    categoryCount: categories.length,
    depthPath: 'categories/',
  });
}

// ---------------------------------------------------------------- 单个分类

function renderCategory(ctx, category) {
  const { site, articles, rel } = ctx;
  const u = makeUrlResolver(rel);
  const groups = category.subcategories.length
    ? category.subcategories.map((s) => ({ ...s, items: category.articles.filter((a) => a.subcategory === s.name) }))
    : [{ name: '', id: 'sub-all', count: category.articles.length, items: category.articles }];

  const body = `
<section class="page-head" style="--cat:${category.color}">
  <nav class="crumbs"><a href="${u('')}">首页</a><span>/</span><a href="${u('categories/')}">分类</a><span>/</span><span>${escapeHtml(category.name)}</span></nav>
  <h1><span class="cat-icon lg" aria-hidden="true">${category.icon}</span>${escapeHtml(category.name)}</h1>
  <p class="page-desc">${escapeHtml(category.desc)}</p>
  <p class="page-meta">共 ${category.articles.length} 篇${category.subcategories.length ? ` · ${category.subcategories.length} 个子分类` : ''}</p>
</section>
${
  category.subcategories.length
    ? `<div class="chip-bar" data-chip-bar>
  <button class="chip is-active" data-filter="all" type="button">全部 <em>${category.articles.length}</em></button>
  ${category.subcategories
    .map((s) => `<button class="chip" data-filter="${s.id}" type="button">${escapeHtml(s.name)} <em>${s.count}</em></button>`)
    .join('')}
</div>`
    : ''
}
<div class="post-list" data-post-list>
  ${groups
    .map(
      (g) => `<section class="sub-group" id="${g.id}" data-group="${g.id}">
    ${g.name ? `<h2 class="sub-title">${escapeHtml(g.name)}<em>${g.count}</em></h2>` : ''}
    ${g.items.map((a) => articleRow(a, u)).join('\n')}
  </section>`
    )
    .join('\n')}
</div>
`;
  return layout({
    site,
    rel,
    u,
    title: category.name,
    description: category.desc,
    active: 'categories',
    body,
    articleCount: articles.length,
    categoryCount: ctx.categories.length,
    depthPath: `categories/${category.slug}/`,
  });
}

// ---------------------------------------------------------------- 文章页

function renderPost(ctx, article) {
  const { site, articles, categories, rel } = ctx;
  const u = makeUrlResolver(rel);
  const category = categories.find((c) => c.key === article.categoryKey);
  const siblings = category ? category.articles : articles;
  const pos = siblings.findIndex((a) => a.slug === article.slug);
  const prev = pos > 0 ? siblings[pos - 1] : null;
  const next = pos >= 0 && pos < siblings.length - 1 ? siblings[pos + 1] : null;
  const related = ctx.related(article, articles, 4);

  const tocHtml = article.toc.length
    ? `<nav class="toc" aria-label="文章目录">
    <p class="toc-title">目录</p>
    <ul>${article.toc
      .map((h) => `<li class="toc-l${h.level}"><a href="#${h.id}" data-toc-link>${escapeHtml(h.text)}</a></li>`)
      .join('')}</ul>
  </nav>`
    : '';

  const body = `
<div class="reading-progress" data-progress></div>
<article class="post" style="--cat:${category ? category.color : '#4f6bed'}">
  <nav class="crumbs">
    <a href="${u('')}">首页</a><span>/</span>
    <a href="${u(`categories/${article.categorySlug}/`)}">${escapeHtml(article.categoryName)}</a>
    ${article.subcategory ? `<span>/</span><span>${escapeHtml(article.subcategory)}</span>` : ''}
  </nav>
  <header class="post-head">
    <h1>${escapeHtml(article.title)}</h1>
    <div class="post-meta">
      <span class="meta-chip cat-chip">${escapeHtml(article.categoryIcon)} ${escapeHtml(article.categoryName)}</span>
      ${article.subcategory ? `<span class="meta-chip">${escapeHtml(article.subcategory)}</span>` : ''}
      ${article.words ? `<span class="meta-chip">${article.words} 字</span>
      <span class="meta-chip">约 ${article.readingTime} 分钟</span>` : `<span class="meta-chip">${article.images} 张图</span>`}
      ${article.date ? `<span class="meta-chip">${escapeHtml(article.date)}</span>` : ''}
    </div>
    ${article.tags.length ? `<div class="post-tags">${tagChips(article.tags, u)}</div>` : ''}
  </header>
  <div class="post-layout">
    <div class="post-body" data-post-body>
      ${article.html}
    </div>
    <aside class="post-aside">
      ${tocHtml}
    </aside>
  </div>
  <details class="toc-mobile">
    <summary>文章目录（${article.toc.length} 节）</summary>
    <ul>${article.toc.map((h) => `<li class="toc-l${h.level}"><a href="#${h.id}" data-toc-link>${escapeHtml(h.text)}</a></li>`).join('')}</ul>
  </details>
  <nav class="post-nav">
    ${
      prev
        ? `<a class="post-nav-item prev" href="${u(prev.url)}"><span>上一篇</span><strong>${escapeHtml(prev.title)}</strong></a>`
        : '<span class="post-nav-item is-empty"></span>'
    }
    ${
      next
        ? `<a class="post-nav-item next" href="${u(next.url)}"><span>下一篇</span><strong>${escapeHtml(next.title)}</strong></a>`
        : '<span class="post-nav-item is-empty"></span>'
    }
  </nav>
  ${
    related.length
      ? `<section class="related">
    <h2>相关文章</h2>
    <div class="related-grid">
      ${related
        .map(
          (a) => `<a class="related-item" href="${u(a.url)}">
        <strong>${escapeHtml(a.title)}</strong>
        <span>${escapeHtml(a.categoryName)}${a.subcategory ? ' · ' + escapeHtml(a.subcategory) : ''} · ${a.words} 字</span>
      </a>`
        )
        .join('')}
    </div>
  </section>`
      : ''
  }
</article>
<button class="to-top" type="button" data-to-top aria-label="回到顶部">↑</button>
`;
  return layout({
    site,
    rel,
    u,
    title: article.title,
    description: article.excerpt,
    active: '',
    body,
    articleCount: articles.length,
    categoryCount: categories.length,
    depthPath: article.url,
  });
}

// ---------------------------------------------------------------- 标签页

function renderTags(ctx) {
  const { site, tags, articles, rel } = ctx;
  const u = makeUrlResolver(rel);
  const body = `
<section class="page-head">
  <nav class="crumbs"><a href="${u('')}">首页</a><span>/</span><span>标签</span></nav>
  <h1>标签云</h1>
  <p class="page-desc">共 ${tags.length} 个标签，点击标签筛选文章。</p>
</section>
<div class="tag-cloud" data-tag-cloud>
  ${tags
    .map(
      (t) =>
        `<button class="tag-pill" type="button" data-tag-filter="${escapeHtml(t.name)}" style="--w:${t.weight}">#${escapeHtml(t.name)}<em>${t.count}</em></button>`
    )
    .join('')}
</div>
<div class="filter-status" data-filter-status>点击上方标签查看对应文章，共 ${articles.length} 篇可按标签筛选。</div>
<div class="post-list" data-tag-list hidden>
  ${articles
    .map((a) => articleRow(a, u, { attrs: ` data-tags="${escapeHtml(a.tags.join(','))}"` }))
    .join('\n')}
</div>
`;
  return layout({
    site,
    rel,
    u,
    title: '标签',
    description: '按标签浏览文章',
    active: 'tags',
    body,
    articleCount: articles.length,
    categoryCount: ctx.categories.length,
    depthPath: 'tags/',
  });
}

// ---------------------------------------------------------------- 归档页

function renderArchive(ctx) {
  const { site, categories, articles, rel } = ctx;
  const u = makeUrlResolver(rel);
  const dated = articles.filter((a) => a.date).sort((a, b) => collator.compare(b.date, a.date));
  const body = `
<section class="page-head">
  <nav class="crumbs"><a href="${u('')}">首页</a><span>/</span><span>归档</span></nav>
  <h1>全部文章</h1>
  <p class="page-desc">按分类归档，共 ${articles.length} 篇。</p>
</section>
${statBar(articles, categories, ctx.tags.length)}
${
  dated.length
    ? `<section class="section">
  <div class="section-head"><h2>带日期的文章</h2></div>
  <div class="timeline">
    ${dated
      .map(
        (a) => `<a class="timeline-item" href="${u(a.url)}">
      <time>${escapeHtml(a.date)}</time>
      <span>${escapeHtml(a.title)}</span>
    </a>`
      )
      .join('')}
  </div>
</section>`
    : ''
}
<div class="archive">
  ${categories
    .map(
      (c) => `<section class="archive-cat" style="--cat:${c.color}">
    <h2><span aria-hidden="true">${c.icon}</span> <a href="${u(`categories/${c.slug}/`)}">${escapeHtml(c.name)}</a><em>${c.articles.length}</em></h2>
    ${
      c.subcategories.length
        ? c.subcategories
            .map(
              (s) => `<div class="archive-sub">
      <h3>${escapeHtml(s.name)}<em>${s.count}</em></h3>
      <ul class="archive-list">
        ${c.articles
          .filter((a) => a.subcategory === s.name)
          .map(
            (a) =>
              `<li><a href="${u(a.url)}">${escapeHtml(a.title)}</a><span class="archive-meta">${a.words} 字</span></li>`
          )
          .join('')}
      </ul>
    </div>`
            )
            .join('')
        : `<ul class="archive-list">
      ${c.articles.map((a) => `<li><a href="${u(a.url)}">${escapeHtml(a.title)}</a><span class="archive-meta">${a.words} 字</span></li>`).join('')}
    </ul>`
    }
  </section>`
    )
    .join('\n')}
</div>
<p class="note">说明：简书导出的 Markdown 文件本身不含发布时间，因此除文件名自带日期的文章外，这里以「分类 + 标题」归档。</p>
`;
  return layout({
    site,
    rel,
    u,
    title: '归档',
    description: '按分类归档的全部文章',
    active: 'archive',
    body,
    articleCount: articles.length,
    categoryCount: categories.length,
    depthPath: 'archive/',
  });
}

// ---------------------------------------------------------------- 关于页

function renderAbout(ctx) {
  const { site, categories, articles, tags, rel } = ctx;
  const u = makeUrlResolver(rel);
  const words = articles.reduce((s, a) => s + a.words, 0);
  const body = `
<section class="page-head">
  <nav class="crumbs"><a href="${u('')}">首页</a><span>/</span><span>关于</span></nav>
  <h1>关于本站</h1>
  <p class="page-desc">${escapeHtml(site.intro)}</p>
</section>
<section class="section prose">
  <h2>数据概览</h2>
  <ul>
    <li>文章：${articles.length} 篇，合计约 ${words.toLocaleString('zh-CN')} 字</li>
    <li>分类：${categories.length} 个</li>
    <li>标签：${tags.length} 个</li>
    <li>内容来源：简书（@${escapeHtml(site.author)}）导出的 Markdown 文件</li>
  </ul>
  <h2>分类一览</h2>
  <ul class="about-cats">
    ${categories
      .map(
        (c) =>
          `<li><a href="${u(`categories/${c.slug}/`)}">${c.icon} ${escapeHtml(c.name)}</a><span>${c.articles.length} 篇</span></li>`
      )
      .join('')}
  </ul>
  <h2>如何新增文章</h2>
  <ol>
    <li>把新的 <code>.md</code> 文件放进对应的分类目录（如 <code>WEB/</code>、<code>Godot/</code>），或者新建一个目录作为新分类。</li>
    <li>在项目根目录执行 <code>cd tools &amp;&amp; npm run build</code>，站点会重新生成到 <code>blog/</code>。</li>
    <li>想自定义标题、标签或摘要，可在文件开头加 front matter：<code>title / date / tags / summary / draft</code>。</li>
  </ol>
  <h2>快捷键</h2>
  <ul>
    <li><kbd>/</kbd> 或 <kbd>⌘K</kbd> / <kbd>Ctrl K</kbd>：打开搜索</li>
    <li><kbd>Esc</kbd>：关闭搜索</li>
    <li>文章内点击图片可放大查看，代码块右上角可一键复制</li>
  </ul>
</section>
`;
  return layout({
    site,
    rel,
    u,
    title: '关于',
    description: '关于本站与新增文章的方法',
    active: 'about',
    body,
    articleCount: articles.length,
    categoryCount: categories.length,
    depthPath: 'about/',
  });
}

module.exports = {
  renderHome,
  renderCategories,
  renderCategory,
  renderPost,
  renderTags,
  renderArchive,
  renderAbout,
  layout,
};
