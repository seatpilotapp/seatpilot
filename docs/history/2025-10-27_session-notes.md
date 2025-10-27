# 2025-10-27 · Sesión de mejoras locales (SeatPilot)

## Resumen de acciones
- UI del kiosko renovada: layout responsive, indicadores de estado, paneles temáticos y opción de limpiar feed.
- Auto detección de API mejorada (healthz + mock local).
- Modo demo local habilitado: `/mock-api` desde el servidor estático.
- stack de observabilidad activado: Prometheus/Alertmanager via `docker-compose.metrics.yml`.
- Seed de métricas con `services/telemetry-ingest/scripts/push-metrics.js`.
- Grafana local (`http://localhost:3300/`) con datasource Prometheus y dashboards provisionados automáticamente.
- Recordatorio operativo: levantar siempre API métricas + servidor estático del kiosko.

## Endpoints / comandos clave
- API real: `pnpm --filter seatpilot-metrics-api dev` → `http://localhost:8080`
- Servidor kiosko: `npx http-server apps -p 3006 --proxy http://localhost:8080 --cors`
- API mock: `http://localhost:3006/mock-api`
- Seed manual: `METRICS_API_BASE_URL=http://localhost:8080 node services/telemetry-ingest/scripts/push-metrics.js`
- Grafana: `docker run … grafana/grafana-oss:10.4.1` (ver `ops/grafana/`)

## Próximos pendientes
- Documentar flujo de branding en nuevo log.
- Capturar lineamientos para manual de uso SeatPilot.
- Reconciliar renombrado de `docs/book/` (volver a importar referencias necesarias).
