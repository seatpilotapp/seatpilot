#!/usr/bin/env node

/**
 * Ejecuta Lighthouse (PWA + accesibilidad) usando Chrome sin sandbox y
 * verifica que los puntajes sean ≥ 90. Guarda el reporte en lighthouse.json.
 */

const { execSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const REPORT_PATH = path.resolve(process.cwd(), 'lighthouse.json');
const MIN_SCORE = 90;

function run(command) {
  execSync(command, { stdio: 'inherit' });
}

function readReport() {
  if (!fs.existsSync(REPORT_PATH)) {
    throw new Error('Lighthouse report not found.');
  }

  const raw = fs.readFileSync(REPORT_PATH, 'utf8');

  if (!raw.trim()) {
    throw new Error('Lighthouse report is empty.');
  }

  const parsed = JSON.parse(raw);
  return Array.isArray(parsed) ? parsed[0] : parsed;
}

function scoreToPercent(value) {
  if (typeof value !== 'number') {
    return null;
  }
  return Math.round(value * 100);
}

try {
  run(
    'npx lighthouse http://localhost:3000 --quiet ' +
      '--only-categories=pwa,accessibility --chrome-flags="--no-sandbox --disable-dev-shm-usage" ' +
      '--output=json --output-path=./lighthouse.json'
  );

  const report = readReport();
  const pwaScore = scoreToPercent(report?.categories?.pwa?.score);
  const a11yScore = scoreToPercent(report?.categories?.accessibility?.score);

  if (pwaScore === null) {
    throw new Error('PWA score not found in report.');
  }
  if (a11yScore === null) {
    throw new Error('Accessibility score not found in report.');
  }

  console.log(`PWA score: ${pwaScore}`);
  console.log(`Accessibility score: ${a11yScore}`);

  if (pwaScore < MIN_SCORE) {
    throw new Error(`PWA score ${pwaScore} below required ${MIN_SCORE}.`);
  }
  if (a11yScore < MIN_SCORE) {
    throw new Error(`Accessibility score ${a11yScore} below required ${MIN_SCORE}.`);
  }

  console.log('✅ Lighthouse thresholds OK.');
} catch (error) {
  console.error(error.message || error);
  process.exit(1);
}
