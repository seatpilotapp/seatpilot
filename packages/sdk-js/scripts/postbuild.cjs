#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const esmDir = path.join(root, 'dist');
const cjsDir = path.join(root, 'dist-cjs');
const cjsEntrySrc = path.join(cjsDir, 'index.js');
const cjsEntryDest = path.join(esmDir, 'index.cjs');

if (!fs.existsSync(esmDir)) fs.mkdirSync(esmDir, { recursive: true });
if (fs.existsSync(cjsEntrySrc)) {
  fs.copyFileSync(cjsEntrySrc, cjsEntryDest);
}
