#!/usr/bin/env node
/**
 * Validate icon manifest (brand/icons/sp-icons.manifest.json) against SVG files.
 * Checks naming, duplication, presence, and basic SVG attribute requirements.
 */

const fs = require('fs');
const path = require('path');

const manifestPath = path.resolve('brand/icons/sp-icons.manifest.json');
const svgDir = path.resolve('brand/icons');

const errors = [];

function addError(msg) {
  errors.push(`✗ ${msg}`);
}

function readJSON(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    addError(`No se pudo leer/parsear JSON: ${file} (${error.message})`);
    return null;
  }
}

if (!fs.existsSync(manifestPath)) {
  console.log('⚠️  brand/icons/sp-icons.manifest.json no encontrado. Lint omitido.');
  process.exit(0);
}

if (!fs.existsSync(svgDir)) {
  console.log('⚠️  Directorio brand/icons/ no encontrado. Lint omitido.');
  process.exit(0);
}

const manifest = readJSON(manifestPath);
if (!manifest) {
  console.error(errors.join('\n'));
  process.exit(1);
}

if (!manifest.version) {
  addError('El manifest debe incluir "version" (SemVer).');
}

if (!Array.isArray(manifest.icons) || manifest.icons.length === 0) {
  addError('"icons" debe ser un array con al menos un elemento.');
}

const iconNames = new Set();
const requiredIcons = new Set();
(manifest.icons || []).forEach((icon, index) => {
  const label = `Icon[${index}]`;

  if (!icon.name) {
    addError(`${label} carece de "name".`);
    return;
  }

  if (!icon.name.startsWith('sp-')) {
    addError(`${label} "${icon.name}" debe comenzar con "sp-".`);
  }

  if (iconNames.has(icon.name)) {
    addError(`Nombre duplicado en manifest: "${icon.name}".`);
  }
  iconNames.add(icon.name);
  if (icon.status !== 'pending') {
    requiredIcons.add(icon.name);
  }

  if (!icon.category) {
    addError(`${label} "${icon.name}" carece de "category".`);
  }

  if (!Array.isArray(icon.tags) || icon.tags.length === 0) {
    addError(`${label} "${icon.name}" debería incluir "tags".`);
  }
});

// Buscar SVGs
const svgFiles = fs
  .readdirSync(svgDir)
  .filter((file) => file.startsWith('sp-') && file.endsWith('.svg'));

const kebabRegex = /^sp-[a-z0-9]+(?:-[a-z0-9]+)*\.svg$/;
svgFiles.forEach((file) => {
  if (!kebabRegex.test(file)) {
    addError(`Nombre de archivo inválido (kebab-case requerido): "${file}".`);
  }
});

// 1) Manifest -> disco
for (const name of requiredIcons) {
  const expectedFile = `${name}.svg`;
  if (!svgFiles.includes(expectedFile)) {
    addError(`No existe SVG en disco para "${name}".`);
  }
}

// 2) Disco -> manifest
svgFiles.forEach((file) => {
  const name = path.basename(file, '.svg');
  if (!iconNames.has(name)) {
    addError(`SVG sin entrada en manifest: "${file}".`);
  }
});

// Quick SVG lint (atributos mínimos)
const requiredFragments = [
  'viewBox="0 0 24 24"',
  'stroke="currentColor"',
  'stroke-width="1.5"',
  'fill="none"',
];

svgFiles.forEach((file) => {
  const content = fs.readFileSync(path.join(svgDir, file), 'utf8');
  requiredFragments.forEach((fragment) => {
    if (!content.includes(fragment)) {
      addError(`"${file}" no contiene "${fragment}"`);
    }
  });
});

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log('✓ Icon manifest & SVGs — OK');
