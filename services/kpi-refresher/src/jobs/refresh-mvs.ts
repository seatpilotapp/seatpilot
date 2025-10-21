import { setDefaultResultOrder } from 'node:dns';
import { recordMvLag } from '../../../telemetry-ingest/src/lib/metrics-sink.js';
import { db } from '../lib/db.js';

setDefaultResultOrder('ipv4first');

interface RefreshTarget {
  label: string;
  regclass: string;
}

const VIEWS: RefreshTarget[] = [
  { label: 'mv_kpi_checkin', regclass: 'telemetry.mv_kpi_checkin' },
  { label: 'mv_kpi_door2seat', regclass: 'telemetry.mv_kpi_door2seat' }
];

const DEFAULT_INTERVAL_SEC = 60;
const parsedInterval = Number(process.env.REFRESH_EVERY_SEC ?? DEFAULT_INTERVAL_SEC);
const REFRESH_INTERVAL_SEC = Number.isFinite(parsedInterval) && parsedInterval > 0 ? parsedInterval : DEFAULT_INTERVAL_SEC;

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

async function refreshAndReport(target: RefreshTarget) {
  const startedAt = Date.now();
  await db.one('select telemetry.refresh_mv($1::regclass, true) as refreshed', [target.regclass]);
  const finishedAt = Date.now();

  const row = await db.one(
    'select extract(epoch from (now() - refreshed_at)) as lag from telemetry.mv_metadata where view_name=$1',
    [target.regclass]
  );

  const lagSeconds = Number(row.lag);
  await recordMvLag(target.label, lagSeconds);

  const refreshDuration = (finishedAt - startedAt) / 1000;
  console.log(
    `[refresh-mvs] view=${target.label} regclass=${target.regclass} lag=${lagSeconds.toFixed(2)}s duration=${refreshDuration.toFixed(2)}s`
  );
}

export async function runRefreshOnce() {
  for (const target of VIEWS) {
    await refreshAndReport(target);
  }
}

export async function runRefresh() {
  await runRefreshOnce();
}

async function loop() {
  // Continuous refresh loop to keep MV lag metrics fresh for dashboards/alerts.
  for (;;) {
    try {
      await runRefreshOnce();
    } catch (error) {
      console.error('[refresh-mvs] failed', error);
    }
    await sleep(REFRESH_INTERVAL_SEC * 1000);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  void loop();
}
