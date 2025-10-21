#!/usr/bin/env bash
set -euo pipefail

: "${METRICS_API_BASE_URL:?Debe exportar METRICS_API_BASE_URL}"
: "${METRICS_API_KEY:?Debe exportar METRICS_API_KEY}"

BASE="$METRICS_API_BASE_URL"
KEY="$METRICS_API_KEY"

TENANT="${SEED_TENANT:-demo}"
CHANNEL="${SEED_CHANNEL:-kiosk}"

echo "[seed-ops-live] tenant=$TENANT channel=$CHANNEL base=$BASE"

seed_checkin_stage() {
  for stage in parse lookup persist total; do
    for _ in {1..10}; do
      duration=$(printf "0.%d" $((RANDOM % 4 + 1))) # 0.1 .. 0.4 s
      curl -s -X POST "$BASE/observe/checkin-stage" \
        -H "content-type: application/json" \
        -H "x-api-key: $KEY" \
        -d "{\"tenant\":\"$TENANT\",\"channel\":\"$CHANNEL\",\"stage\":\"$stage\",\"duration_seconds\":$duration}" >/dev/null
    done
  done
}

seed_assign() {
  if curl -fs --head "$BASE/observe/assign" >/dev/null 2>&1; then
    for _ in {1..5}; do
      duration=$(printf "0.%d" $((RANDOM % 5 + 1))) # 0.1 .. 0.5 s
      score=$(printf "0.%d" $((RANDOM % 9 + 1)))   # 0.1 .. 0.9
      curl -s -X POST "$BASE/observe/assign" \
        -H "content-type: application/json" \
        -H "x-api-key: $KEY" \
        -d "{\"tenant\":\"$TENANT\",\"channel\":\"engine\",\"duration_seconds\":$duration,\"score\":$score,\"feasible\":true,\"violations\":0}" >/dev/null
    done
  fi
}

seed_checkin_stage
seed_assign

echo "[seed-ops-live] done"
