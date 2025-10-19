# SeatPilot · Fase 0 — Estado al 2025-10-18

Este documento resume los entregables acordados en la Fase 0 (ver `conver.txt:629-705`) y su situación actual dentro del repositorio y los servicios montados en el servidor local.

## Resumen ejecutivo

- **Telemetría y monitoreo**: Prometheus y Grafana en marcha; se añadió `scripts/run-prometheus.sh` para validar credenciales y generar la configuración de forma segura antes de arrancar. Falta inyectar el service role JWT válido (`SUPABASE_SERVICE_ROLE_JWT`) para que el target `supabase-seatpilot` quede `UP`.
- **Documentación viva**: Se abrió `docs/history/` para concentrar decisiones y estatus. Falta migrar los logs de decisiones y RACI originados en los workshops.
- **Backlog**: La mayoría de artefactos de discovery, design tokens y safety siguen pendientes de volcarse al repo (ver tabla más abajo).

## Checklist de entregables Fase 0

| Entregable | Estado | Evidencia / pendiente |
| --- | --- | --- |
| Workshop Frame–Facilitate–Finish (decisions log, RACI) | ⚠️ Pendiente | Crear archivos en `docs/history/` con las actas y roles. |
| Guía de voz & microcopy (ES/EN) | ⚠️ Pendiente | Añadir a `docs/product/voice-guidelines.md`. |
| Discovery Lean (screeners, guías, consentimientos) | ⚠️ Pendiente | Subir ZIP/resultados a `docs/history/discovery/`. |
| Diccionario de eventos v0.1.1 y glosario | ✅ Parcial | `docs/telemetry/dictionary_v1.1.0.md`. Revisar contra eventos reales. |
| Tableros iniciales (Ops Live / KPIs) | ✅ En curso | Grafana configurado; queda completar datasource Postgres y queries finales. |
| Supabase schema + RLS + vistas KPI | ✅ En repo | `supabase/sql/001_schema_core.sql`, `002_policies_rls.sql`, `003_views_kpi.sql`. Ejecutar en Supabase y validar. |
| Políticas de secretos (KMS), mTLS, idempotencia | ⚠️ Pendiente | Documentar en `docs/security/` y automatizar en código. |
| Design tokens v0.1 | ✅ Publicado | `docs/product/tokens.v0.1.json` y `tokens-readme.md`. |
| Wireframes/prototipos kiosco/TV/PWA | ⚠️ Pendiente | Exportar o enlazar en `docs/product/prototypes/`. |
| Spec reglas del editor (Seat Designer) | ⚠️ Pendiente | Crear `docs/product/seat-designer-rules.md`. |
| Checklist Safety (pasillos ≥48", aforos, eventos) | ⚠️ Pendiente | Crear `docs/runbooks/safety-checklist.md`. |
| Piloto controlado + retro | ⚠️ Pendiente | Registrar métricas y aprendizajes en `docs/history/pilots/`. |

### Observaciones

- **Service role inválido**: el token `sb_secret_vOuGbBq-MMARJnNj3V4Z3g_9IQDujdp` no es un JWT válido (no contiene cabecera/payload/firma). Sustituirlo por el `service_role` generado por Supabase.
- **Telemetría**: Prometheus local ya guarda datos en `./data` pero sólo scrapeará Supabase cuando se corrija la credencial.
- **Grafana**: necesita la datasource Postgres apuntando a Supabase (preferiblemente via pooler IPv4) y las SQL provistas.

## Próximos pasos sugeridos

1. Ir a Supabase → Project Settings → API y copiar el `service_role` real (formato JWT). Reemplazarlo en `.env.prometheus` y relanzar `./scripts/run-prometheus.sh` hasta que el target `supabase-seatpilot` figure `UP`.
2. Ejecutar los scripts SQL en Supabase (`001_schema_core.sql`, `002_policies_rls.sql`, `003_views_kpi.sql`) y documentar pruebas RLS.
3. Migrar decisiones, RACI y artefactos de discovery existentes al repositorio bajo `docs/history/`.
4. Publicar wireframes/prototipos y la checklist de Safety.
5. Registrar resultados del primer piloto controlado.

> Referencia: todos los lineamientos provienen de `conver.txt` y los documentos de análisis (`SeatPilot_Index_Master`, `1_docanalisis__seatpilot.md`, etc.). Volcar la información existente a los archivos señalados permitirá cerrar formalmente la Fase 0.
