#!/usr/bin/env bash
set -euo pipefail

API_BASE="${METRICS_API_BASE_URL:-http://localhost:8080}"
PROM_BASE="${PROMETHEUS_BASE_URL:-http://localhost:9090}"

echo "[cold-start] warming services..."
# Health check metrics-api (ignora fallos en arranque).
curl -fsS "$API_BASE/healthz" >/dev/null || true

# Genera check-ins y door-to-seat sintéticos.
for i in $(seq 1 20); do
  latency=$((RANDOM % 250 + 100))
  curl -fsS -X POST "$API_BASE/observe/checkin" \
    -H 'content-type: application/json' \
    -d "{\"latencyMs\":$latency,\"channel\":\"kiosk\"}" >/dev/null || true
done

for i in $(seq 1 10); do
  seconds=$((RANDOM % 40 + 10))
  curl -fsS -X POST "$API_BASE/observe/door-to-seat" \
    -H 'content-type: application/json' \
    -d "{\"seconds\":$seconds}" >/dev/null || true
done

# Fuerza reload de reglas en Prometheus tras cambios recientes.
curl -fsS -X POST "$PROM_BASE/-/reload" >/dev/null || true
echo "[cold-start] done."
