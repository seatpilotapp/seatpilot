#!/usr/bin/env bash
set -euo pipefail

TENANT="aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
SESSION_ID="sess-001"
if [[ -f ".env" ]]; then
  set -a
  source .env
  set +a
fi

KEY="${METRICS_INGEST_KEY:-}"
CHECKIN_URL="http://localhost:3100/api/checkin/success"
ARRIVE_URL="http://localhost:3200/api/wayfinding/arrive-table"
ARRIVE_HEADERS=(-H "content-type: application/json")
CHECKIN_HEADERS=(-H "content-type: application/json")
if [[ -n "$KEY" ]]; then
  ARRIVE_HEADERS+=(-H "x-metrics-key: $KEY")
  CHECKIN_HEADERS+=(-H "x-metrics-key: $KEY")
fi
PROM_URL="http://localhost:9090/api/v1/query"
COMPOSE_CMD="docker compose -f docker-compose.metrics.yml"

# 1) check-in success
SCAN_TS=$(python3 - <<'PY'
import time
print(int(time.time() * 1000) - 540)
PY
)
curl -sS -XPOST "$CHECKIN_URL" \
  "${CHECKIN_HEADERS[@]}" \
  -d "{\"session_id\":\"${SESSION_ID}\",\"tenant_id\":\"${TENANT}\",\"channel\":\"kiosk\",\"ts_scan_start_ms\":${SCAN_TS}}" \
  | tee /tmp/checkin-success.json

# 2) wayfinding arrive
sleep 11
curl -sS -XPOST "$ARRIVE_URL" \
  "${ARRIVE_HEADERS[@]}" \
  -d "{\"session_id\":\"${SESSION_ID}\",\"tenant_id\":\"${TENANT}\",\"channel\":\"kiosk\"}" \
  | tee /tmp/arrive-success.json

# 3) registrar rechazo manual en metrics-api
$COMPOSE_CMD exec metrics-api node -e "fetch('http://localhost:8080/observe/ingest',{method:'POST',headers:{'content-type':'application/json','x-metrics-key':process.env.METRICS_INGEST_KEY},body:JSON.stringify({outcome:'rejected',reason:'schema'})}).then(r=>r.text()).then(t=>{console.log(t);});" | tee /tmp/ingest-reject.json

# 4) correr refresco para generar lag
set -a
source .env
set +a
DB_URL="${DATABASE_URL//sslmode=no-verify/sslmode=require}"
$COMPOSE_CMD run --rm kpi-refresher node dist/kpi-refresher/src/jobs/refresh-mvs.js >/tmp/refresh.log

# 5) Prometheus quick check
curl -sS "${PROM_URL}?query=seatpilot:ingest_reject_rate_5m" | jq '.data.result'
curl -sS "${PROM_URL}?query=seatpilot:mv_lag_avg_5m" | jq '.data.result'

# 6) DB sessions
psql "$DB_URL" -c "select session_id, to_timestamp(ts_checkin_success_ms/1000.0) as ts_success from ops.checkin_sessions order by created_at desc limit 5;"

echo "SMOKE F1.2 OK"
