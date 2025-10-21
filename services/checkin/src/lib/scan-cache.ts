const TEN_MINUTES_MS = 10 * 60 * 1000;

const SCAN_CACHE_ENABLED = process.env.CHECKIN_SCAN_CACHE_ENABLED !== 'false';
const SCAN_CACHE_TTL_MS = (() => {
  const raw = process.env.CHECKIN_SCAN_CACHE_TTL_MS;
  const parsed = raw ? Number.parseInt(raw, 10) : Number.NaN;
  if (Number.isFinite(parsed) && parsed > 0) {
    return parsed;
  }
  return TEN_MINUTES_MS;
})();

interface CacheEntry {
  readonly value: number;
  readonly expiresAt: number;
}

const cache = new Map<string, CacheEntry>();
let lastPurge = 0;

function makeKey(sessionId: string, tenantId?: string) {
  return tenantId ? `${tenantId}::${sessionId}` : sessionId;
}

function purgeExpired(now: number) {
  if (now - lastPurge < SCAN_CACHE_TTL_MS) return;
  for (const [key, entry] of cache) {
    if (entry.expiresAt <= now) {
      cache.delete(key);
    }
  }
  lastPurge = now;
}

export function rememberScanTimestamp(sessionId: string, timestampMs: number, tenantId?: string) {
  if (!SCAN_CACHE_ENABLED) return;
  if (!sessionId || !Number.isFinite(timestampMs)) return;
  const now = Date.now();
  purgeExpired(now);
  cache.set(makeKey(sessionId, tenantId), { value: timestampMs, expiresAt: now + SCAN_CACHE_TTL_MS });
}

export function getCachedScanTimestamp(sessionId: string, tenantId?: string): number | undefined {
  if (!SCAN_CACHE_ENABLED) return undefined;
  if (!sessionId) return undefined;
  const now = Date.now();
  purgeExpired(now);
  const entry = cache.get(makeKey(sessionId, tenantId));
  if (!entry) return undefined;
  if (entry.expiresAt <= now) {
    cache.delete(makeKey(sessionId, tenantId));
    return undefined;
  }
  return entry.value;
}

export function clearScanCache() {
  cache.clear();
  lastPurge = Date.now();
}
