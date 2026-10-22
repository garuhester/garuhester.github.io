/* 小胡笔记 · 站点交互脚本（无依赖，file:// 直接打开也能用） */
(function () {
  'use strict';

  var BASE = typeof window.__BASE__ === 'string' ? window.__BASE__ : './';
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  // ---------------------------------------------------------------- 主题
  var root = document.documentElement;
  function currentTheme() {
    var saved = null;
    try { saved = localStorage.getItem('blog-theme'); } catch (e) {}
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('blog-theme', theme); } catch (e) {}
    $$('[data-theme-toggle]').forEach(function (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
    });
  }
  if (root.getAttribute('data-theme') === 'auto') applyTheme(currentTheme());
  $$('[data-theme-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  });
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      var saved = null;
      try { saved = localStorage.getItem('blog-theme'); } catch (err) {}
      if (!saved) applyTheme(e.matches ? 'dark' : 'light');
    });
  }

  // ---------------------------------------------------------------- 移动端菜单
  var menuBtn = $('[data-menu-toggle]');
  var mobileNav = $('[data-mobile-nav]');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
  }

  // ---------------------------------------------------------------- 搜索
  var index = (window.__SEARCH_INDEX__ && window.__SEARCH_INDEX__.docs) || [];
  var overlay = $('[data-search-overlay]');
  var input = $('[data-search-input]');
  var resultBox = $('[data-search-results]');
  var metaBox = $('[data-search-meta]');
  var selected = -1;
  var shown = [];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function highlight(text, terms) {
    var out = esc(text);
    terms.forEach(function (t) {
      if (!t) return;
      var safe = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      out = out.replace(new RegExp('(' + safe + ')', 'gi'), '<mark>$1</mark>');
    });
    return out;
  }
  function urlFor(doc) { return BASE + doc.u + 'index.html'; }

  function scoreDoc(doc, terms) {
    var title = doc.t.toLowerCase();
    var tags = (doc.g || []).join(' ').toLowerCase();
    var cat = (doc.c || '').toLowerCase() + ' ' + (doc.s || '').toLowerCase();
    var text = (doc.x || '').toLowerCase();
    var score = 0;
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      var hit = 0;
      if (title.indexOf(term) >= 0) hit += 100;
      if (tags.indexOf(term) >= 0) hit += 40;
      if (cat.indexOf(term) >= 0) hit += 12;
      if (hit === 0) {
        var idx = text.indexOf(term);
        if (idx < 0) return -1; // 要求所有关键词都命中
        var count = 0;
        while (idx >= 0 && count < 4) { count++; idx = text.indexOf(term, idx + term.length); }
        hit += 5 * count;
      }
      score += hit;
    }
    return score;
  }

  function snippet(doc, terms) {
    var text = doc.x || '';
    if (!text) return '以图片 / 视频记录为主，点开查看完整内容。';
    var lower = text.toLowerCase();
    var pos = -1;
    for (var i = 0; i < terms.length && pos < 0; i++) pos = lower.indexOf(terms[i]);
    if (pos < 0) return esc(text.slice(0, 110)) + (text.length > 110 ? '…' : '');
    var start = Math.max(0, pos - 40);
    var end = Math.min(text.length, pos + 90);
    return (start > 0 ? '…' : '') + highlight(text.slice(start, end), terms) + (end < text.length ? '…' : '');
  }

  function renderResults(terms) {
    if (!terms.length) {
      shown = [];
      resultBox.innerHTML = '';
      metaBox.textContent = '输入关键词开始搜索，支持标题、标签与正文全文';
      return;
    }
    var scored = [];
    for (var i = 0; i < index.length; i++) {
      var s = scoreDoc(index[i], terms);
      if (s >= 0) scored.push({ doc: index[i], score: s });
    }
    scored.sort(function (a, b) { return b.score - a.score || a.doc.t.localeCompare(b.doc.t, 'zh-Hans-CN'); });
    shown = scored.slice(0, 60);
    selected = shown.length ? 0 : -1;
    metaBox.textContent = scored.length
      ? '找到 ' + scored.length + ' 篇文章' + (scored.length > shown.length ? '（显示前 ' + shown.length + ' 篇）' : '')
      : '没有找到匹配的文章，换个关键词试试';
    resultBox.innerHTML = shown
      .map(function (item, idx) {
        var d = item.doc;
        return (
          '<li class="search-result' + (idx === 0 ? ' is-selected' : '') + '" data-idx="' + idx + '">' +
          '<a href="' + urlFor(d) + '">' +
          '<div class="sr-title">' + highlight(d.t, terms) + '</div>' +
          '<div class="sr-meta">' + esc(d.c) + (d.s ? ' · ' + esc(d.s) : '') + (d.g && d.g.length ? ' · #' + esc(d.g.slice(0, 3).join(' #')) : '') + '</div>' +
          '<div class="sr-snippet">' + snippet(d, terms) + '</div>' +
          '</a></li>'
        );
      })
      .join('');
  }

  function openSearch(prefill) {
    if (!overlay) return;
    overlay.hidden = false;
    document.body.classList.add('no-scroll');
    if (input) {
      input.value = prefill || '';
      input.focus();
      input.select();
      renderResults(termsOf(input.value));
    }
  }
  function closeSearch() {
    if (!overlay) return;
    overlay.hidden = true;
    document.body.classList.remove('no-scroll');
  }
  function termsOf(value) {
    return String(value || '')
      .toLowerCase()
      .split(/\s+/)
      .map(function (t) { return t.trim(); })
      .filter(Boolean);
  }
  function moveSelection(delta) {
    if (!shown.length) return;
    selected = (selected + delta + shown.length) % shown.length;
    $$('.search-result', resultBox).forEach(function (el, i) {
      el.classList.toggle('is-selected', i === selected);
      if (i === selected && el.scrollIntoView) el.scrollIntoView({ block: 'nearest' });
    });
  }

  if (overlay) {
    $$('[data-search-open]').forEach(function (btn) {
      btn.addEventListener('click', function () { openSearch(''); });
    });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) closeSearch(); });
    var timer = null;
    if (input) {
      input.addEventListener('input', function () {
        clearTimeout(timer);
        var v = input.value;
        timer = setTimeout(function () { renderResults(termsOf(v)); }, 90);
      });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') { e.preventDefault(); moveSelection(1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); moveSelection(-1); }
        else if (e.key === 'Enter') {
          var el = $('.search-result.is-selected a', resultBox);
          if (el) window.location.href = el.getAttribute('href');
        }
      });
    }
    resultBox.addEventListener('mouseover', function (e) {
      var li = e.target.closest ? e.target.closest('.search-result') : null;
      if (!li) return;
      selected = Number(li.getAttribute('data-idx'));
      $$('.search-result', resultBox).forEach(function (el) { el.classList.toggle('is-selected', el === li); });
    });
    document.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      var typing = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;
      if (e.key === 'Escape') closeSearch();
      if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        openSearch('');
      }
    });
  }

  // ---------------------------------------------------------------- 分类页子分类筛选
  var chipBar = $('[data-chip-bar]');
  if (chipBar) {
    chipBar.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-filter]') : null;
      if (!btn) return;
      var filter = btn.getAttribute('data-filter');
      $$('.chip', chipBar).forEach(function (c) { c.classList.toggle('is-active', c === btn); });
      $$('[data-group]').forEach(function (group) {
        group.hidden = !(filter === 'all' || group.getAttribute('data-group') === filter);
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---------------------------------------------------------------- 标签筛选
  var tagCloud = $('[data-tag-cloud]');
  if (tagCloud) {
    var status = $('[data-filter-status]');
    var list = $('[data-tag-list]');
    var rows = $$('[data-tags]');
    var total = rows.length;
    var apply = function (tag) {
      var count = 0;
      rows.forEach(function (row) {
        var tags = (row.getAttribute('data-tags') || '').split(',');
        var ok = !tag || tags.indexOf(tag) >= 0;
        row.hidden = !ok;
        if (ok) count++;
      });
      $$('[data-tag-filter]', tagCloud).forEach(function (btn) {
        btn.classList.toggle('is-active', btn.getAttribute('data-tag-filter') === tag);
      });
      if (list) list.hidden = !tag;
      if (status) {
        status.innerHTML = tag
          ? '标签 <strong>#' + esc(tag) + '</strong> 下共 ' + count + ' 篇文章 <button type="button" data-clear-tag>清除筛选</button>'
          : '点击上方标签查看对应文章，共 ' + total + ' 篇可按标签筛选。';
      }
      var active = $('[data-tag-filter].is-active', tagCloud);
      if (tag && active) active.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    };
    var setUrl = function (query) {
      try { history.replaceState(null, '', query || location.pathname); } catch (e) {}
    };
    tagCloud.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('[data-tag-filter]') : null;
      if (!btn) return;
      var next = btn.classList.contains('is-active') ? '' : btn.getAttribute('data-tag-filter');
      apply(next);
      setUrl(next ? '?tag=' + encodeURIComponent(next) : '');
    });
    document.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('[data-clear-tag]')) {
        apply('');
        setUrl('');
      }
    });
    var preset = new URLSearchParams(location.search).get('tag');
    if (preset) apply(preset);
  }

  // ---------------------------------------------------------------- 代码复制
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-copy]') : null;
    if (!btn) return;
    var block = btn.closest('.code-block');
    var code = block ? $('.code-pre code', block) : null;
    if (!code) return;
    var text = code.innerText;
    var done = function () {
      btn.textContent = '已复制';
      btn.classList.add('is-done');
      setTimeout(function () { btn.textContent = '复制'; btn.classList.remove('is-done'); }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    } else { fallback(); }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); done(); } catch (err) { btn.textContent = '复制失败'; }
      document.body.removeChild(ta);
    }
  });

  // ---------------------------------------------------------------- 图片灯箱
  var postBody = $('[data-post-body]');
  if (postBody) {
    postBody.addEventListener('click', function (e) {
      var img = e.target.closest ? e.target.closest('img') : null;
      if (!img) return;
      var box = document.createElement('div');
      box.className = 'lightbox';
      box.innerHTML = '<img alt="' + esc(img.getAttribute('alt') || '') + '">';
      box.querySelector('img').src = img.currentSrc || img.src;
      box.addEventListener('click', function () { box.remove(); });
      document.addEventListener('keydown', function onKey(ev) {
        if (ev.key === 'Escape') { box.remove(); document.removeEventListener('keydown', onKey); }
      });
      document.body.appendChild(box);
    });
    // 图片挂了就给个占位提示，避免大片空白
    postBody.addEventListener('error', function (e) {
      var img = e.target;
      if (img && img.tagName === 'IMG' && img.parentElement) img.parentElement.classList.add('is-broken');
    }, true);
  }

  // ---------------------------------------------------------------- 阅读进度 / 目录高亮 / 回到顶部
  var progress = $('[data-progress]');
  var toTop = $('[data-to-top]');
  var tocLinks = $$('[data-toc-link]');
  var headings = tocLinks
    .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
    .filter(Boolean);

  function onScroll() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (toTop) toTop.classList.toggle('is-visible', scrollTop > 600);
    if (progress && postBody) {
      var rect = postBody.getBoundingClientRect();
      var total = rect.height - window.innerHeight * 0.6;
      var passed = -rect.top + window.innerHeight * 0.2;
      var pct = total > 0 ? Math.min(100, Math.max(0, (passed / total) * 100)) : 0;
      progress.style.width = pct + '%';
    }
    if (headings.length) {
      var active = headings[0];
      for (var i = 0; i < headings.length; i++) {
        if (headings[i].getBoundingClientRect().top <= 120) active = headings[i];
      }
      tocLinks.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + active.id);
      });
    }
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { onScroll(); ticking = false; });
  }, { passive: true });
  onScroll();

  if (toTop) toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  // 站内锚点平滑滚动
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    history.replaceState(null, '', '#' + id);
  });
})();
