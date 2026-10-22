#!/usr/bin/env bash
#
# 把生成好的静态站点发布到任意 git 仓库（GitHub Pages / Gitee / 自建服务器都行）
#
#   用法：  ./tools/deploy.sh <git 仓库地址> [分支名，默认 main]
#
#   例：
#     ./tools/deploy.sh https://github.com/garuhester/garuhester.github.io.git main
#     ./tools/deploy.sh git@gitee.com:hi_xiaohu/blog.git main
#     ./tools/deploy.sh https://github.com/garuhester/notes.git gh-pages
#
# 说明：脚本会先重新构建，再把 blog/ 里的内容作为一个全新提交强推到目标分支。
#      目标分支上原有的文件会被覆盖，所以建议用一个专门的仓库 / 分支来放站点产物。

set -euo pipefail

REMOTE="${1:-}"
BRANCH="${2:-main}"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ -z "$REMOTE" ]]; then
  echo "用法：$0 <git 仓库地址> [分支名，默认 main]"
  exit 1
fi

echo "▶ 构建站点…"
(cd "$ROOT/tools" && node build.js)

if [[ ! -f "$ROOT/blog/index.html" ]]; then
  echo "✗ 没有找到 blog/index.html，构建可能失败了"
  exit 1
fi

echo "▶ 准备发布内容…"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
cp -R "$ROOT/blog/." "$TMP/"
# 防止 macOS 的 .DS_Store 被推上去
find "$TMP" -name '.DS_Store' -delete 2>/dev/null || true

cd "$TMP"
git init -q
git checkout -q -b "$BRANCH"
git add -A
git -c user.name="${GIT_AUTHOR_NAME:-deploy}" \
    -c user.email="${GIT_AUTHOR_EMAIL:-deploy@local}" \
    commit -q -m "publish: $(date '+%Y-%m-%d %H:%M:%S')"
git remote add origin "$REMOTE"

echo "▶ 推送到 $REMOTE ($BRANCH)…"
git push --force origin "$BRANCH"

echo
echo "✓ 发布完成。首次使用记得去仓库设置里把 Pages 打开："
echo "    GitHub：Settings → Pages → Source 选 Deploy from a branch → $BRANCH / (root)"
echo "    Gitee ：仓库 → 服务 → Gitee Pages → 部署（若入口不可用说明该服务已下线）"
