#!/bin/sh
set -eu

# Lee el JWT del secreto y quita saltos
export SERVICE_ROLE_JWT="$(tr -d '\r\n ' < /run/secrets/supabase_service_role.jwt)"

# Renderiza el template a la conf final
envsubst < /etc/nginx/templates/seatpilot-metrics.conf.template > /etc/nginx/conf.d/default.conf

# (opcional) log de longitud para depurar
echo "SERVICE_ROLE_JWT length: $(printf %s "$SERVICE_ROLE_JWT" | wc -c)"

exec nginx -g 'daemon off;'
