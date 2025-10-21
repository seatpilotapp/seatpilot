-- Sample plans and entitlements for SeatPilot SaaS

insert into plans(id, display_name, billing_period, currency, price_cents, description) values
  ('starter',     'Starter (per event)',     'event',   'USD', 14900, '1 evento, 2 pantallas, 1000 check-ins'),
  ('pro',         'Pro (venue mensual)',     'monthly', 'USD', 24900, '4 eventos/mes, 4 pantallas, Assign v1'),
  ('enterprise',  'Enterprise',              'monthly', 'USD', 79900, 'Eventos ilimitados, SLA/SSO')
on conflict (id) do update
  set display_name  = excluded.display_name,
      billing_period = excluded.billing_period,
      currency       = excluded.currency,
      price_cents    = excluded.price_cents,
      description    = excluded.description;

insert into plan_entitlements(plan_id, key, value) values
  ('starter',    'events_included',   '1'),
  ('starter',    'screens_included',  '2'),
  ('starter',    'checkins_included', '1000'),
  ('starter',    'assign_v1',         'false'),
  ('pro',        'events_included',   '4'),
  ('pro',        'screens_included',  '4'),
  ('pro',        'checkins_included', '5000'),
  ('pro',        'assign_v1',         'true'),
  ('enterprise', 'events_included',   '999'),
  ('enterprise', 'screens_included',  '12'),
  ('enterprise', 'checkins_included', '999999'),
  ('enterprise', 'assign_v1',         'true'),
  ('enterprise', 'ops_live_historic', 'true'),
  ('enterprise', 'sla',               'premium')
on conflict (plan_id, key) do update
  set value = excluded.value;
