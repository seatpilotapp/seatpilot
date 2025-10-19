export function withTimeout(promise, ms = 3000) {
    let timeoutId;
    const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
            reject(new Error('supabase_timeout'));
        }, ms);
    });
    return Promise.race([Promise.resolve(promise), timeoutPromise]).finally(() => {
        if (timeoutId)
            clearTimeout(timeoutId);
    });
}
