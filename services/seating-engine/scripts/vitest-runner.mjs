#!/usr/bin/env node
import { spawnSync } from 'node:child_process';

const rawArgs = process.argv.slice(2);
const filtered = [];

for (let i = 0; i < rawArgs.length; i += 1) {
  const arg = rawArgs[i];

  if (arg === '--ci' || arg.startsWith('--ci=')) {
    continue;
  }

  if (arg === '--reporters') {
    const next = rawArgs[i + 1];
    if (next && !next.startsWith('-')) {
      filtered.push(`--reporter=${next}`);
      i += 1;
    }
    continue;
  }

  if (arg.startsWith('--reporters=')) {
    const [, value = 'default'] = arg.split('=');
    filtered.push(`--reporter=${value}`);
    continue;
  }

  filtered.push(arg);
}

const result = spawnSync('vitest', ['run', ...filtered], {
  stdio: 'inherit',
  env: process.env,
});

if (result.error) {
  console.error(result.error);
}

process.exit(result.status ?? 1);
