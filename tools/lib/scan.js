'use strict';

const fs = require('fs');
const path = require('path');
const {
  slugify,
  hash6,
  stripMarkdown,
  countWords,
  readingTime,
  makeExcerpt,
  prettifyTitle,
  parseFrontMatter,
  posix,
} = require('./util');
const { renderMarkdown } = require('./markdown');

const collator = new Intl.Collator('zh-Hans-CN', { numeric: true, sensitivity: 'base' });
const byTitle = (a, b) => collator.compare(a.title, b.title);

/** 递归收集目录下的 .md / .html 文章文件 */
function walk(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, acc);
    } else if (/\.(md|markdown|html?)$/i.test(entry.name)) {
      // 简书导出的 html 只在没有同名 md 时才作为文章收录
      acc.push(full);
    }
  }
  return acc;
}

/** 从简书导出的 html 中抽取标题与正文 */
function parseJianshuHtml(raw, fallbackTitle) {
  const titleMatch = /<h1[^>]*class="title"[^>]*>([\s\S]*?)<\/h1>/i.exec(raw);
  const bodyMatch = /<div[^>]*class="show-content"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i.exec(raw);
  const title = titleMatch ? stripMarkdown(titleMatch[1]).trim() : fallbackTitle;
  let body = bodyMatch ? bodyMatch[1] : '';
  if (!body) {
    const post = /<div[^>]*class="post"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/i.exec(raw);
    body = post ? post[1] : raw.replace(/<style[\s\S]*?<\/style>/gi, '');
  }
  return { title, body };
}

function loadCategoryMeta(config, dirName, index) {
  const custom = config.categories[dirName] || {};
  return {
    key: dirName,
    name: custom.name || dirName,
    slug: custom.slug || slugify(dirName),
    icon: custom.icon || '📄',
    color: custom.color || '#4f6bed',
    desc: custom.desc || `「${dirName}」目录下的文章`,
    order: typeof custom.order === 'number' ? custom.order : 100 + index,
  };
}

function pickSubcategory(rules, fileBase) {
  if (!rules || !rules.length) return '';
  const key = fileBase.toLowerCase();
  for (const rule of rules) {
    if (rule.match.test(key)) return rule.name;
  }
  return '其他';
}

// 标签正则统一按忽略大小写处理（文章里 JavaScript / Javascript / javascript 混着写）
let tagMatcherCache = null;
function getTagMatchers(config) {
  if (!tagMatcherCache) {
    tagMatcherCache = config.tags.map((tag) => ({
      name: tag.name,
      test: new RegExp(tag.match.source, 'i'),
      count: new RegExp(tag.match.source, 'gi'),
    }));
  }
  return tagMatcherCache;
}

function pickTags(config, title, plain, fallback) {
  const scores = new Map();
  for (const tag of getTagMatchers(config)) {
    const inTitle = tag.test.test(title);
    const hits = inTitle ? 3 : countMatches(plain, tag.count);
    const score = (inTitle ? 3 : 0) + Math.min(hits, 3);
    if (score >= 3) scores.set(tag.name, score);
  }
  const picked = [...scores.entries()]
    .sort((a, b) => b[1] - a[1] || collator.compare(a[0], b[0]))
    .slice(0, 5)
    .map(([name]) => name);
  // 一个标签都没命中时退回子分类 / 分类名，保证每篇都有可点的标签
  return picked.length ? picked : [fallback];
}

function countMatches(text, global) {
  global.lastIndex = 0;
  let count = 0;
  while (global.exec(text) !== null) {
    count++;
    if (count >= 3) break;
  }
  return count;
}

/** 生成 url 用 slug，保证唯一 */
function uniqueSlug(base, used) {
  let slug = base || 'post';
  if (!used.has(slug)) {
    used.add(slug);
    return slug;
  }
  slug = `${base}-${hash6(base + used.size)}`;
  while (used.has(slug)) slug = `${base}-${hash6(slug)}`;
  used.add(slug);
  return slug;
}

/**
 * 扫描全部文章
 * @returns {{articles: object[], categories: object[]}}
 */
