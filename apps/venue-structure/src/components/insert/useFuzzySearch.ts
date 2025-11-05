export function useFuzzySearch<T>(data: T[], query: string, key: (item: T) => string): T[] {
  if (!query) {
    return data;
  }
  const tokens = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  if (tokens.length === 0) {
    return data;
  }

  return data.filter((item) => {
    const haystack = key(item).toLowerCase();
    return tokens.every((token) => haystack.includes(token));
  });
}

