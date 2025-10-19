import { insertDLQ, getDlqForTests, resetStoreForTests } from './store.js';
export async function rejectToDLQ(reason, raw, headers) {
    try {
        await insertDLQ(reason, raw, headers);
    }
    catch (error) {
        console.error('DLQ insert failed:', error?.message ?? error);
    }
}
export function getDlqBufferForTests() {
    return getDlqForTests();
}
export function resetDlqBufferForTests() {
    resetStoreForTests();
}
