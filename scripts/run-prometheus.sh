#!/usr/bin/env bash
# Helper to render the Prometheus config with secrets, validate connectivity,
# and launch Prometheus in the foreground.

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="${ROOT_DIR}/.env.prometheus"

if [[ -f "$ENV_FILE" ]]; then
  # shellcheck disable=SC1090
  set -a
  source "$ENV_FILE"
  set +a
fi

if ! command -v python3 >/dev/null 2>&1; then
  echo "python3 is required to render the Prometheus configuration." >&2
  exit 127
fi

: "${SUPABASE_SERVICE_ROLE_JWT:?Set SUPABASE_SERVICE_ROLE_JWT in the environment or in .env.prometheus}"

PROM_BIN="${PROM_BIN:-./prometheus-3.7.0-rc.0.darwin-amd64/prometheus}"
PROM_CONFIG="${PROM_CONFIG:-prometheus.yml}"
PROM_STORAGE_PATH="${PROM_STORAGE_PATH:-./data}"
PROM_LISTEN_PORT="${PROM_LISTEN_PORT:-9090}"
SUPABASE_METRICS_URL="${SUPABASE_METRICS_URL:-https://qfwptupwrqdhxegxueuc.supabase.co/customer/v1/privileged/metrics}"
SKIP_SUPABASE_CHECK="${SKIP_SUPABASE_CHECK:-false}"
SUPABASE_TOKEN_FILE="${SUPABASE_TOKEN_FILE:-}"

if [[ "$PROM_BIN" != /* ]]; then
  PROM_BIN="${ROOT_DIR}/${PROM_BIN}"
fi

if [[ "$PROM_CONFIG" != /* ]]; then
  PROM_CONFIG="${ROOT_DIR}/${PROM_CONFIG}"
fi

if [[ "$PROM_STORAGE_PATH" != /* ]]; then
  PROM_STORAGE_PATH="${ROOT_DIR}/${PROM_STORAGE_PATH}"
fi

if [[ ! -x "$PROM_BIN" ]]; then
  echo "Prometheus binary not found or not executable at: $PROM_BIN" >&2
  exit 1
fi

if [[ ! -f "$PROM_CONFIG" ]]; then
  echo "Prometheus configuration file not found at: $PROM_CONFIG" >&2
  exit 1
fi

# Fail early if the Prometheus web port is already in use.
python3 - "$PROM_LISTEN_PORT" <<'PY'
import socket
import sys

port = int(sys.argv[1])
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    sock.settimeout(1)
    if sock.connect_ex(("127.0.0.1", port)) == 0:
        print(f"Port {port} is already in use. Stop the existing Prometheus instance first.", file=sys.stderr)
        sys.exit(1)
PY

# Validate Supabase privileged metrics endpoint to avoid repeated scrape failures.
_skip_check_lc="$(printf '%s' "$SKIP_SUPABASE_CHECK" | tr '[:upper:]' '[:lower:]')"
if [[ "$_skip_check_lc" != "true" ]]; then
  python3 - "$SUPABASE_METRICS_URL" "$SUPABASE_SERVICE_ROLE_JWT" <<'PY'
import json
import ssl
import sys
import urllib.request
import urllib.parse

url = sys.argv[1]
token = sys.argv[2]

parts = list(urllib.parse.urlparse(url))
query = urllib.parse.parse_qs(parts[4], keep_blank_values=True)
query.setdefault("apikey", [token])
parts[4] = urllib.parse.urlencode(query, doseq=True)
final_url = urllib.parse.urlunparse(parts)

req = urllib.request.Request(
    final_url,
    headers={
        "Authorization": f"Bearer {token}",
        "apikey": token,
        "Accept": "application/openmetrics-text",
    },
)

context = ssl.create_default_context()

try:
    with urllib.request.urlopen(req, timeout=10, context=context) as resp:
        status = resp.getcode()
        if status != 200:
            body = resp.read(512).decode("utf-8", errors="ignore")
            print(
                f"Supabase metrics endpoint responded with {status}. "
                f"Body (first 512 bytes): {body}",
                file=sys.stderr,
            )
            sys.exit(1)
except urllib.error.HTTPError as exc:
    body = exc.read().decode("utf-8", errors="ignore")
    print(f"Supabase metrics endpoint returned {exc.code}: {body}", file=sys.stderr)
    sys.exit(1)
except Exception as exc:  # pylint: disable=broad-except
    print(f"Failed to reach Supabase metrics endpoint: {exc}", file=sys.stderr)
    sys.exit(1)
PY
fi

TMP_DIR="${ROOT_DIR}/.tmp"
mkdir -p "$TMP_DIR"
GENERATED_CONFIG="${TMP_DIR}/prometheus.generated.yml"

if [[ -z "$SUPABASE_TOKEN_FILE" ]]; then
  SUPABASE_TOKEN_FILE="${TMP_DIR}/supabase_service_role.jwt"
fi

printf '%s' "$SUPABASE_SERVICE_ROLE_JWT" > "$SUPABASE_TOKEN_FILE"
chmod 0400 "$SUPABASE_TOKEN_FILE"
export SUPABASE_BEARER_TOKEN_FILE="$SUPABASE_TOKEN_FILE"

python3 - "$PROM_CONFIG" "$GENERATED_CONFIG" "$SUPABASE_SERVICE_ROLE_JWT" <<'PY'
import pathlib
import sys

template_path = pathlib.Path(sys.argv[1])
output_path = pathlib.Path(sys.argv[2])
token = sys.argv[3]

content = template_path.read_text()
content = content.replace("${SUPABASE_SERVICE_ROLE_JWT}", token)

output_path.write_text(content)
PY

python3 - "$GENERATED_CONFIG" "$SUPABASE_BEARER_TOKEN_FILE" <<'PY'
import pathlib
import sys

config_path = pathlib.Path(sys.argv[1])
token_path = pathlib.Path(sys.argv[2])

content = config_path.read_text()
content = content.replace("${SUPABASE_BEARER_TOKEN_FILE}", str(token_path))
config_path.write_text(content)
PY

echo "Rendered config → $GENERATED_CONFIG"
echo "Wrote Supabase bearer token file → $SUPABASE_BEARER_TOKEN_FILE"
echo "Validated Supabase metrics endpoint → $SUPABASE_METRICS_URL"
echo "Starting Prometheus on port ${PROM_LISTEN_PORT}..."

exec "$PROM_BIN" \
  --config.file="$GENERATED_CONFIG" \
  --storage.tsdb.path="$PROM_STORAGE_PATH" \
  --web.enable-lifecycle
