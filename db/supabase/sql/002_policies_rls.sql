-- Row Level Security policies for SeatPilot tenants

-- Enable RLS on critical tables
ALTER TABLE telemetry.events_raw ENABLE ROW LEVEL SECURITY;
ALTER TABLE telemetry.mv_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE ops.checkin_sessions ENABLE ROW LEVEL SECURITY;

-- Tenant isolation based on tenant_id column
CREATE POLICY IF NOT EXISTS events_raw_tenant_isolation ON telemetry.events_raw
  USING (tenant_id = current_setting('app.current_tenant')::uuid);

CREATE POLICY IF NOT EXISTS mv_metadata_tenant_isolation ON telemetry.mv_metadata
  USING (tenant_id = current_setting('app.current_tenant')::uuid);

CREATE POLICY IF NOT EXISTS checkin_sessions_tenant_isolation ON ops.checkin_sessions
  USING (tenant_id = current_setting('app.current_tenant')::uuid);

-- Helper function to set context at session start (called by middleware)
CREATE OR REPLACE FUNCTION app.set_tenant(p_tenant uuid)
RETURNS void AS $$
BEGIN
  PERFORM set_config('app.current_tenant', p_tenant::text, true);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
