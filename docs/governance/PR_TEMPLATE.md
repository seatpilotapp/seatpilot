## Qué cambia
- [ ] Código / Servicios
- [ ] Infra / Observabilidad
- [ ] Documentación / Runbooks / ADR
- [ ] Otros (especifica):

## Evidencia obligatoria
- [ ] Captura(s) de Grafana con rangos y panel relevante
- [ ] Resultado de `./scripts/smoke-f1.2.sh` (o smoke equivalente)
- [ ] Enlace a dashboard o alerta impactada
- [ ] Logs o pruebas unitarias/e2e (si aplica)

## Riesgos y rollback
- Describe riesgos conocidos
- Plan de rollback
- Comandos para verificación post-rollback

## Checklist SeatPilot
- [ ] Eventos nuevos usan nombres **canónicos** (o alias + mapping documentado)
- [ ] Env vars actualizadas en `docs/handoff/SeatPilot_Master_v1.0.md`
- [ ] ¿Tocaste tokens/iconos? Ejecuta `npm run brand:icons:lint` y adjunta mosaico de previews
- [ ] Cumple A11y/Brand (tokens, copy ≤ 7 palabras, foco visible)
- [ ] Actualiza métricas/alertas si afecta SLO p95 o door→seat
- [ ] ¿Requiere ADR? **Sí/No** (si Sí, enlazar)

## Notas adicionales
- ...
