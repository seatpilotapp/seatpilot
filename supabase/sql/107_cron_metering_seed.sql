-- Programar (o reprogramar) la semilla diaria de metering (09:00 UTC por defecto)
do $$
declare
  jid int;
begin
  select jobid into jid from cron.job where jobname = 'ops_metering_seed_daily';
  if jid is not null then
    perform cron.unschedule(jid);
  end if;

  perform cron.schedule(
    'ops_metering_seed_daily',
    '0 9 * * *',
    $cmd$select app.seed_metering_demo(2, 25)$cmd$
  );
end
$$ language plpgsql;
