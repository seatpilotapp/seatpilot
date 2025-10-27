# SeatPilot · Manual de Uso (Notas base)

Documenta hallazgos operativos, atajos y dependencias para futuras guías de uso interno/cliente. Mantén secciones modulares.

## 1. Puesta en marcha local
- **Kiosko demo**
  - `pnpm --filter seatpilot-metrics-api dev` → expone `/healthz` y métricas en `http://localhost:8080`.
  - `npx http-server apps -p 3006 --proxy http://localhost:8080 --cors` → sirve la UI, incluye modo `/mock-api`.
  - Nuevo “Estado de conexión” indica API detectada o modo simulado.
- **Observabilidad**
  - `docker compose -f docker-compose.metrics.yml up -d` lanza prometheus, alertmanager, metrics-api.
  - Seed rápido: `METRICS_API_BASE_URL=http://localhost:8080 node services/telemetry-ingest/scripts/push-metrics.js`.
  - Grafana local `http://localhost:3300/` (admin/admin) con dashboards precargados.

## 2. Flujo de demo kiosko
1. Detectar API ⇒ estado cambia a verde (`API detectada · host`). En modo mock se indica “API simulada (local)”.
2. Iniciar cámara o usar entrada manual `TICKET-###`.
3. Seeds avanzados generan métricas (`/observe/checkin`, `/observe/door-to-seat`, etc.).
4. Feed en vivo (botón “Limpiar feed”).

## 3. Troubleshooting rápido
- **No se detecta API**: confirmar procesos anteriores, usar `/mock-api`, revisar consola (`detectAttempts`).
- **Grafana “No data”**: ejecutar seed, validar targets en `http://localhost:9090/targets`.
- **Stack parado**: `docker compose -f docker-compose.metrics.yml ps` para verificar servicios.

## 4. Pendientes manual completo
- Añadir secciones: Operación Day-Of, Panel Ops Live, Seeds de staging, Reset RLS Supabase.
- Incluir capturas (kiosko, dashboards) y checklist QA.
