import { insertDLQ, getDlqForTests, resetStoreForTests, HeadersRecord } from './store.js';

export async function rejectToDLQ(reason: string, raw: unknown, headers: HeadersRecord) {
  try {
    await insertDLQ(reason, raw, headers);
  } catch (error) {
    console.error('DLQ insert failed:', (error as Error)?.message ?? error);
  }
}

export function getDlqBufferForTests() {
  return getDlqForTests();
}

export function resetDlqBufferForTests() {
  resetStoreForTests();
}
