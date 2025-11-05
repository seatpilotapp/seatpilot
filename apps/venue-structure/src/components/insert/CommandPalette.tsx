import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import type { CatalogItem } from "../../palette/catalog";
import { Icon } from "../icons/Icon";
import "./CommandPalette.css";

type CommandPaletteProps = {
  open: boolean;
  items: CatalogItem[];
  recentItems: CatalogItem[];
  selectedType: string | null;
  onSelect: (item: CatalogItem) => void;
  onClose: () => void;
};

const MAX_RESULTS = 40;

export function CommandPalette({
  open,
  items,
  recentItems,
  selectedType,
  onSelect,
  onClose
}: CommandPaletteProps) {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listboxId = useId();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!open) {
      return;
    }
    setQuery("");
    setActiveIndex(0);
    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    }, 0);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const normalizedQuery = query.trim().toLowerCase();
  const dedupedItems = useMemo(() => {
    const seen = new Set<string>();
    return items.filter((item) => {
      if (seen.has(item.typeId)) {
        return false;
      }
      seen.add(item.typeId);
      return true;
    });
  }, [items]);

  const results = useMemo(() => {
    if (!normalizedQuery) {
      const ranked = [
        ...recentItems,
        ...dedupedItems.filter(
          (item) => !recentItems.some((recent) => recent.typeId === item.typeId)
        )
      ];
      return ranked.slice(0, MAX_RESULTS);
    }
    const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
    const matches = dedupedItems.filter((item) => {
      const haystack = `${item.fallbackName} ${item.categoryId} ${item.notes ?? ""} ${item.tags.join(" ")}`.toLowerCase();
      return tokens.every((token) => haystack.includes(token));
    });
    return matches.slice(0, MAX_RESULTS);
  }, [dedupedItems, normalizedQuery, recentItems]);

  useEffect(() => {
    if (activeIndex >= results.length) {
      setActiveIndex(Math.max(results.length - 1, 0));
    }
  }, [activeIndex, results.length]);

  const activeOptionId = results[activeIndex]
    ? `${listboxId}-option-${results[activeIndex].typeId}`
    : undefined;

  const handleSelect = (item: CatalogItem) => {
    onSelect(item);
  };

  const handleInputKeyDown = (event: ReactKeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (results.length === 0 ? 0 : (prev + 1) % results.length));
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) => {
        if (results.length === 0) {
          return 0;
        }
        return prev === 0 ? results.length - 1 : prev - 1;
      });
      return;
    }
    if (event.key === "Enter") {
      event.preventDefault();
      const target = results[activeIndex];
      if (target) {
        handleSelect(target);
      }
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div className="command-palette__backdrop" role="presentation" onClick={onClose}>
      <div
        className="command-palette"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${listboxId}-label`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="command-palette__header">
          <label id={`${listboxId}-label`} htmlFor={`${listboxId}-input`}>
            Buscar elemento
          </label>
          <input
            id={`${listboxId}-input`}
            ref={inputRef}
            type="text"
            value={query}
            placeholder="Escribe para insertar…"
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleInputKeyDown}
            autoComplete="off"
          />
        </div>
        <div
          className="command-palette__body"
          role="listbox"
          aria-activedescendant={activeOptionId}
        >
          {results.length === 0 ? (
            <div className="command-palette__empty">
              No encontramos resultados para “{query}”.
            </div>
          ) : (
            results.map((item, index) => {
              const isActive = index === activeIndex;
              const isSelected = selectedType === item.typeId;
              return (
                <button
                  key={item.typeId}
                  type="button"
                  className={`command-palette__item${
                    isActive ? " command-palette__item--active" : ""
                  }${isSelected ? " command-palette__item--selected" : ""}`}
                  role="option"
                  aria-selected={isActive}
                  id={`${listboxId}-option-${item.typeId}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => handleSelect(item)}
                >
                  <div className="command-palette__item-main">
                    <Icon
                      name={item.iconName}
                      size={32}
                      className="command-palette__item-icon"
                    />
                    <span className="command-palette__item-name">
                      {t(item.nameKey, item.fallbackName)}
                    </span>
                    <span className="command-palette__item-size">
                      {Math.round(item.widthInches)}″ × {Math.round(item.depthInches)}″
                    </span>
                  </div>
                  <div className="command-palette__item-meta">
                    <span className="command-palette__item-chip">
                      {t(`palette.${item.categoryId}`, item.categoryLabel)}
                    </span>
                    {item.classification ? (
                      <span className="command-palette__item-chip command-palette__item-chip--muted">
                        {item.classification.toUpperCase()}
                      </span>
                    ) : null}
                    {item.notes ? <small>{item.notes}</small> : null}
                  </div>
                </button>
              );
            })
          )}
        </div>
        <footer className="command-palette__footer">
          <span>Enter para insertar · Esc cerrar · ⌘K abre/cierra</span>
        </footer>
      </div>
    </div>
  );
}
