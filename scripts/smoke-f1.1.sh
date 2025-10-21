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
PROM_URL="http://localhost:9090/api/v1/query"

echo "[1/4] check-in success"
SCAN_TS=$(python3 - <<'PY'
import time
print(int(time.time() * 1000) - 540)
PY
)
CHECKIN_HEADERS=(-H "content-type: application/json")
if [[ -n "$KEY" ]]; then
  CHECKIN_HEADERS+=(-H "x-metrics-key: $KEY")
fi
curl -sS -XPOST "$CHECKIN_URL" \
  "${CHECKIN_HEADERS[@]}" \
  -d "{\"session_id\":\"${SESSION_ID}\",\"tenant_id\":\"${TENANT}\",\"channel\":\"kiosk\",\"ts_scan_start_ms\":${SCAN_TS}}" \
  | tee /tmp/checkin-response.json

echo "[2/4] wayfinding arrive"
sleep 11
ARRIVE_HEADERS=(-H "content-type: application/json")
if [[ -n "$KEY" ]]; then
  ARRIVE_HEADERS+=(-H "x-metrics-key: $KEY")
fi
curl -sS -XPOST "$ARRIVE_URL" \
  "${ARRIVE_HEADERS[@]}" \
  -d "{\"session_id\":\"${SESSION_ID}\",\"tenant_id\":\"${TENANT}\",\"channel\":\"kiosk\"}" \
  | tee /tmp/arrive-response.json

echo "[3/4] prom quick checks"
curl -sS "${PROM_URL}?query=seatpilot_checkin_latency_ms_count" | jq '.data.result'
curl -sS "${PROM_URL}?query=seatpilot_door_to_seat_seconds_sum" | jq '.data.result'

echo "[4/4] db check"
if [[ -z "${DATABASE_URL:-}" ]]; then
  echo "DATABASE_URL not set; skipping DB query" >&2
else
  DB_URL="$DATABASE_URL"
  if [[ "$DB_URL" == *"sslmode=no-verify"* ]]; then
    DB_URL="${DB_URL//sslmode=no-verify/sslmode=require}"
  fi
  psql "$DB_URL" -c "select session_id, to_timestamp(ts_checkin_success_ms/1000.0) as ts_success from ops.checkin_sessions order by created_at desc limit 5;"
fi

echo "SMOKE OK"
