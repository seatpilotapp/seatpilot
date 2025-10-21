# Telemetry Ingestion Route (Blueprint)

This service validates and persists telemetry events following the Fase 0 contract.

## Validation flow

La implementación de referencia vive en `src/routes/events.ts` y se expone vía `src/server.ts`:

```ts
import { ingestHandler } from './routes/events';
app.post('/v1/events', ingestHandler);
```

El flujo importa los helpers:

- `computeHmac`, `timingSafeEqualHex` (`lib/crypto.ts`)
- `isUniqueNonce` (`lib/nonce.ts`)
- `canonicalEventNameDB` (`lib/alias.ts`)
- `rejectToDLQ` (`lib/dlq.ts`)
- `loadSchema` (`lib/registry.ts`)
- `upsertEventsRaw` dentro de `routes/events.ts` — reemplázalo por tu persistencia real (Supabase/Postgres).
- JSON Schemas esperados en `schemas/<event_name>.json` (ver ejemplos para `checkin.qr_scan_start` y `wayfinding.arrive_table`).

Mira `test/contract.spec.ts` para los contract tests que ejercitan alias, enums, replay y idempotencia.

## Required tests (CI)

- **Alias normalisation:** `qr_scan_start` ingests as `checkin.qr_scan_start`.
- **Enum enforcement:** invalid `confirm_mode`/`status`/`reason_code` returns `422`.
- **Schema validation:** additional properties on strict payloads raise `schema_mismatch`.
- **Replay protection:** reusing the same `x-nonce` results in `401`.
- **Idempotency:** repeating `event_id` returns `200` without duplicates.

Persist all rejects into `telemetry.events_dlq` for weekly review (`infra/supabase/telemetry_events_dlq.sql`).

## Operational thresholds

- Clock skew tolerance: ±300 s (`x-ts` header).
- Nonce TTL: 300 s (unique per event).
- Payload limit: 16 KB per request.
- Rate limits sugeridos: ingest 30 req / 10 s; check-in 10 req / 10 s (por tenant/canal).
- HMAC: SHA-256 sobre `method|url|ts|nonce|body` con clave por tenant (`x-key`).
- Retención: 90 días (operaciones), 365 días (safety/compliance).
- CI obligatorio con contract tests (alias, enums, schema, replay, idempotencia).

## Smoke test HMAC

```bash
TS=$(date +%s000)
NONCE=$(uuidgen)
KEY="TENANT_SECRET"
BODY=$(cat services/telemetry-ingest/body.json)

node services/telemetry-ingest/scripts/sign.ts "$TS" "$NONCE" "$BODY" "$KEY" > sig.txt
SIG=$(cat sig.txt)

curl -i -X POST https://ingest.seatpilot.app/v1/events \
  -H "x-ts: $TS" \
  -H "x-nonce: $NONCE" \
  -H "x-key: tenant_key_id" \
  -H "x-sig: $SIG" \
  -H "content-type: application/json" \
  -d @services/telemetry-ingest/body.json
```

## Configuración de entorno (server-side)

```bash
SUPABASE_URL="https://<tu-proyecto>.supabase.co"
SUPABASE_SERVICE_ROLE="<service-role-secret>"
HMAC_TENANT_SECRET="<clave-hmac-por-tenant>"
SUPABASE_DB_URL="postgresql://<user>:<pass>@<host>:6543/postgres?sslmode=require" # opcional si usas pg directo
PGSSLMODE=require
METRICS_API_BASE_URL="http://metrics-api:8080" # opcional: enviar contadores/latencias a seatpilot-metrics-api
```

## Runtime integration

### Next.js (App Router)

```ts
// apps/web/app/api/telemetry/ingest/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ingestHandler } from 'services/telemetry-ingest/src/routes/events';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const bodyText = await req.text();
  const reqShim: any = {
    method: req.method,
    url: req.nextUrl.pathname,
    headers: Object.fromEntries(req.headers.entries()),
    body: bodyText ? JSON.parse(bodyText) : {}
  };
  const resShim: any = {
    status: (status: number) => ({
      json: (payload: any) => NextResponse.json(payload, { status })
    })
  };
  return ingestHandler(reqShim, resShim);
}
```

Alternativas: Supabase Edge Functions (Deno) o publicar `services/telemetry-ingest` detrás de un proxy interno (Nginx/Ingress) con rate-limit.

## Dashboards (SQL snippets)

```sql
-- Accepted events per minute (last hour)
select date_trunc('minute', to_timestamp(ts_ms/1000)) as minute, count(*) as accepted
from telemetry.events_raw
where ts_ms > (extract(epoch from now()) - 3600) * 1000
group by 1
order by 1 desc;

-- Rejected per minute by reason
select date_trunc('minute', received_at) as minute, reason, count(*) as rejected
from telemetry.events_dlq
where received_at > now() - interval '1 hour'
group by 1,2
order by 1 desc;

-- Alias usage (requires telemetry.event_alias_usage)
select legacy_name, canonical_name, count(*) as uses, max(used_at) as last_used
from telemetry.event_alias_usage
group by 1,2
order by uses desc;

-- Materialized view staleness
select view, lag_sec from telemetry.v_mv_staleness;
```

## Runbook checklist

- Smoke HMAC 200; repetir `x-nonce` ⇒ 401.
- Contract tests verdes (`pnpm --filter @seatpilot/telemetry-ingest test`).
- RLS/ACL verificadas (cross-tenant ⇒ 0 filas, DLQ visible solo para auditores).
- Dashboards encendidos (accepted/rejected, razones DLQ, alias usage, staleness ≤10 s).
- SLO ingest: p95 < 100 ms y <0.1 % rechazos por firma/schema fuera de pruebas.

## Observability runbook (SeatPilot Fase 0)

**Alert: `SeatPilotCheckinP95Fast`** (p95 > 400 ms, 5 min)

1. Grafana → panel *Check-in Latency p95 (5m)* (zoom últimos 15 min).
2. Revisar panel *Ingest Rejections (5m delta)*; picos `schema` o `signature` suelen arrastrar el p95.
3. Si *Materialized View Lag* ↑, reprogramar `REFRESH` o bajar frecuencia para evitar contención.
4. Revisar logs de `telemetry-ingest` por timeouts a Supabase o a `metrics-api`. Cerrar cuando p95 < 350 ms sostenido 10 min.

**Alert: `SeatPilotDoorToSeatP95`** (p95 > 60 s, 10 min)

1. Panel *Door-to-Seat (p50/p95)* para identificar tendencia.
2. Validar señalética/colas en venue; activar *Safety Overlay* si hay embudos (< 48″).
3. Ajustar layout o flujos de kioscos/ops; monitorear recuperación.

### Operaciones rápidas

- Recargar reglas tras cambios: `curl -XPOST http://localhost:9090/-/reload`
- Generar muestras sintéticas desde ingest (en contenedor):  
  `docker exec seatpilot-telemetry-ingest-1 node scripts/push-metrics.js`
- Inspeccionar métricas desde `metrics-api`:  
  `docker exec seatpilot-metrics-api-1 node -e "fetch('http://localhost:8080/metrics').then(r=>r.text()).then(console.log)"`
- Refrescar MVs + lag manualmente:  
`docker exec seatpilot-kpi-refresher-1 node dist/kpi-refresher/src/jobs/refresh-mvs.js`
