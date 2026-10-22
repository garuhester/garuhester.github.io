# 小胡笔记 · 静态博客

把简书导出的 **381 篇 Markdown 文章**汇总成一个纯静态博客：自动分类、自动打标签、离线全文搜索、深色模式，且**新增文章只需丢文件 + 跑一条命令**。

站点入口：`blog/index.html`（双击即可用浏览器打开，无需服务器）。

---

## 一、目录结构

```
user-2381669-1792652363/
├─ WEB/  Godot/  Godot4/  技术/  AI/        ← 文章源目录，一个目录 = 一个大分类
├─ MyApp/  Blender/  刷机/  小胡资源/  技巧/
├─ blog/                                     ← 生成出来的静态站点（可整目录拷到任意服务器）
│  ├─ index.html          首页：Hero + 分类卡片 + 精选 + 热门标签
│  ├─ categories/         分类总览 + 每个分类一页（按子分类分组、支持筛选）
│  ├─ posts/<slug>/       每篇文章一页（含目录 TOC、上下篇、相关文章）
│  ├─ tags/               标签云 + 按标签筛选
│  ├─ archive/            归档：带日期文章 + 按「分类 / 子分类」的全量索引
│  ├─ about/              关于页（含新增文章说明）
│  └─ assets/             style.css / app.js / search-index.js / favicon.svg
├─ tools/                 生成器（Node.js，仅依赖 markdown-it）
│  ├─ config.js           ★ 站点与分类/子分类/标签规则，都在这改
│  ├─ build.js            构建脚本
│  ├─ serve.js            本地预览服务器
│  └─ lib/                扫描、Markdown 渲染、页面模板、静态资源源文件
├─ 文章总览.md             ★ 自动生成的 Markdown 版全站目录
└─ README.md
```

## 二、构建与预览

```bash
cd tools
npm install          # 首次执行，安装 markdown-it
npm run build        # 扫描文章 → 生成 blog/ 与 文章总览.md，并校验站内链接
npm run serve        # http://127.0.0.1:8080/ 本地预览（可选）
```

构建输出会打印文章数、分类分布、页面数、索引体积与链接校验结果，例如：

```
文章 381 篇（约 38,187 字）
分类 10 个：Web 前端(270)、Godot 游戏开发(57) …
链接校验 通过 ✓
```

## 三、新增一篇文章（三步）

1. **放文件**：把 `.md` 放进对应分类目录，例如 `Godot/我的新教程.md`。
   - 文件名就是文章标题（`-` 在中文前后会自动变成空格）。
   - 想开新分类，直接新建一个目录，例如 `Rust/`，无需改配置（图标/描述用默认值）。
2. **重新构建**：`cd tools && npm run build`。
3. **刷新页面**：`blog/` 里的页面、分类、标签、搜索索引、归档、`文章总览.md` 全部自动更新。

### 可选：用 front matter 精调单篇

在文件开头加一段（全部可选）：

```markdown
---
title: Godot 4 里做圆环进度条
date: 2024-05-01
tags: [Godot, UI 界面]
summary: 首页列表里展示的摘要文案
draft: false        # 改成 true 就不会被收进站点
---

正文…
```

## 四、定制站点

全部集中在 [`tools/config.js`](tools/config.js)：

| 想改什么 | 改哪里 |
| --- | --- |
| 站点标题、副标题、作者、介绍 | `site` |
| 分类名称 / Emoji 图标 / 主题色 / 描述 / 排序 | `categories`（key 必须等于目录名） |
| 二级子分类规则（正则，按顺序命中） | `subcategoryRules`（如 `WEB`、`Godot`、`技术`） |
| 标签词库与打标签规则 | `tags`（命中文件名 +3 分、命中正文 +1 分，≥3 分才打上，每篇最多 5 个） |
| 首页「值得一读」置顶文章 | `featured`（填文件名，不含 `.md`） |
| 样式与配色 | `tools/lib/assets/style.css`（改 CSS 变量即可换主题色、深浅色） |
| 页面结构与交互 | `tools/lib/pages.js`、`tools/lib/assets/app.js` |

## 五、站点功能

- **分类 / 子分类**：现有 10 个分类自动细分二级子类（Web 前端拆成 JavaScript、CSS 与布局、Node 与服务端、微信与小程序等 14 组），分类页顶部有粘性子分类筛选条。
- **离线全文搜索**：`⌘K` / `Ctrl K` / `/` 打开，标题、标签、分类、正文一起检索，命中处高亮；索引内嵌在 `assets/search-index.js`，**不依赖后端与网络**，`file://` 下也能用。
- **标签云**：51 个标签按热度缩放字号，点标签即筛选。
- **归档**：带日期的文章时间线 + 按分类/子分类的全量清单（每篇标注字数）。
- **阅读体验**：文章内目录（滚动高亮）、阅读进度条、代码块一键复制、图片点击放大、上下篇、相关文章、回到顶部。
- **深色模式**：跟随系统并可手动切换，选择记在 `localStorage`。
- **响应式**：手机 / 平板 / 桌面三档布局，移动端有折叠菜单。
- **图片**：正文里的简书图床地址自动升级为 `https`，懒加载；图挂了会隐藏占位而不是留一片空白。