function scanArticles(rootDir, config) {
  const exclude = new Set(config.excludeDirs || []);
  const dirs = (config.sourceDirs || fs.readdirSync(rootDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('.') && !exclude.has(e.name))
    .map((e) => e.name))
    .filter((d) => !exclude.has(d));

  const categories = dirs
    .map((dirName, i) => {
      const dirPath = path.join(rootDir, dirName);
      if (!fs.existsSync(dirPath)) return null;
      const meta = loadCategoryMeta(config, dirName, i);
      return { ...meta, dirPath, articles: [] };
    })
    .filter(Boolean)
    .sort((a, b) => a.order - b.order || collator.compare(a.name, b.name));

  const usedSlugs = new Set();
  const articles = [];

  for (const category of categories) {
    const files = walk(category.dirPath).sort((a, b) => collator.compare(a, b));
    const mdBases = new Set(
      files.filter((f) => /\.(md|markdown)$/i.test(f)).map((f) => path.basename(f).replace(/\.(md|markdown)$/i, ''))
    );

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      const fileBase = path.basename(file).replace(/\.(md|markdown|html?)$/i, '');
      if (ext !== '.md' && ext !== '.markdown' && mdBases.has(fileBase)) continue; // 有 md 就跳过同名 html

      const rawFile = fs.readFileSync(file, 'utf8');
      let body = rawFile;
      let title = '';
      let frontMatter = {};
      let plain = '';

      if (ext === '.html' || ext === '.htm') {
        const parsed = parseJianshuHtml(rawFile, prettifyTitle(fileBase));
        title = parsed.title;
        body = parsed.body;
        plain = stripMarkdown(body.replace(/<[^>]+>/g, ' '));
      } else {
        const parsed = parseFrontMatter(rawFile);
        frontMatter = parsed.data || {};
        body = parsed.content;
        // 正文首行的 # 标题优先作为文章标题
        const h1 = /^\s*#\s+(.+)$/m.exec(body.split('\n').slice(0, 6).join('\n'));
        title = frontMatter.title || (h1 ? h1[1].trim() : '') || prettifyTitle(fileBase);
        if (h1 && !frontMatter.title) body = body.replace(h1[0], '');
        plain = stripMarkdown(body);
      }

      // 简书图床：统一 https，避免 https 页面里图片被拦
      body = body.replace(/http:\/\/(upload-images|cdn2)\.jianshu\.io/g, 'https://$1.jianshu.io');

      const { html, toc } = renderMarkdown(body);
      // 字数统计把代码块内容也算进去，更贴近真实篇幅
      const words = countWords(stripMarkdown(body.replace(/^\s*(```|~~~).*$/gm, ' ')));
      const relPath = posix(path.relative(rootDir, file));
      const subName = pickSubcategory(config.subcategoryRules[category.key], fileBase);
      const tags = Array.isArray(frontMatter.tags) && frontMatter.tags.length
        ? frontMatter.tags.slice(0, 6)
        : pickTags(config, title + ' ' + fileBase, plain, subName || category.name);
      const slug = uniqueSlug(slugify(fileBase), usedSlugs);
      const dateFromName = /(\d{4})[-_.](\d{1,2})[-_.](\d{1,2})/.exec(fileBase);
      const date = frontMatter.date
        ? String(frontMatter.date)
        : dateFromName
        ? `${dateFromName[1]}-${String(dateFromName[2]).padStart(2, '0')}-${String(dateFromName[3]).padStart(2, '0')}`
        : null;

      const article = {
        title,
        fileBase,
        relPath,
        sourceFile: file,
        categoryKey: category.key,
        categoryName: category.name,
        categorySlug: category.slug,
        categoryIcon: category.icon,
        subcategory: subName,
        tags: tags.length ? tags : [category.name],
        slug,
        url: `posts/${slug}/`,
        html,
        toc,
        plain,
        excerpt: frontMatter.summary || frontMatter.excerpt || makeExcerpt(plain) || fallbackExcerpt(html),
        words,
        readingTime: readingTime(words),
        date,
        // 注意：无语言标注的代码块渲染成 class="code-block is-plain"，所以这里不能带结尾引号
        codeBlocks: (html.match(/class="code-block/g) || []).length,
        images: (html.match(/<img /g) || []).length,
        draft: frontMatter.draft === true || frontMatter.draft === 'true',
      };
      if (article.draft) continue;

      articles.push(article);
      category.articles.push(article);
    }

    // 子分类顺序按规则出现顺序排
    const order = (config.subcategoryRules[category.key] || []).map((r) => r.name);
    category.subcategories = [...new Set(category.articles.map((a) => a.subcategory).filter(Boolean))]
      .sort((a, b) => {
        const ia = order.indexOf(a);
        const ib = order.indexOf(b);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || collator.compare(a, b);
      })
      .map((name, i) => ({
        name,
        id: `sub-${i + 1}`,
        count: category.articles.filter((a) => a.subcategory === name).length,
      }));
    category.articles.sort((a, b) =>
      a.subcategory === b.subcategory ? byTitle(a, b) : collator.compare(a.subcategory || '', b.subcategory || '')
    );
    category.topTags = topTags(category.articles, 8);
  }

  // 全集排序：分类顺序 -> 子分类 -> 标题
  articles.sort((a, b) => {
    const ca = categories.find((c) => c.key === a.categoryKey).order;
    const cb = categories.find((c) => c.key === b.categoryKey).order;
    return ca - cb || collator.compare(a.subcategory || '', b.subcategory || '') || byTitle(a, b);
  });
  articles.forEach((a, i) => {
    a.index = i + 1;
  });

  return { articles, categories: categories.filter((c) => c.articles.length > 0) };
}

/** 正文几乎全是图片 / 链接时，给一句说明代替空摘要 */
function fallbackExcerpt(html) {
  const images = (html.match(/<img /g) || []).length;
  if (images > 1) return `以 ${images} 张图片记录为主，点开查看完整内容。`;
  if (images === 1) return '以一张图片记录为主，点开查看完整内容。';
  if (/<pre/.test(html)) return '以代码片段为主，点开查看完整内容。';
  return '点开查看完整内容。';
}

function topTags(articles, limit) {
  const counts = new Map();
  for (const a of articles) for (const t of a.tags) counts.set(t, (counts.get(t) || 0) + 1);
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || collator.compare(a[0], b[0]))
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));
}

/** 相关文章：共同标签越多越靠前 */
function relatedArticles(article, all, limit = 4) {
  const set = new Set(article.tags);
  return all
    .filter((a) => a.slug !== article.slug)
    .map((a) => {
      const shared = a.tags.filter((t) => set.has(t)).length;
      const sameSub = a.subcategory && a.subcategory === article.subcategory ? 1.5 : 0;
      const sameCat = a.categoryKey === article.categoryKey ? 0.5 : 0;
      return { a, score: shared + sameSub + sameCat };
    })
    .filter((x) => x.score > 1)
    .sort((x, y) => y.score - x.score || byTitle(x.a, y.a))
    .slice(0, limit)
    .map((x) => x.a);
}

module.exports = { scanArticles, walk, relatedArticles, topTags, collator, byTitle };
