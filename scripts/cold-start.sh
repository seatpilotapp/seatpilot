#!/usr/bin/env bash
set -euo pipefail

PROM_URL="${PROM_URL:-http://localhost:9090}"
GRAFANA_URL="${GRAFANA_URL:-http://localhost:3000}"
DASHBOARD_DIR="${DASHBOARD_DIR:-dashboards}"
CHECKIN_URL="${CHECKIN_URL:-http://localhost:8080/checkin}"
WARMUP_REQUESTS="${WARMUP_REQUESTS:-20}"

echo "Reloading Prometheus rules at ${PROM_URL}"
curl -fsS -X POST "${PROM_URL}/-/reload" >/dev/null

echo "Warming check-in cache via ${CHECKIN_URL}"
for i in $(seq 1 "${WARMUP_REQUESTS}"); do
  curl -fsS -X POST "${CHECKIN_URL}" \
    -H 'content-type: application/json' \
    -d "{\"tenant\":\"demo\",\"channel\":\"warmup\",\"ticket\":\"WARM-${i}\"}" >/dev/null || true
done

if [[ -z "${GRAFANA_API_KEY:-}" ]]; then
  echo "Skipping dashboard import (set GRAFANA_API_KEY to import automatically)."
  exit 0
fi

for dashboard in "${DASHBOARD_DIR}"/*.json; do
  [[ -f "${dashboard}" ]] || continue
  echo "Importing dashboard ${dashboard}"
  curl -fsS \
    -X POST "${GRAFANA_URL}/api/dashboards/db" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${GRAFANA_API_KEY}" \
    --data-binary @"${dashboard}" >/dev/null
done

echo "Cold start complete."
