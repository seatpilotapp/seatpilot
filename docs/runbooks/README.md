# Runbook — Observabilidad Fase 1

## Dashboard Overview ejecutivo

- **Check-in p95 (5 min)** `avg_over_time(seatpilot_checkin_latency_ms{quantile="0.95"}[5m])`
  - Verde `<300 ms`, Amarillo `300–350 ms`, Rojo `>350 ms`
- **Door→Seat p95 (15 min)** `histogram_quantile(0.95, sum by (le) (rate(seatpilot_door_to_seat_seconds_bucket[15m])))`
  - Verde `<45 s`, Amarillo `45–60 s`, Rojo `>60 s`
- **Rechazos 5 min** `seatpilot:ingest_reject_rate_5m / ignoring(reason) seatpilot:ingest_rate_5m`
  - Verde `<1 %`, Rojo `≥1 %`
- **MV Lag promedio 5 min** `seatpilot:mv_lag_avg_5m`
  - Verde `<10 s`, Amarillo `10–20 s`, Rojo `>20 s`
- **Time Breakdown UI (p95 5m)** `histogram_quantile(0.95, sum by (le,stage) (rate(seatpilot_checkin_stage_seconds_bucket{tenant=~"$Tenant",channel=~"$Channel"}[5m]))) * 1000`
  - Muestra `parse | lookup | persist | total`, con thresholds `<120 ms` (verde), `120–180 ms` (amarillo), `>180 ms` (rojo). Úsalo para localizar el tramo caliente.

> Consejo: deja Tenant = All y Channel = All, rango mínimo “Last 15 minutes” para que se estabilicen las ventanas.

## Panel “MV Lag” sin puntos

**Checks**

1. Metadata actualizada:
   ```sql
   select * from telemetry.mv_metadata order by refreshed_at desc;
   ```
   Cada MV debe mostrar `refreshed_at` reciente.
2. Refresher activo:
   ```bash
   docker ps | grep kpi-refresher
   docker logs seatpilot-kpi-refresher-1 --tail=100
   ```
3. Gauge expuesto por metrics API:
   ```bash
   curl -s http://localhost:8080/metrics | grep seatpilot_mv_lag_seconds
   ```
4. Serie presente en Prometheus:
   ```bash
   curl -s "http://localhost:9090/api/v1/query?query=seatpilot_mv_lag_seconds"
   ```

**Recuperación**

- Reiniciar refresher: `docker compose up -d --build kpi-refresher`
- Refrescar manualmente:
  ```sql
  select telemetry.refresh_mv('telemetry.mv_kpi_checkin'::regclass,false);
  select telemetry.refresh_mv('telemetry.mv_kpi_door2seat'::regclass,false);
  ```
- Confirmar resolución de la alerta `SeatPilotMvLagHigh`.

## Alerta “Check-in p95 > 350 ms”

**Checks**

1. Panel de Grafana “Check-in p95” (5m vs 1h) para ver canales impactados.
2. Query directa:
   ```bash
   curl -s "http://localhost:9090/api/v1/query?query=seatpilot:checkin_p95_5m" | jq
   ```
3. Validar volumen por tenant/canal:
   ```bash
   curl -s "http://localhost:9090/api/v1/query?query=increase(seatpilot_ingest_accepted_total[5m])" | jq
   ```
4. Revisar tiempos en la app (logs de check-in) y latencia de base de datos.

**Recuperación**

- Escalar kioscos lentos (CPU/red) o degradar flows alternos.
- Revisar si el `ts_scan_start_ms` enviado es correcto; corregir reloj/cliente.
- Validar que Supabase no tenga throttling (monitor de conexiones).

## Alerta “Check-in stage p95 > 120 ms”

**Checks**

1. Panel **Time Breakdown UI (p95 5m)** para detectar qué stage (`parse`, `lookup`, `persist`, `total`) está por encima de 120 ms.
2. Recording rule para ventana larga:
   ```bash
   curl -s "http://localhost:9090/api/v1/query?query=seatpilot:checkin_stage_p95_24h" | jq
   ```
   Filtra por `stage`, `tenant` y `channel` según la alerta.
3. Ventana corta (5m) cuando necesites confirmar el spike:
   ```bash
   curl -s "http://localhost:9090/api/v1/query?query=histogram_quantile(0.95, sum by (le,stage,tenant,channel) (rate(seatpilot_checkin_stage_seconds_bucket[5m])))" | jq
   ```
4. Slack `#seatpilot-alerts`: cada notificación incluye `stage`, `tenant`, `channel` y la descripción del evento.

**Causas típicas**

| Stage  | Síntoma frecuente | Checks sugeridos | Mitigación |
| ------ | ----------------- | ---------------- | ---------- |
| parse  | AJV lento, payloads grandes | Revisar logs de check-in, tamaño de request | Recortar payload, validar clientes, ajustar `express.json({ limit: '10kb' })` |
| lookup | Cache miss + fallback PG | `CHECKIN_SCAN_CACHE_ENABLED`, TTL, métricas de Supabase | Ajustar cache (`CHECKIN_SCAN_CACHE_TTL_MS`), revisar índices parciales, monitorear PG |
| persist| Upsert con locks o pool saturado | `pg_stat_activity`, métricas de pool | Revisar locks, aumentar `PG_POOL_MAX`, analizar índices |
| total  | Combinación de stages | Panel deja ver composición | Resolver stage dominante |

