#!/usr/bin/env bash
set -euo pipefail

echo "[SeatPilot] Pushing sample metrics via telemetry-ingest sink…"
docker exec seatpilot-telemetry-ingest-1 node scripts/push-metrics.js

echo "[SeatPilot] Refreshing materialized views via kpi-refresher…"
docker exec seatpilot-kpi-refresher-1 node dist/kpi-refresher/src/jobs/refresh-mvs.js

echo "[SeatPilot] Waiting for Prometheus scrape…"
sleep 10

echo "[SeatPilot] Current MV lag metrics:"
docker exec seatpilot-metrics-api-1 node -e "fetch('http://localhost:8080/metrics').then(r=>r.text()).then(t=>{const lines=t.split('\\n').filter(l=>l.includes('seatpilot_mv_lag_seconds'));console.log(lines.join('\\n')||'No mv lag metrics yet');})"
