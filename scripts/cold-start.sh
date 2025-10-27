#!/usr/bin/env bash
set -euo pipefail

PROM_URL="${PROM_URL:-http://localhost:9090}"
GRAFANA_URL="${GRAFANA_URL:-http://localhost:3000}"
DASHBOARD_DIR="${DASHBOARD_DIR:-dashboards}"
API_BASE="${METRICS_API_BASE_URL:-http://localhost:8080}"
WARMUP_REQUESTS="${WARMUP_REQUESTS:-20}"

echo "Reloading Prometheus rules at ${PROM_URL}"
curl -fsS -X POST "${PROM_URL}/-/reload" >/dev/null

echo "Warming metrics-api via ${API_BASE}"
for _ in $(seq 1 "${WARMUP_REQUESTS}"); do
  latency=$((RANDOM % 300 + 100))
  curl -fsS -X POST "${API_BASE}/observe/checkin" \
    -H 'content-type: application/json' \
    -H "x-metrics-key: ${METRICS_API_KEY:-dev-metrics-key}" \
    -d "{\"tenant\":\"demo\",\"channel\":\"kiosk\",\"latencyMs\":$latency}" >/dev/null || true

  curl -fsS -X POST "${API_BASE}/observe/checkin-stage" \
    -H 'content-type: application/json' \
    -H "x-metrics-key: ${METRICS_API_KEY:-dev-metrics-key}" \
    -d "{\"tenant\":\"demo\",\"channel\":\"kiosk\",\"stage\":\"total\",\"seconds\":0.$((RANDOM % 5 + 1))}" >/dev/null || true

  curl -fsS -X POST "${API_BASE}/observe/door-to-seat" \
    -H 'content-type: application/json' \
    -H "x-metrics-key: ${METRICS_API_KEY:-dev-metrics-key}" \
    -d "{\"tenant\":\"demo\",\"seconds\":$((RANDOM % 40 + 20))}" >/dev/null || true
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
