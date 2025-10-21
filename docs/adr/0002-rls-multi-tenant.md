# ADR-0002: Políticas RLS multi-tenant para telemetry y servicios operativos
- **Fecha:** 2025-10-20
- **Estado:** Proposed
- **Contexto:**  
  - SeatPilot opera múltiples tenants (venues/planners) en la misma instancia Supabase/Postgres.  
  - Tablas críticas: `telemetry.events_raw`, `telemetry.events_dlq`, `ops.checkin_sessions`.  
  - Ya existe función `telemetry.claim_tenant_id()` y políticas base, pero sin ADR.
- **Decisión:**  
  1. Mantener RLS activo por defecto en todas las tablas multi-tenant (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY`).  
  2. Usar `set_config('app.tenant_id', <uuid>, true)` en servicios antes de consultas; en Supabase, `request.jwt.claim.tenant_id`.  
  3. Políticas estándar:  
     - SELECT: `tenant_id = telemetry.claim_tenant_id()` (o `IS NULL` para registros neutros).  
     - INSERT/UPDATE: `with check (...)` restringiendo operaciones al tenant actual.  
     - `ops.checkin_sessions`: permitir `SELECT` a operadores con rol `owner/admin/operator`.  
  4. Crear tests negativos (CI) que verifiquen que un tenant no puede leer/escribir datos de otro.  
- **Consecuencias:**  
  - Necesitamos helpers en servicios Node (middleware) para asignar `app.tenant_id`.  
  - En Supabase, expose claim `tenant_id` en JWT y documentar en `docs/api`.  
  - Requiere monitoreo de errores `RLS` y fallback seguro (sin silencios).  
- **Relaciones:**  
  - `supabase/sql/002_policies_rls.sql` (políticas actuales).  
  - `services/checkin/src/lib/db.ts` y `services/wayfinding/src/lib/db.ts` (debemos incluir `app.tenant_id`).  
  - `docs/handoff/SeatPilot_Master_v1.0.md` (tabla de RLS en sección 7).  
