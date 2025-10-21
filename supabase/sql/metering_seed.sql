-- Semilla de consumo para mantener /admin/billing con datos vivos.
do $$
declare
  r record;
  v_checkins int;
begin
  for r in
    select id
    from tenants
    where status = 'active'
    order by created_at desc
    limit 2
  loop
    perform metering_ingest(r.id, 'event_created', 1, gen_random_uuid()::text);

    v_checkins := 10 + floor(random() * 21)::int; -- 10..30
    perform metering_ingest(r.id, 'checkin', v_checkins, gen_random_uuid()::text);

    perform metering_ingest(r.id, 'screen_active', 1, gen_random_uuid()::text);
  end loop;
end
$$ language plpgsql;

select *
from v_tenant_billing_report
where period_key = to_char(date_trunc('month', now()), 'YYYY-MM')
order by tenant_id, period_key desc;
