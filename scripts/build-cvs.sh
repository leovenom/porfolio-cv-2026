#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HTML_DIR="$ROOT/cv/html"
OUT_DIR="$ROOT/public"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [[ ! -x "$CHROME" ]]; then
  echo "Google Chrome not found — skip CV build"
  exit 0
fi

build_cv() {
  local html="$1"
  local pdf="$2"
  echo "Building $pdf"
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --no-pdf-header-footer \
    --prefer-css-page-size \
    --run-all-compositor-stages-before-draw \
    --virtual-time-budget=20000 \
    --print-to-pdf="$OUT_DIR/$pdf" \
    "file://${HTML_DIR}/${html}"
}

build_cv CV_Leonardt_2026.html CV_Leonardt_2026.pdf
build_cv CV_Leonardt_2026_DesignEngineer.html CV_Leonardt_2026_DesignEngineer.pdf
build_cv CV_Leonardt_2026_FrontEnd.html CV_Leonardt_2026_FrontEnd.pdf

echo "CV PDFs written to $OUT_DIR"
