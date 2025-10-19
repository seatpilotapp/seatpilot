import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const cache = new Map<string, any>();
const baseDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'schemas');

export async function loadSchema(eventName: string) {
  if (cache.has(eventName)) return cache.get(eventName);

  const schemaPath = path.join(baseDir, `${eventName}.json`);
  const raw = await fs.readFile(schemaPath, 'utf8');
  const schema = JSON.parse(raw);
  cache.set(eventName, schema);
  return schema;
}
