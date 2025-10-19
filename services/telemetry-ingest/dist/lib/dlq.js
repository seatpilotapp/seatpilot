import { insertDLQ, getDlqForTests, resetStoreForTests } from './store.js';
export async function rejectToDLQ(reason, raw, headers) {
    await insertDLQ(reason, raw, headers);
}
export function getDlqBufferForTests() {
    return getDlqForTests();
}
export function resetDlqBufferForTests() {
    resetStoreForTests();
}
