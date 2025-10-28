# Licenciamiento & Metering – Runbook de despliegue y verificación

> Uso: aplicar cambios futuros en el módulo SaaS (planes, entitlements, metering, cron) y dejar evidencias antes de cualquier release a producción.

## 1. Prerrequisitos

- Supabase CLI instalada (`supabase --version`).
- Proyecto SeatPilot linkeado (`supabase link --project-ref <ref>`).
- URL de conexión Postgres (`SUPABASE_DB_URL`) o acceso al SQL editor.
- Acceso a Slack / alertmanager para pruebas de alerta.
- Secrets reales cargados en el Secret Store (no en `.env.prod`).

## 2. Aplicar SQL (100 → 105)

> Ejecutar en orden. Puedes usar `psql` con la variable `SUPABASE_DB_URL` o copiar/pegar en el SQL editor.

```bash
psql "$SUPABASE_DB_URL" -f supabase/sql/100_entitlements_metering.sql
psql "$SUPABASE_DB_URL" -f supabase/sql/101_metering_functions.sql
psql "$SUPABASE_DB_URL" -f supabase/sql/102_billing_views.sql
psql "$SUPABASE_DB_URL" -f supabase/sql/103_rls_entitlements.sql
psql "$SUPABASE_DB_URL" -f supabase/sql/104_cron.sql       # programar/reprogramar pg_cron
psql "$SUPABASE_DB_URL" -f supabase/sql/105_seed_plans.sql # opcional: seeds Starter/Pro/Enterprise
```

### Verificación rápida

```bash
psql "$SUPABASE_DB_URL" -c "select id, display_name, price_cents from plans;"
psql "$SUPABASE_DB_URL" -c "select * from v_tenant_billing_report limit 5;"
```

## 3. Cron `billing_close_month`

El archivo `supabase/sql/104_cron.sql` es idempotente:

- Elimina (`cron.unschedule`) el job si ya existe.
- Vuelve a crear el job mensual (día 1, 00:05 UTC).
- Usa `$cron$ ... $cron$` para evitar errores de quoting.

### Comandos útiles

```bash
# Confirmar que el job exista
psql "$SUPABASE_DB_URL" -c \
"select jobid, jobname, schedule, active from cron.job where jobname='billing_close_month';"

# Desprogramar manualmente (si hace falta)
psql "$SUPABASE_DB_URL" -c \
"select cron.unschedule((select jobid from cron.job where jobname='billing_close_month'));"
```

## 4. Snapshot manual (opcional)

```bash
psql "$SUPABASE_DB_URL" -c "
insert into billing_snapshots(tenant_id, period_key, report)
select tenant_id, period_key, to_jsonb(vrb)
from v_tenant_billing_report vrb
where period_key = to_char(date_trunc('month', now()), 'YYYY-MM');
"

psql "$SUPABASE_DB_URL" -c \
"select * from billing_snapshots order by created_at desc limit 5;"
```

## 5. Generar consumo de prueba (tenant demo)

```sql
-- Crear tenant y suscripción
insert into tenants(name,status) values ('Demo Venue','active') returning id;

-- Usar UUID devuelto en los siguientes inserts
insert into tenant_subscriptions(tenant_id, plan_id, status)
values ('<UUID>', 'pro', 'active');

-- Eventos idempotentes
select metering_ingest('<UUID>','event_created',1,'idem-evt-001','{}', now());
select metering_ingest('<UUID>','checkin',25,'idem-ck-001','{}', now());
select metering_ingest('<UUID>','screen_active',1,'idem-sc-001','{}', now());
```

## 6. UI Admin `/admin/billing`

- HTML: `https://<host>/admin/billing?tenant=<uuid>&period=<YYYY-MM>`
- CSV: `https://<host>/admin/billing/csv?tenant=<uuid>&period=<YYYY-MM>`
- Requiere `DATABASE_URL` o `SUPABASE_DB_URL` configurado para el adapter PG.
- Respeta `app.current_tenant_id()` (RLS) si se setea en el middleware.

## 7. Hardening de producción (recordatorio)

- `.env.prod.template` → solo nombres de variables; secretos reales en Secret Store.
- `docker-compose.prod.yml` → `restart: unless-stopped`, límites `cpus`/`memory`, `logging` (`max-size`, `max-file`).
- `scripts/cold-start.sh` → Calienta check-in (20 requests) y recarga Prometheus.
- Alertmanager: usa `${ALERT_SLACK_WEBHOOK}` / `${ALERT_SLACK_CHANNEL}`; prueba `CHECKIN_SLOW_LOOKUP_MS=250`.

## 8. Seed de datos demo (opcional)

> Para un seed manual rápido usa `supabase/sql/metering_seed.sql`. Para un seed generalizado usa la función `app.seed_metering_demo` (`supabase/sql/106_seed_demo.sql`).

```bash
psql "$SUPABASE_DB_URL" -f supabase/sql/metering_seed.sql
```

> Script funcional `app.seed_metering_demo` (todos los tenants `active|trial`):

