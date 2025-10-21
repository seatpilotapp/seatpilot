-- Seed data for pricing plans / feature flags

INSERT INTO billing.plans (plan_id, name, refresh_interval_seconds)
VALUES
  ('plan-starter', 'Starter', 120),
  ('plan-pro', 'Pro', 60)
ON CONFLICT (plan_id) DO UPDATE
SET name = EXCLUDED.name,
    refresh_interval_seconds = EXCLUDED.refresh_interval_seconds;
