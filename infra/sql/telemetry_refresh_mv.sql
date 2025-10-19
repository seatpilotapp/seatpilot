create schema if not exists telemetry;

create table if not exists telemetry.mv_metadata (
  view_name text primary key,
  refreshed_at timestamptz not null default now()
);

create or replace function telemetry.refresh_mv(_view regclass, _concurrently boolean default true)
returns void
language plpgsql
as
$$
declare
  v_sql text;
begin
  if _concurrently then
    v_sql := format('REFRESH MATERIALIZED VIEW CONCURRENTLY %s;', _view);
  else
    v_sql := format('REFRESH MATERIALIZED VIEW %s;', _view);
  end if;
  execute v_sql;

  insert into telemetry.mv_metadata (view_name, refreshed_at)
  values (_view::text, now())
  on conflict (view_name)
    do update set refreshed_at = excluded.refreshed_at;
end;
$$;
