# ADR-0001: Estrategia de firmas HMAC y anti-replay para la ingesta
- **Fecha:** 2025-10-20
- **Estado:** Proposed
- **Contexto:**  
  - Todos los eventos ingresan vía `services/telemetry-ingest` (`POST /v1/events`).  
  - Necesitamos garantizar integridad, autenticidad y protección contra reenvíos.  
  - Ya existe soporte base (headers `x-key`, `x-sig`, `x-ts`, `x-nonce`), pero no está formalizado en un ADR.
- **Decisión:**  
  1. Usar firmas **HMAC-SHA256** con secreto por tenant (`METRICS_INGEST_KEY`).  
  2. Incluir cabeceras obligatorias:  
     - `x-key`: identificador del secreto activo.  
     - `x-ts`: timestamp UNIX ms (skew máximo ±300 s).  
     - `x-nonce`: UUID para replay detection (TTL 5 min).  
     - `x-sig`: HMAC de método + URL + cuerpo + `x-ts` + `x-nonce`.  
  3. rotación dual `METRICS_INGEST_KEY` / `NEXT_METRICS_INGEST_KEY` (ventana 7 días).  
  4. Rechazar requests con skew fuera de rango o nonce repetido (persistencia en memoria + `telemetry.events_dlq`).  
- **Consecuencias:**  
  - Necesitamos job de limpieza de nonces (memoria) y log de rechazos (`seatpilot_ingest_rejected_total{reason="replay"}`).  
  - El proceso de rotación debe actualizar `.env`, reiniciar servicios y limpiar claves expiradas.  
  - Documentar en runbook Fase 0 + runbook Day-Of.  
- **Relaciones:**  
  - `docs/handoff/SeatPilot_Master_v1.0.md` (Sección 7).  
  - `services/telemetry-ingest/src/routes/events.ts` (implem).  
  - `docs/security/headers.md` (pendiente actualizar).  
