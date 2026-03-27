#!/usr/bin/env bash
set -euo pipefail

if [ -f .release.env ]; then
  source .release.env
fi

PROM_BASE="${PROMETHEUS_BASE_URL:-http://localhost:9090}"
INTERVAL="${DEMO_CYCLE_SECONDS:-300}" # default: 5 minutes

while true; do
  ts="$(date '+%Y-%m-%d %H:%M:%S')"
  echo "[$ts] 🚀 Demo cycle starting"

  make seed-ops-live || echo "[$ts] ⚠️ seed-ops-live failed"
  make seed-db || echo "[$ts] ⚠️ seed-db failed"
  curl -fsS -X POST "$PROM_BASE/-/reload" >/dev/null || echo "[$ts] ⚠️ Prometheus reload failed"

  echo "[$ts] ✅ Demo cycle complete — sleeping ${INTERVAL}s"
  sleep "$INTERVAL"
done
