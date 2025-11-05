#!/bin/sh
set -eu

export SERVICE_ROLE_JWT="$(tr -d '\r\n ' < /run/secrets/supabase_service_role.jwt)"

envsubst '${SERVICE_ROLE_JWT} ${SUPABASE_HOST}' < /etc/nginx/templates/seatpilot-metrics.conf.template > /etc/nginx/conf.d/default.conf

echo "SERVICE_ROLE_JWT length: $(printf %s "$SERVICE_ROLE_JWT" | wc -c)"
echo "Using SUPABASE_HOST: ${SUPABASE_HOST}"

exec nginx -g 'daemon off;'
