import { recordMvLag } from '../../../telemetry-ingest/src/lib/metrics-sink.js';
import { db } from '../lib/db.js';

async function refreshAndReport(view: string) {
  const startedAt = Date.now();
  await db.none('select telemetry.refresh_mv($1::regclass, true)', [view]);
  const finishedAt = Date.now();

  const row = await db.one(
    'select extract(epoch from (now() - refreshed_at)) as lag from telemetry.mv_metadata where view_name=$1',
    [view]
  );

  const lagSeconds = Number(row.lag);
  await recordMvLag(view, lagSeconds);

  const refreshDuration = (finishedAt - startedAt) / 1000;
  console.log(`[refresh-mvs] view=${view} lag=${lagSeconds.toFixed(2)}s duration=${refreshDuration.toFixed(2)}s`);
}

export async function runRefresh() {
  await refreshAndReport('mv_kpi_checkin');
  await refreshAndReport('mv_kpi_door2seat');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  runRefresh()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error('[refresh-mvs] failed', error);
      process.exit(1);
    });
}
