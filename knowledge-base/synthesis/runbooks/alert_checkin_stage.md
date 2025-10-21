# KB-SYNTHESIS: Runbook — Alerta Check-in Stage p95 Alto
1. Confirmar servicios y Prometheus UP (`docker compose ps`, `curl http://localhost:9090/-/ready`).
2. Revisar panel Breakdown por etapa (`dashboards/overview-f1.3.json` → sección Time Breakdown).
3. Si `lookup` elevado: activar warmup de caché, inspeccionar `seatpilot_checkin_stage_seconds_bucket{stage="lookup"}` y revisar pgBouncer/indices.
4. Reproducir con `CHECKIN_SLOW_LOOKUP_MS=250` + `./scripts/smoke-f1.2.sh`; luego restaurar a `0` y confirmar alerta RESOLVED.
5. Documentar causa y acción en KB (`knowledge-base/synthesis/*`) y runbook (`docs/runbooks/README.md`).
