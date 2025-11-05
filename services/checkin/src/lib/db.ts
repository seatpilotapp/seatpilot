import pgPromise, { type IInitOptions, type IMain } from 'pg-promise';

const initOptions: IInitOptions = {
  capSQL: true
};

const pgp: IMain = pgPromise(initOptions);

const poolMaxEnv = process.env.PG_POOL_MAX;
const poolIdleEnv = process.env.PG_IDLE_TIMEOUT_MS;
const poolMax = poolMaxEnv ? Number.parseInt(poolMaxEnv, 10) : Number.NaN;
const idleTimeout = poolIdleEnv ? Number.parseInt(poolIdleEnv, 10) : Number.NaN;

const poolDefaults = pgp.pg.defaults as unknown as { max?: number; idleTimeoutMillis?: number };
poolDefaults.max = Number.isFinite(poolMax) && poolMax > 0 ? poolMax : 15;
poolDefaults.idleTimeoutMillis = Number.isFinite(idleTimeout) && idleTimeout > 0 ? idleTimeout : 30_000;

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required for @seatpilot/checkin');
}

const connection = {
  connectionString: DATABASE_URL,
  application_name: process.env.PG_APP_NAME || '@seatpilot/checkin'
};

export const db = pgp(connection);

export const pgpInstance = pgp;

