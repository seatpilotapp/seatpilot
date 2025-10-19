# Prometheus Helper Script

Use `scripts/run-prometheus.sh` to render `prometheus.yml` with secrets, verify connectivity, and launch Prometheus locally.

1. `cp .env.prometheus.example .env.prometheus`
2. Fill `SUPABASE_SERVICE_ROLE_JWT`, and adjust `PROM_BIN`, `SUPABASE_METRICS_URL`, or other overrides if needed. Optionally set `SUPABASE_TOKEN_FILE` if you want the bearer token written somewhere other than `.tmp/supabase_service_role.jwt`.
3. Run `./scripts/run-prometheus.sh`
   - El script falla rápido si el puerto `PROM_LISTEN_PORT` (por defecto 9090) ya está en uso.
   - Valida el endpoint `SUPABASE_METRICS_URL` antes de arrancar; usa `SKIP_SUPABASE_CHECK=true` sólo si quieres saltarte la prueba.
   - Genera `.tmp/prometheus.generated.yml`, crea un archivo con el token para el header Bearer y arranca Prometheus con `--web.enable-lifecycle`.

After the script starts Prometheus, open `http://localhost:9090/status/targets` to confirm both `prometheus` and `supabase-seatpilot` report `UP`.