**Recuperación**

- Valida que el cache esté activo (`CHECKIN_SCAN_CACHE_ENABLED`), TTL adecuado y que el fallback a PG sea excepcional.
- Para `lookup`, revisa latencias de Supabase y asegúrate de que los índices parciales sigan vigentes.
- Si `persist` domina, inspecciona locks en `ops.checkin_sessions`, pool size y prepared statements.
- Usa silences en Alertmanager (`alertname=SeatPilotCheckinStageP95High`) durante mantenimientos controlados.

**Prueba controlada**

- Ejecuta `./scripts/trigger-stage-latency.sh 250` para automatizar la prueba (seteao delay, reinicio, smoke y restauración).
- Alternativa manual: exporta `CHECKIN_SLOW_LOOKUP_MS=250`, reinicia `@seatpilot/checkin`, y corre `pnpm smoke:f1.2.sh`. El panel mostrará `lookup` > 120 ms y la alerta pasará a `PENDING`/`FIRING` (puedes reducir temporalmente `for` en Prometheus para la prueba).
- Vuelve a `0` (script o manual) y genera tráfico normal para confirmar que la alerta se resuelve y el panel vuelve a verde.

## Alerta “Door→Seat p95 > 45 s”

**Checks**

1. Query de Prometheus:
   ```bash
   curl -s "http://localhost:9090/api/v1/query?query=seatpilot:door2seat_p95_15m" | jq
   ```
2. Logs de `wayfinding.arrive_table` para confirmar timestamps.
3. Confirmar que `ops.checkin_sessions` guarda `ts_checkin_success_ms` actualizado.

**Recuperación**

- Validar ubicación de kioscos/mapas; aumentar staff en accesos.
- Chequear que los endpoints de wayfinding respondan < 200 ms.

## Alerta “Ingest rejection rate > 1%”

**Checks**

1. Query de rechazo:
   ```bash
   curl -s "http://localhost:9090/api/v1/query?query=seatpilot:ingest_reject_rate_5m" | jq
   ```
2. Detalle por motivo:
   ```bash
   curl -s "http://localhost:9090/api/v1/query?query=increase(seatpilot_ingest_rejected_total[5m])" | jq
   ```
3. Logs de telemetry-ingest (`docker logs telemetry-ingest --tail=200`).

**Recuperación**

- Revisar firma/HMAC y versión de payload en clientes.
- Confirmar que los esquemas JSON (AJV) siguen alineados.
- Si es replay: verificar clocks y expiración de nonces.

## `/observe/*` responde 401

- Verificar que servicios emisores tengan `METRICS_API_KEY` configurado.
- Confirmar valor en container:
  ```bash
  docker compose exec telemetry-ingest sh -c 'echo $METRICS_API_KEY'
  ```
- Revisar `METRICS_INGEST_KEY` en metrics-api (`docker compose exec metrics-api sh -c 'echo $METRICS_INGEST_KEY'`).

## Rotación de API key (/observe/*)

1. Define ambos secretos en `.env`:
   ```bash
   METRICS_INGEST_KEY=<clave-activa>
   NEXT_METRICS_INGEST_KEY=<clave-nueva>
   ```
2. Reinicia el stack (`docker compose up -d metrics-api checkin wayfinding`).
3. Actualiza los servicios emisores para usar la nueva key (`METRICS_API_KEY`).
4. Tras confirmar que todo publica con la nueva key, elimina `NEXT_METRICS_INGEST_KEY` y reinicia.

## Smoke diario F1.1

```bash
./scripts/smoke-f1.1.sh
```

El script ejecuta check-in y arrive-table, verifica Prometheus (`seatpilot_checkin_latency_ms_count`, `seatpilot_door_to_seat_seconds_sum`) y revisa `ops.checkin_sessions`. Úsalo en CI o cron para validar regresiones.

### Smoke extendido (rechazos + lag)

```bash
./scripts/smoke-f1.2.sh
```

Genera check-in/door→seat, fuerza un rechazo (schema) y ejecuta el refresher para poblar `seatpilot:mv_lag_avg_*`.

## QA de aceptación (smoke de observabilidad)

1. `docker compose -f docker-compose.metrics.yml up -d --build`
2. Generar check-ins reales/simulados ⇒ panel “Check-in p95” se mueve.
3. Emitir `wayfinding.arrive_table` ⇒ “Door→Seat p50/p95” reacciona.
4. Forzar rechazo (payload inválido) ⇒ incremento momentáneo y alerta opcional.
5. Detener `kpi-refresher` 10 min ⇒ `SeatPilotMvLagHigh` dispara y llega a Slack.
6. Restaurar refresher ⇒ alerta se resuelve (`send_resolved=true`).
7. Invocar `/observe/mv-lag` sin header ⇒ `401 unauthorized`.