```bash
psql "$SUPABASE_DB_URL" -f supabase/sql/106_seed_demo.sql
psql "$SUPABASE_DB_URL" -c "select app.seed_metering_demo(2, 25);"
```

### Cron diario (opcional)

```bash
psql "$SUPABASE_DB_URL" -f supabase/sql/107_cron_metering_seed.sql
psql "$SUPABASE_DB_URL" -c "select jobid, jobname, schedule from cron.job where jobname='ops_metering_seed_daily';"
```

Luego verifica en `/admin/billing` y Ops Live que haya datos recientes.

## 9. Evidencias para el Release PR

1. `psql select id, display_name from plans;`
2. `psql select * from v_tenant_billing_report limit 5;`
3. `psql select jobid, jobname, schedule from cron.job where jobname='billing_close_month';`
4. `psql select * from billing_snapshots order by created_at desc limit 5;`
5. Capturas de:
   - Grafana Ops Live v1 (tiles Assign / Door→Seat)
   - Admin Billing (HTML + CSV)
6. Logs de `./scripts/cold-start.sh`
7. Workflows verdes en `.github` (Brand, FE A11y/PWA, Backend, Supabase SQL) + environment `production` aprobado

### Generar template de release automáticamente

```bash
pnpm release:notes v1.0.0-prod-r1 > /tmp/release-notes.md
# Ajusta la versión y edita el archivo generado antes de publicarlo
```

## 10. Stripe sandbox · worker + webhook (idempotencia)

1. **Variables locales**

   ```bash
   export STRIPE_API_KEY=sk_test_...
   export STRIPE_WEBHOOK_SECRET=whsec_...
   export DATABASE_URL=postgresql://<user>:<pass>@<host>/<db>?sslmode=require
   # Opcional: ajustar tarifas por unidad (cents)
   export BILLING_EVENTS_OVERAGE_UNIT_CENTS=25
   export BILLING_SCREENS_OVERAGE_UNIT_CENTS=150
   export BILLING_CHECKINS_OVERAGE_UNIT_CENTS=50
   export BILLING_PERIOD_KEY=$(date -u +"%Y-%m")
   ```

   ![alt text](image.png)

2. **Webhook local**

   ```bash
   # En una terminal
   stripe listen --forward-to http://localhost:3000/api/billing/webhook --events invoice.payment_succeeded
   ```

   > Requiere ejecutar el front Next (o el handler) escuchando en `:3000`. Usa `pnpm next dev` en `apps/seat-designer` o despliegue equivalente.

3. **Worker (Stripe draft + idempotencia)**

   ```bash
   pnpm --filter @seatpilot/billing-worker build
   pnpm --filter @seatpilot/billing-worker start
   # o pnpm --filter @seatpilot/billing-worker dev para ejecutar con tsx
   ```

4. **Prueba de idempotencia**

   ```bash
   stripe trigger invoice.payment_succeeded
   stripe trigger invoice.payment_succeeded  # segunda vez ⇒ skipped
   ```

5. **Verificaciones SQL**

   ```bash
   psql "$DATABASE_URL" -c "select tenant_id, period_key, status, amount_due_cents from billing_processed order by processed_at desc limit 10;"
   psql "$DATABASE_URL" -c "select event_id, event_type, status from billing_webhook_audit order by received_at desc limit 10;"
   ```

   - Primera corrida → `billing_processed.status = processed`, `billing_webhook_audit.status = processed`.
   - Segundo trigger → `billing_processed` sin cambios (`processed`), webhook `result=duplicate`.

6. **Evidencia en PR**
   - Log del worker (`processed=… skipped=… errors=…`).
   - Captura de `stripe trigger` mostrando `status=200`.
   - Salida de las consultas SQL (`billing_processed` y `billing_webhook_audit`).

## 11. Troubleshooting rápido

| Error / síntoma                                  | Causa habitual                                            | Fix                                                 |
| ------------------------------------------------ | --------------------------------------------------------- | --------------------------------------------------- |
| `unknown flag: --file` en `supabase db push`     | CLI no acepta `--file`                                    | Usa `psql -f` o mueve a `supabase/migrations`       |
| `psql: ... socket "/tmp/.s.PGSQL.5432" failed`   | `SUPABASE_DB_URL` no seteada; intenta conectar local      | Exporta la URI completa (incluye `sslmode=require`) |
| `syntax error at or near "\"` in Supabase editor | Intentaste `\i` en el editor web                          | Copia/pega el contenido completo del archivo        |
| `schema "app" does not exist` al aplicar RLS     | No se creó el schema antes de la función                  | `create schema if not exists app;`                  |
| Cron duplicado / cambio de horario               | Reaplica `104_cron.sql` (idempotente) o `cron.unschedule` |
| `/admin/billing` vacío                           | No hay métricas en `v_tenant_billing_report`              | Ejecuta metering_ingest o fixtures demo             |

---

**Última actualización:** 2025-10-21 — Referencia en PR `release/prod-r1-licensing-metering`.
