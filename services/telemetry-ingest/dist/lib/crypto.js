import { createHmac, timingSafeEqual as tse } from 'node:crypto';
export function computeHmac(key, method, url, body, ts, nonce) {
    const h = createHmac('sha256', key);
    h.update(method.toUpperCase());
    h.update('|');
    h.update(url);
    h.update('|');
    h.update(String(ts));
    h.update('|');
    h.update(nonce);
    h.update('|');
    h.update(body);
    return h.digest('hex');
}
export function timingSafeEqualHex(a, b) {
    const A = Buffer.from(a, 'hex');
    const B = Buffer.from(b, 'hex');
    if (A.length !== B.length)
        return false;
    return tse(A, B);
}
