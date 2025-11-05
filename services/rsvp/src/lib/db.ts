import pgPromise, {
  type IDatabase,
  type IInitOptions,
  type IMain,
  type ITask
} from 'pg-promise';
import { missingTenant } from './errors.js';

const initOptions: IInitOptions = {
  capSQL: true,
  error(error: unknown) {
    console.error('[rsvp] pg-promise error', error);
  }
};

const pgp: IMain = pgPromise(initOptions);

const poolMaxEnv = process.env.PG_POOL_MAX;
const poolIdleEnv = process.env.PG_IDLE_TIMEOUT_MS;
const poolMax = poolMaxEnv ? Number.parseInt(poolMaxEnv, 10) : Number.NaN;
const idleTimeout = poolIdleEnv ? Number.parseInt(poolIdleEnv, 10) : Number.NaN;

const defaults = pgp.pg.defaults as unknown as { max?: number; idleTimeoutMillis?: number };
defaults.max = Number.isFinite(poolMax) && poolMax > 0 ? poolMax : 10;
defaults.idleTimeoutMillis = Number.isFinite(idleTimeout) && idleTimeout > 0 ? idleTimeout : 30_000;

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required for @seatpilot/rsvp-service');
}

const connection = {
  connectionString: DATABASE_URL,
  application_name: process.env.PG_APP_NAME || '@seatpilot/rsvp-service'
};

export const db: IDatabase<unknown> = pgp(connection);
export const pgpInstance = pgp;

export async function withTenant<T>(tenantId: string | undefined, fn: (conn: ITask<unknown>) => Promise<T>) {
  if (!tenantId) {
    throw missingTenant();
  }

  return db.tx(async (task) => {
    await task.query("select set_config('app.tenant_id', $1, true)", [tenantId]);
    return fn(task);
  });
}
