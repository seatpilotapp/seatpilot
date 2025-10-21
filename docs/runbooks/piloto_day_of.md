# Piloto – Day-of Runbook (v1.0)

## Go/No-Go (T–2h)
- [ ] Targets UP (Prometheus, metrics-api, telemetry-ingest, checkin, wayfinding).
- [ ] `./scripts/smoke-f1.2.sh` OK y dashboards importados (overview + trends 7d).
- [ ] Slack Alertmanager operativo (test /FIRING → /RESOLVED).
- [ ] Doorlist 1-clic exportada (CSV/PDF) y respaldos en USB.
- [ ] Kioscos/TV: cache warm, batería/cables, QR prueba.
- [ ] Variables `.env` de venue seteadas (tenant/channel) y reloj NTP ok.
- [ ] HMAC keys vigentes y rotación planificada.

## Operación (T0–T+4h)
- [ ] Check-in p95 ≤ 300 ms (alerta por etapa en lookup).  
- [ ] Door→Seat p95 ≤ 60 s (monitorear flujo por puertas).  
- [ ] Rechazos < 1 % (investigar spikes).

## Cierre (T+4h)
- [ ] Capturas Grafana + export métricas (24 h).  
- [ ] Encuesta staff (5 min) + incidentes.  
- [ ] Post-mortem en 48 h (plantilla) y tickets de seguimiento.
