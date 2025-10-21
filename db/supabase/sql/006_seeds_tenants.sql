-- Seed data for demo tenants (for local smoke/tests)

INSERT INTO auth.tenants (tenant_id, slug, plan_id)
VALUES
  ('aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee', 'demo-default', 'plan-pro')
ON CONFLICT (tenant_id) DO NOTHING;
