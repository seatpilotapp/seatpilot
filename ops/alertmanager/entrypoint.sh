#!/bin/sh
set -eu

TEMPLATE="/etc/alertmanager/alertmanager.yml"
OUTPUT="/tmp/alertmanager.rendered.yml"

WEBHOOK="${ALERTMANAGER_SLACK_WEBHOOK_URL:-http://alert-echo:8081/}"
CHANNEL="${ALERTMANAGER_SLACK_CHANNEL:-#seatpilot-alerts}"

escape() {
  printf '%s' "$1" | sed 's/[&|]/\\&/g'
}

sed \
  -e "s|__ALERTMANAGER_SLACK_WEBHOOK_URL__|$(escape "$WEBHOOK")|g" \
  -e "s|__ALERTMANAGER_SLACK_CHANNEL__|$(escape "$CHANNEL")|g" \
  "$TEMPLATE" > "$OUTPUT"

exec /bin/alertmanager --config.file="$OUTPUT"
