-- Seed de metering para demos/pilotos
-- Genera eventos básicos (event_created, checkin, screen_active) para cada tenant activo/trial.

create extension if not exists pgcrypto;
create schema if not exists app;

create or replace function app.seed_metering_demo(
  p_events integer default 1,
  p_checkins integer default 25
) returns void
language plpgsql
as $$
declare
  rec record;
  i integer;
begin
  for rec in
    select tenant_id
    from tenant_subscriptions
    where status in ('active','trial')
  loop
    -- evento creado
    perform metering_ingest(rec.tenant_id, 'event_created', 1, gen_random_uuid()::text);

    -- check-ins (p_events veces, cada uno suma p_checkins)
    for i in 1..p_events loop
      perform metering_ingest(rec.tenant_id, 'checkin', p_checkins, gen_random_uuid()::text);
    end loop;

    -- pantalla activa
    perform metering_ingest(rec.tenant_id, 'screen_active', 1, gen_random_uuid()::text);
  end loop;
end;
$$;
