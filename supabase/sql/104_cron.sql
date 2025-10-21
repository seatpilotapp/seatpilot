-- billing snapshots + pg_cron scheduling

create table if not exists billing_snapshots (
  tenant_id  uuid not null,
  period_key text not null,
  created_at timestamptz not null default now(),
  report jsonb not null
);

do $$
declare
  jid int;
begin
  select jobid into jid from cron.job where jobname = 'billing_close_month';
  if jid is not null then
    perform cron.unschedule(jid);
  end if;

  perform cron.schedule(
    'billing_close_month',
    '5 0 1 * *',
    $cron$
      insert into billing_snapshots(tenant_id, period_key, report)
      select tenant_id, period_key, to_jsonb(vrb)
      from v_tenant_billing_report vrb
      where period_key = to_char(date_trunc('month', now() - interval '1 month'), 'YYYY-MM');
    $cron$
  );
end
$$ language plpgsql;
