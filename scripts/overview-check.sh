#!/usr/bin/env bash
set -euo pipefail

PROM_URL=${PROM_URL:-http://localhost:9090}

function require_cmd() {
  local cmd="$1"
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "ERROR: comando requerido '$cmd' no encontrado en PATH." >&2
    exit 1
  fi
}

require_cmd curl
require_cmd psql
require_cmd python3

HAVE_JQ=0
if command -v jq >/dev/null 2>&1; then
  HAVE_JQ=1
fi

if [[ -f .env ]]; then
  set -a
  source .env
  set +a
fi

function heading() {
  local title="$1"
  echo
  echo "=== $title ==="
}

function prom_query() {
  local expr="$1"
  curl -sG "${PROM_URL}/api/v1/query" --data-urlencode "query=${expr}"
}

function show_metric() {
  local label="$1"
  local expr="$2"
  heading "Prometheus: ${label}"
  local response
  response=$(prom_query "${expr}")
  if [[ ${HAVE_JQ} -eq 1 ]]; then
    local status
    status=$(echo "${response}" | jq -r '.status')
    local value
    value=$(echo "${response}" | jq -r '.data.result[0].value[1] // empty')
    echo "Expresión: ${expr}"
    echo "Estado   : ${status}"
    if [[ -n "${value}" ]]; then
      echo "Valor    : ${value}"
    else
      echo "Valor    : (sin datos)"
    fi
    echo "JSON crudo:"
    echo "${response}" | jq
  else
    echo "Expresión: ${expr}"
    echo "(Instala 'jq' para un formateo más claro)"
    echo "${response}"
  fi
}

# 1) Check MV metadata en la base
if [[ -n "${DATABASE_URL:-}" ]]; then
  DB_URL="${DATABASE_URL//sslmode=no-verify/sslmode=require}"
  heading "Postgres: telemetry.mv_metadata (últimos 5 registros)"
  psql "${DB_URL}" -c "select view_name, refreshed_at, now() - refreshed_at as age from telemetry.mv_metadata order by refreshed_at desc limit 5;"
else
  heading "Postgres: telemetry.mv_metadata"
  echo "Variable DATABASE_URL no definida. Se omite consulta a la base."
fi

# 2) Métricas principales (las de las cards)
show_metric "Check-in p95 (5m)" "histogram_quantile(0.95, sum by (le, channel, tenant) (rate(seatpilot_checkin_latency_ms_histogram_bucket[5m])))"
show_metric "Door→Seat p95 (15m)" "histogram_quantile(0.95, sum by (le) (rate(seatpilot_door_to_seat_seconds_bucket[15m])))"
show_metric "Rechazos 5m (%)" "seatpilot:ingest_reject_rate_5m / ignoring(reason) seatpilot:ingest_rate_5m"
show_metric "MV Lag promedio (5m)" "seatpilot:mv_lag_avg_5m"

# 3) Conteos para verificar actividad
show_metric "Check-in count" "seatpilot_checkin_latency_ms_count"
show_metric "Door→Seat sum" "seatpilot_door_to_seat_seconds_sum"
show_metric "MV Lag instantáneo" "seatpilot_mv_lag_seconds"

# --- SLO evaluation ---
SLO_CHECKIN_P95_MS=${SLO_CHECKIN_P95_MS:-300}
SLO_D2S_P95_S=${SLO_D2S_P95_S:-60}
SLO_REJECT_PCT=${SLO_REJECT_PCT:-0.01}
SLO_MV_LAG_AVG_S=${SLO_MV_LAG_AVG_S:-10}

Q_CHECKIN_P95='histogram_quantile(0.95, sum by (le, channel, tenant) (rate(seatpilot_checkin_latency_ms_histogram_bucket[5m])))'
Q_D2S_P95='histogram_quantile(0.95, sum by (le) (rate(seatpilot_door_to_seat_seconds_bucket[15m])))'
Q_REJECT_RATE='seatpilot:ingest_reject_rate_5m / ignoring(reason) seatpilot:ingest_rate_5m'
Q_MV_LAG_AVG='seatpilot:mv_lag_avg_5m'

prom_raw() { curl -sG "${PROM_URL}/api/v1/query" --data-urlencode "query=$1"; }
prom_val() {
  local raw="$1"
  if [[ ${HAVE_JQ} -eq 1 ]]; then
    echo "$raw" | jq -r '.data.result[0].value[1]' 2>/dev/null || echo ""
  else
    printf '%s
' "$raw" | sed -n 's/.*\[\s*[0-9.]\+,\s*"\([^"]*\)".*/\1/p' | head -n1
  fi
}

V_CHECKIN_P95_MS=$(prom_val "$(prom_raw "$Q_CHECKIN_P95")")
V_D2S_P95_S=$(prom_val "$(prom_raw "$Q_D2S_P95")")
V_REJECT_PCT=$(prom_val "$(prom_raw "$Q_REJECT_RATE")")
V_MV_LAG_AVG_S=$(prom_val "$(prom_raw "$Q_MV_LAG_AVG")")

FAIL=0
compare() {
  local name="$1" value="$2" threshold="$3"
  if [[ -z "$value" || "$value" == "NaN" || "$value" == "null" ]]; then
    value=0
    echo "🟡 ${name}: sin datos recientes, se asume ${value} para evaluación."
  fi
  set +e
  python3 - "$value" "$threshold" <<'PY'
import sys, math
try:
    v = float(sys.argv[1])
    t = float(sys.argv[2])
except ValueError:
    sys.exit(2)
sys.exit(0 if v <= t else 1)
PY
  exit_code=$?
  set -e
  if [[ $exit_code -eq 2 ]]; then
    echo "❓ ${name}: valor no numérico ($value)"
    FAIL=1
  elif [[ $exit_code -ne 0 ]]; then
    echo "❌ ${name}: ${value} (umbral ${threshold})"
    FAIL=1
  else
    echo "✅ ${name}: ${value} (umbral ${threshold})"
  fi
  unset exit_code
}

heading "Evaluación de SLOs"
compare "Check-in p95 (ms)" "$V_CHECKIN_P95_MS" "$SLO_CHECKIN_P95_MS"
compare "Door→Seat p95 (s)" "$V_D2S_P95_S" "$SLO_D2S_P95_S"
compare "Reject rate (5m)" "$V_REJECT_PCT" "$SLO_REJECT_PCT"
compare "MV lag promedio (s)" "$V_MV_LAG_AVG_S" "$SLO_MV_LAG_AVG_S"

if [[ $FAIL -ne 0 ]]; then
  echo "⛔ Overview check detectó SLOs incumplidos."
  exit 2
fi

echo
echo "🟢 Overview check completado sin alertas."
