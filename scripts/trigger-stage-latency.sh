#!/usr/bin/env bash

set -euo pipefail

usage() {
  cat <<'EOF'
Usage: scripts/trigger-stage-latency.sh [duration_ms]

Sets CHECKIN_SLOW_LOOKUP_MS, restarts the check-in service, runs smoke:f1.2.sh,
then restores the previous value. Default duration is 250 ms.

Environment:
  CHECKIN_SLOW_LOOKUP_MS  - override duration for the lookup delay (ms)
  CHECKIN_SERVICE_NAME    - docker compose service name (default: checkin)
  PNPM_BIN                - path to pnpm (default: pnpm in PATH)
  DOCKER_COMPOSE_BIN      - docker compose executable (default: docker compose)

EOF
}

if [[ "${1:-}" =~ ^(-h|--help)$ ]]; then
  usage
  exit 0
fi

TARGET_MS="${1:-${CHECKIN_SLOW_LOOKUP_MS:-250}}"
if ! [[ "$TARGET_MS" =~ ^[0-9]+$ ]]; then
  echo "Invalid duration: $TARGET_MS" >&2
  exit 1
fi

CHECKIN_SERVICE_NAME="${CHECKIN_SERVICE_NAME:-checkin}"
PNPM_BIN="${PNPM_BIN:-pnpm}"
DOCKER_COMPOSE_BIN="${DOCKER_COMPOSE_BIN:-docker compose}"
SKIP_RESTART="${SKIP_RESTART:-false}"

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="${PROJECT_ROOT}/.env"

if [[ ! -f "$ENV_FILE" ]]; then
  echo ".env file not found at $ENV_FILE" >&2
  exit 1
fi

ORIGINAL_VALUE="$(grep -E '^CHECKIN_SLOW_LOOKUP_MS=' "$ENV_FILE" | tail -n1 | cut -d'=' -f2- || true)"

trap 'restore_env' EXIT

restore_env() {
  if [[ -n "$ORIGINAL_VALUE" ]]; then
    perl -0pi -e "s/^CHECKIN_SLOW_LOOKUP_MS=.*/CHECKIN_SLOW_LOOKUP_MS=${ORIGINAL_VALUE}/m" "$ENV_FILE"
  else
    perl -0pi -e "s/^CHECKIN_SLOW_LOOKUP_MS=.*\n//m" "$ENV_FILE"
  fi
  export CHECKIN_SLOW_LOOKUP_MS="${ORIGINAL_VALUE:-0}"
  if [[ "$SKIP_RESTART" != "true" ]]; then
    $DOCKER_COMPOSE_BIN up -d "$CHECKIN_SERVICE_NAME" >/dev/null
  fi
}

echo "Setting CHECKIN_SLOW_LOOKUP_MS=${TARGET_MS}"
if grep -q '^CHECKIN_SLOW_LOOKUP_MS=' "$ENV_FILE"; then
  perl -0pi -e "s/^CHECKIN_SLOW_LOOKUP_MS=.*/CHECKIN_SLOW_LOOKUP_MS=${TARGET_MS}/m" "$ENV_FILE"
else
  printf '\nCHECKIN_SLOW_LOOKUP_MS=%s\n' "$TARGET_MS" >>"$ENV_FILE"
fi
export CHECKIN_SLOW_LOOKUP_MS="$TARGET_MS"

if [[ "$SKIP_RESTART" != "true" ]]; then
  echo "Restarting service $CHECKIN_SERVICE_NAME..."
  $DOCKER_COMPOSE_BIN up -d "$CHECKIN_SERVICE_NAME"
  echo "Waiting for service to pick up env..."
  sleep 5
else
  echo "Skipping service restart (SKIP_RESTART=true)"
fi

echo "Running smoke:f1.2..."
(cd "$PROJECT_ROOT" && $PNPM_BIN smoke:f1.2)

echo "Stage latency smoke completed. Restoring environment..."