## 六、已知限制

- **没有发布时间**：简书导出的 Markdown 不含日期，只有文件名形如 `2021-08-30.md` 的 5 篇能识别出日期，所以归档以「分类 + 标题」组织，不做全站时间线。想补日期可在 front matter 里加 `date`。
- **图片依赖简书图床**：图片仍是 `upload-images.jianshu.io` 的原始地址，若哪天图床失效，正文图片会消失（本地未做图床备份）。
- 少数文章正文只有一张图或一个外链，摘要会显示「以 N 张图片记录为主」。

## 七、部署到 GitHub Pages / Gitee

站点全部是相对路径 + 显式 `index.html`，所以放在子目录（`用户名.github.io/仓库名/`）也能正常访问；生成时还会带一个空的 `.nojekyll`，避免托管平台用 Jekyll 处理站点。

### 方案 1：GitHub Actions 自动构建（推荐，推 Markdown 就自动上线）

仓库：[`garuhester/garuhester.github.io`](https://github.com/garuhester/garuhester.github.io)（这个仓库已开启 Pages，站点就在 `https://garuhester.github.io/` 根路径）。工作流已放在 [`.github/workflows/pages.yml`](.github/workflows/pages.yml)，`push` 后自动 `npm ci` → `node build.js` → 发布 `blog/`。

```bash
# 在本目录执行（首次）
git remote add origin https://github.com/garuhester/garuhester.github.io.git
git fetch origin
git merge --allow-unrelated-histories origin/main   # 远端已有 README 历史，先合并
git push -u origin main
```

然后去 **Settings → Pages → Source** 选 **GitHub Actions**。以后每篇文章只要 `git push`，1 分钟左右自动上线。

### 方案 2：零 CI（不用 Actions，用分支 + /docs 目录）

GitHub Pages 的「Deploy from a branch」只支持根目录或 `/docs`，所以把输出目录换成 `docs`：

```bash
cd tools && BLOG_OUT=docs node build.js && cd ..
git add docs && git commit -m "更新站点" && git push
```

**Settings → Pages → Source** 选 **Deploy from a branch** → `main` / **`/docs`**。
（`.gitignore` 里已经忽略了 `docs/` 之外不需要的东西；要提交 `docs/` 就把它从忽略列表里删掉。）

### 方案 3：只把产物推到某个仓库 / 分支

```bash
./tools/deploy.sh https://github.com/garuhester/notes.git main
./tools/deploy.sh git@gitee.com:hi_xiaohu/blog.git main
```

脚本会先重新构建，再把 `blog/` 内容作为一个新提交强推到目标分支（会覆盖该分支原有文件，建议用专门的仓库或 `gh-pages` 分支），适合「源码一个仓库、产物另一个仓库」的玩法。

### 关于 Gitee

**Gitee Pages 已经下线了**（实测：`gitee.io` 现在解析到百度广告 IP `180.76.199.86`，返回 `Server: ADAS/1.0.214` 的广告 404；帮助中心也已找不到 Pages 文档，老文档 `/help/articles/4136` 直接跳回帮助首页）。所以 Gitee 这边建议这样用：

- **Gitee 只当代码托管/备份**：仓库 → 服务 → 「强制同步」或从 GitHub 导入，把源码镜像过去；
- **站点仍旧发布在 GitHub Pages**，或者用 **Cloudflare Pages / Vercel / Netlify**（免费、绑定 Gitee/GitHub 仓库都能自动构建，命令填 `cd tools && npm ci && node build.js`，产物目录填 `blog`）；
- 你有搬瓦工 VPS，也可以直接 `rsync -av --delete blog/ 用户@服务器:/var/www/blog/` + Nginx 静态托管，国内访问最快。

### 认证方式（本机目前没有 SSH key）

- **HTTPS + 令牌**：GitHub 在 **Settings → Developer settings → Personal access tokens** 建一个勾选 `repo` 的令牌，推送时用户名填 `garuhester`、密码粘贴令牌；Gitee 用「设置 → 私人令牌」。macOS 的 osxkeychain 已配置好，输一次就会记住。
- **SSH**：`ssh-keygen -t ed25519 -C "815621501@qq.com"`，把 `~/.ssh/id_ed25519.pub` 贴到 GitHub/Gitee 的 SSH 公钥设置里，再把远端地址换成 `git@github.com:garuhester/xxx.git`。

> 提示：GitHub Pages 的服务器在日本（实测首连约 3~4 秒），国内访问不算快但可用；追求速度就上方案里的自建服务器或 Cloudflare Pages。
