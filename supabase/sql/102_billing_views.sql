-- SeatPilot SaaS billing views

create or replace view v_tenant_entitlements as
select
  ts.tenant_id,
  ts.plan_id,
  coalesce(ov.key, pe.key)   as key,
  coalesce(ov.value, pe.value) as value
from tenant_subscriptions ts
join plan_entitlements pe
  on pe.plan_id = ts.plan_id
left join tenant_entitlements_overrides ov
  on ov.tenant_id = ts.tenant_id
 and ov.key = pe.key
where ts.status = 'active';

create or replace view v_tenant_usage as
select
  tenant_id,
  period_key,
  sum(case when metric = 'events'   then value else 0 end) as events,
  sum(case when metric = 'checkins' then value else 0 end) as checkins,
  sum(case when metric = 'screens'  then value else 0 end) as screens
from metering_counters
group by tenant_id, period_key;

create or replace view v_tenant_billing_report as
with incl as (
  select
    tenant_id,
    max(case when key = 'events_included'   then value::int end) as events_included,
    max(case when key = 'screens_included'  then value::int end) as screens_included,
    max(case when key = 'checkins_included' then value::int end) as checkins_included
  from v_tenant_entitlements
  group by tenant_id
)
select
  u.tenant_id,
  u.period_key,
  coalesce(i.events_included,   0) as events_included,
  coalesce(u.events,            0) as events_used,
  greatest(coalesce(u.events,   0) - coalesce(i.events_included,   0), 0) as events_overage,
  coalesce(i.screens_included,  0) as screens_included,
  coalesce(u.screens,           0) as screens_used,
  greatest(coalesce(u.screens,  0) - coalesce(i.screens_included,  0), 0) as screens_overage,
  coalesce(i.checkins_included, 0) as checkins_included,
  coalesce(u.checkins,          0) as checkins_used,
  greatest(coalesce(u.checkins, 0) - coalesce(i.checkins_included, 0), 0) as checkins_overage
from v_tenant_usage u
left join incl i
  on i.tenant_id = u.tenant_id;
