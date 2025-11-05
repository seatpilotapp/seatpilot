import { useCallback, useEffect, useMemo, useState } from "react";
import {
  searchPlanLibrary,
  type PlanLibraryEntry,
  type PlanLibraryPagination
} from "../utils/api";
import "./PlanLibrary.css";

type PlanLibraryProps = {
  onSelect: (entry: PlanLibraryEntry) => void;
  onClose: () => void;
};

const PAGE_SIZE = 25;

export function PlanLibrary({ onSelect, onClose }: PlanLibraryProps) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | "draft" | "published" | "archived">("all");
  const [entries, setEntries] = useState<PlanLibraryEntry[]>([]);
  const [pagination, setPagination] = useState<PlanLibraryPagination | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filtersKey = useMemo(() => `${query.trim()}|${status}`, [query, status]);

  const fetchPlans = useCallback(
    async (options: { append: boolean; offset: number }) => {
      setIsLoading(true);
      try {
        const response = await searchPlanLibrary({
          q: query.trim() ? query.trim() : undefined,
          status: status === "all" ? undefined : status,
          limit: PAGE_SIZE,
          offset: options.offset
        });
        setEntries((prev) =>
          options.append ? [...prev, ...response.data] : response.data
        );
        setPagination(response.pagination);
        setError(null);
      } catch (err) {
        console.error(err);
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
    [query, status]
  );

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void fetchPlans({ append: false, offset: 0 });
    }, 300);
    return () => window.clearTimeout(timer);
  }, [fetchPlans, filtersKey]);

  const handleLoadMore = useCallback(() => {
    if (pagination?.hasMore && pagination.nextOffset !== null) {
      void fetchPlans({ append: true, offset: pagination.nextOffset });
    }
  }, [fetchPlans, pagination]);

  const handleSelect = useCallback(
    (entry: PlanLibraryEntry) => {
      onSelect(entry);
    },
    [onSelect]
  );

  return (
    <section className="plan-library">
      <header className="plan-library__top">
        <div className="plan-library__filters">
          <input
            type="search"
            className="plan-library__search"
            placeholder="Buscar por nombre, versión, etiqueta…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select
            className="plan-library__select"
            value={status}
            onChange={(event) =>
              setStatus(event.target.value as "all" | "draft" | "published" | "archived")
            }
          >
            <option value="all">Todos los estados</option>
            <option value="draft">Borradores</option>
            <option value="published">Publicados</option>
            <option value="archived">Archivados</option>
          </select>
        </div>
        <button type="button" className="plan-library__close" onClick={onClose}>
          Volver al editor
        </button>
      </header>

      {error ? <div className="plan-library__error">{error}</div> : null}

      <div className="plan-library__table-wrapper">
        <table className="plan-library__table">
          <thead>
            <tr>
              <th>Plano</th>
              <th>Venue</th>
              <th>Ubicación</th>
              <th>Estado</th>
              <th>Actualizado</th>
            </tr>
          </thead>
          <tbody>
            {entries.length === 0 && !isLoading ? (
              <tr>
                <td colSpan={5} className="plan-library__empty">
                  No hay planos guardados con los filtros actuales.
                </td>
              </tr>
            ) : null}
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td>
                  <button
                    type="button"
                    className="plan-library__link"
                    onClick={() => handleSelect(entry)}
                  >
                    {entry.displayName}
                  </button>
                  <div className="plan-library__meta">
                    {entry.versionLabel}
                    {entry.tags.length > 0
                      ? ` · ${entry.tags.slice(0, 3).join(", ")}${
                          entry.tags.length > 3 ? "…" : ""
                        }`
                      : ""}
                  </div>
                </td>
                <td>
                  <div className="plan-library__strong">{entry.venue.name}</div>
                  {entry.venue.tags.length > 0 ? (
                    <div className="plan-library__meta">
                      {entry.venue.tags.slice(0, 3).join(", ")}
                      {entry.venue.tags.length > 3 ? "…" : ""}
                    </div>
                  ) : null}
                </td>
                <td>
                  {[entry.venue.city, entry.venue.region, entry.venue.locality]
                    .filter((value) => Boolean(value))
                    .join(", ")}
                </td>
                <td className={`plan-library__status plan-library__status--${entry.status}`}>
                  {entry.status}
                </td>
                <td>{new Date(entry.updatedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {isLoading ? <div className="plan-library__loading">Cargando…</div> : null}
      </div>

      <footer className="plan-library__footer">
        {pagination?.hasMore ? (
          <button
            type="button"
            className="plan-library__load-more"
            onClick={handleLoadMore}
            disabled={isLoading}
          >
            Cargar más
          </button>
        ) : (
          <span className="plan-library__footer-text">
            {entries.length === 0 ? "Sin resultados" : "Fin de la lista"}
          </span>
        )}
      </footer>
    </section>
  );
}
