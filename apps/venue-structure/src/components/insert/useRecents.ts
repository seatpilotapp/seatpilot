import { useCallback, useEffect, useState } from "react";

export function useRecents(storageKey: string, initialIds: string[] = []) {
  const [ids, setIds] = useState<string[]>(initialIds);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) {
        return;
      }
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setIds(parsed.filter((value): value is string => typeof value === "string"));
      }
    } catch (error) {
      console.warn("[insert] unable to read recents", error);
    }
  }, [storageKey]);

  const pushRecent = useCallback(
    (id: string, limit = 10) => {
      setIds((current) => {
        const next = [id, ...current.filter((value) => value !== id)].slice(0, limit);
        if (typeof window !== "undefined") {
          try {
            window.localStorage.setItem(storageKey, JSON.stringify(next));
          } catch (error) {
            console.warn("[insert] unable to persist recents", error);
          }
        }
        return next;
      });
    },
    [storageKey]
  );

  return { ids, pushRecent };
}

