let seed = 0;

export function nextId(prefix = "el"): string {
  seed += 1;
  return `${prefix}-${seed.toString(36)}`;
}
