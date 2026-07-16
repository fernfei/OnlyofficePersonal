#!/usr/bin/env bash
# 预压缩静态资源：为大于 100K 的 .wasm / .js 和 vendor/fonts 下的字体文件
# 生成 .br 和 .gz，供 nginx brotli_static / gzip_static 直接返回
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"

{
  find "$ROOT" -type f \( -name '*.wasm' -o -name '*.js' \) \
    -not -path '*/.git/*' -size +100k -print0
  # 字体文件无扩展名（按索引命名），brotli_static 按 URI+.br 查找同样生效
  find "$ROOT" -type f -path '*/vendor/fonts/*' \
    -not -name '*.br' -not -name '*.gz' -not -name '*.js' -size +100k -print0
} |
  xargs -0 -n 1 -P "$(sysctl -n hw.ncpu 2>/dev/null || nproc)" sh -c '
    f="$1"
    # 字体体量大（327M）且 q9/q11 压缩率接近，用 q9 提速；js/wasm 用 q11
    case "$f" in
      */vendor/fonts/*) Q=9 ;;
      *) Q=11 ;;
    esac
    # 源文件更新过才重新压缩
    if [ ! -f "$f.br" ] || [ "$f" -nt "$f.br" ]; then
      brotli -q "$Q" -f -o "$f.br" "$f"
    fi
    if [ ! -f "$f.gz" ] || [ "$f" -nt "$f.gz" ]; then
      gzip -9 -c "$f" > "$f.gz"
    fi
  ' _

echo "== 压缩结果 (top 10) =="
find "$ROOT" -name '*.br' -not -path '*/.git/*' -exec ls -lh {} \; |
  awk '{print $5, $9}' | sort -rh | head -10
