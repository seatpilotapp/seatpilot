import { computeHmac } from '../src/lib/crypto.js';

const [tsArg, nonceArg, bodyArg, keyArg] = process.argv.slice(2);

if (!tsArg || !nonceArg || !bodyArg || !keyArg) {
  console.error('Usage: node scripts/sign.ts <ts_ms> <nonce> <body> <key>');
  process.exit(1);
}

const signature = computeHmac(keyArg, 'POST', '/v1/events', bodyArg, Number(tsArg), nonceArg);
process.stdout.write(signature);
