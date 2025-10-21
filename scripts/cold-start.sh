#!/usr/bin/env bash
set -euo pipefail

echo "[cold-start] warming services..."
# Dispara health del metrics-api; ignora fallos durante arranques lentos.
curl -fsS http://localhost:9100/health || true

# Genera check-ins para precargar caches y colas.
for i in $(seq 1 20); do
  curl -fsS -XPOST http://localhost:8080/checkin \
    -H 'content-type: application/json' \
    -d "{\"tenant\":\"demo\",\"channel\":\"kiosk\",\"ticket\":\"WARMUP-$i\"}" >/dev/null || true
done

# Fuerza reload de reglas en Prometheus tras cambios recientes.
curl -fsS -XPOST http://localhost:9090/-/reload || true
echo "[cold-start] done."
