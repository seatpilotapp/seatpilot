#!/usr/bin/env bash
set -euo pipefail

RED()  { printf "\033[31m%s\033[0m\n" "$*"; }
GRN()  { printf "\033[32m%s\033[0m\n" "$*"; }
YEL()  { printf "\033[33m%s\033[0m\n" "$*"; }
HDR()  { printf "\n\033[1m%s\033[0m\n" "$*"; }

fail(){ RED "❌ $*"; exit 1; }

HDR "SeatPilot – Release Pre-flight"

# 0) Binarios requeridos
for cmd in git docker psql gh bash; do
  command -v "$cmd" >/dev/null 2>&1 || fail "No se encuentra $cmd en PATH"
done
GRN "✓ Binarios presentes (git, docker, psql, gh, bash)"

# 1) Variables obligatorias
: "${PR_NUMBER:?PR_NUMBER no definido}"
: "${RELEASE_TAG:?RELEASE_TAG no definido}"
: "${COMPOSE:?COMPOSE no definido}"
: "${SUPABASE_DB_URL:?SUPABASE_DB_URL no definido (incluye sslmode=require)}"

YEL "PR_NUMBER=$PR_NUMBER | RELEASE_TAG=$RELEASE_TAG | COMPOSE=$COMPOSE"

# 2) Compose disponible
[ -f "$COMPOSE" ] || fail "No existe $COMPOSE"

# 3) Verificación de conexión a la base de datos
HDR "↪ Ping a Supabase DB"
psql "$SUPABASE_DB_URL" -c "select now();" >/dev/null 2>&1 || fail "No se pudo conectar a la DB (revisa SUPABASE_DB_URL y sslmode=require)"
GRN "✓ DB OK"

# 4) Verificación opcional de metrics-api
if [ -n "${METRICS_API_BASE_URL:-}" ] && [ -n "${METRICS_API_KEY:-}" ]; then
  HDR "↪ Probar metrics-api"
  curl -fsS "$METRICS_API_BASE_URL/metrics" >/dev/null || YEL "⚠️ $METRICS_API_BASE_URL/metrics no respondió; verificar luego de deploy"
  GRN "✓ Verificación básica de metrics-api (opcional)"
else
  YEL "⚠️ METRICS_API_BASE_URL o METRICS_API_KEY no definidos (seed-ops-live se omitirá)"
fi

# 5) Puertos locales informativos
HDR "↪ Verificar puertos (opcional)"
for port in 9090 3300 8080 3001; do
  (echo > /dev/tcp/127.0.0.1/$port) >/dev/null 2>&1 && YEL "• puerto $port ya abierto (ok si stack está corriendo)" || true
done

GRN "✓ Pre-flight OK. Puedes ejecutar: make release"
