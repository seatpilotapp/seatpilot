const TTL_MS = 300_000; // 5 min
const store = new Map<string, number>();

export async function isUniqueNonce(nonce: string) {
  const now = Date.now();
  for (const [k, t] of store) {
    if (now - t > TTL_MS) store.delete(k);
  }
  if (store.has(nonce)) return false;
  store.set(nonce, now);
  return true;
}

export function resetNonceStoreForTests() {
  store.clear();
}
