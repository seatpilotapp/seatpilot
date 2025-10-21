# Release R1 – Operación End-to-End

**Objetivo:** ejecutar el Release Toolkit completo (merge → tag → deploy → warmup → verificación → seeds) y confirmar datos vivos en Supabase, Prometheus y Grafana.

---

## 1. Requisitos del Host

Verifica desde la raíz del repo:

```bash
docker -v
git --version
gh --version
psql --version
make --version
pnpm -v
```

Instala cualquier binario faltante antes de continuar.

---

## 2. Preparar Artefactos

```bash
pnpm install
pnpm -r build
```

---

## 3. Configurar Entorno (`.release.env`)

```bash
cp .release.env.example .release.env
```

Edita `.release.env` con valores reales (no lo subas al repo):

```env
PR_NUMBER=4
RELEASE_TAG=v1.0.0-prod-r1
COMPOSE=docker-compose.prod.yml

SUPABASE_DB_URL='postgresql://postgres:<PASSWORD>@db.<PROJECT_REF>.supabase.co:5432/postgres?sslmode=require'

METRICS_API_BASE_URL='http://localhost:9100'
METRICS_API_KEY='sgp_xxx'
SEED_TENANT='demo'
SEED_CHANNEL='kiosk'
```

---

## 4. Cargar Variables y Verificar

```bash
source .release.env
make env
```

Confirma que las variables impresas son correctas.

---

## 5. Pre-flight

```bash
make preflight
```

Valida binarios, archivo compose y conexión a Supabase. Debe terminar con `✓ Pre-flight OK`.

---

## 6. Ejecutar Release Completo

```bash
make release
```

El target encadena:

1. Merge del PR `PR_NUMBER`
2. Tag `RELEASE_TAG`
3. Deploy `docker compose -f $COMPOSE up -d`
4. Warm-up (`scripts/cold-start.sh`)
5. Verificación de DB/cron/Prometheus

Resultado esperado: `✅ Release completado: <tag>`

---

## 7. Observabilidad

- **Prometheus:** `http://localhost:9090/targets` → `metrics-api:8080` y `telemetry-ingest:3001` en **UP**.
- **Grafana:** `http://localhost:3300` (`admin/admin`) → dashboard **Ops Live v1 (Zones)** en rango *Last 15 minutes* con datos.

Si ves “No data”, ejecutar seeds:

```bash
make seed-ops-live
make seed-db
```

Espera 30–60 s y refresca dashboards.

---

## 8. Verificación en Supabase

```bash
psql "$SUPABASE_DB_URL" -c "select id, display_name, price_cents from plans;"
psql "$SUPABASE_DB_URL" -c "
select * from v_tenant_billing_report
where period_key = to_char(date_trunc('month', now()), 'YYYY-MM')
order by tenant_id limit 10;"
```

Debe mostrar planes (Starter/Pro/Enterprise) y consumo del mes actual.

---

## 9. Cron Jobs

```bash
psql "$SUPABASE_DB_URL" -c "
select jobid, jobname, schedule, active, command
from cron.job
where jobname in ('billing_close_month','ops_metering_seed_daily');"
```

Esperado: ambos `active = t`.

---

## 10. Evidencias

- Captura del log final `make release`
- Capturas de Grafana (Ops Live v1)
- Salida de `v_tenant_billing_report`
- Salida de cron jobs

Guárdalas en `docs/history/` o adjunta al Issue #8.

---

## 11. Troubleshooting

- `make deploy` — reintentar despliegue
- `make cold-start` — repetir warm-up
- `make verify` — revalidar DB/cron/targets
- `make seed-ops-live` / `make seed-db` — repoblar datos
- `make rollback` — seguir instrucciones impresas para revertir

---

## 12. Post-release

1. Cierra PR #4 tras merge exitoso.
2. Empuja el tag (si no lo hizo el target):
   ```bash
   git push origin v1.0.0-prod-r1
   ```
3. Documenta resultados y arranca R2 según `docs/roadmap/R2_backlog.md`.

---

**Notas:** Revisa Issue #8 para checklist interactivo. Ejecuta este runbook desde un host seguro con acceso a secrets. Rotate `.release.env` credenciales de forma trimestral.
