import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { CatalogItem } from "../../palette/catalog";
import type { PaletteCategory, IconSize } from "../../types/palette";
import { Icon } from "../icons/Icon";
import { IconSizeToggle } from "./IconSizeToggle";
import { PaletteAccordion } from "./PaletteAccordion";
import { useFuzzySearch } from "./useFuzzySearch";
import "./insert.css";

const ICON_SIZE_STORAGE_KEY = "sp.insert.iconSize";

type InsertMenuProps = {
  open: boolean;
  onClose: () => void;
  items: CatalogItem[];
  categories: PaletteCategory[];
  recentItems: CatalogItem[];
  onPick: (item: CatalogItem) => void;
  onDragStart?: (item: CatalogItem) => void;
  onSearch?: (query: string) => void;
};

export function InsertMenu({
  open,
  onClose,
  items,
  categories,
  recentItems,
  onPick,
  onDragStart,
  onSearch
}: InsertMenuProps) {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState("");
  const [size, setSize] = useState<IconSize>(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(ICON_SIZE_STORAGE_KEY) : null;
    if (stored === "S" || stored === "M" || stored === "L") {
      return stored;
    }
    return "M";
  });
  const [activeCategory, setActiveCategory] = useState<string>("seating");

  useEffect(() => {
    if (!open) {
      return;
    }
    const focusHandle = window.requestAnimationFrame(() => {
      searchRef.current?.focus();
      searchRef.current?.select();
    });
    const handleClickOutside = (event: MouseEvent) => {
      if (!dialogRef.current) {
        return;
      }
      if (!dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEscape);
      window.cancelAnimationFrame(focusHandle);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }
    setQuery("");
    onSearch?.("");
  }, [open, onSearch]);

  const filteredItems = useMemo(() => {
    const byCategory = items.filter((item) => item.categoryId === activeCategory);
    if (!query) {
      return byCategory;
    }
    return useFuzzySearch(byCategory, query, (item) => {
      const keywords = [item.fallbackName, item.categoryId, ...item.tags].join(" ");
      return keywords;
    });
  }, [activeCategory, items, query]);

  const gridColumns = size === "S" ? 4 : size === "M" ? 3 : 2;

  const handleQueryChange = (value: string) => {
    setQuery(value);
    onSearch?.(value);
  };

  const handleSizeChange = (next: IconSize) => {
    setSize(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(ICON_SIZE_STORAGE_KEY, next);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <div className="insert-overlay" role="presentation">
      <div
        className="insert-root"
        role="dialog"
        aria-modal="true"
        aria-label={t("insert.title", "Insert")}
        ref={dialogRef}
      >
        <header className="insert-toolbar">
          <input
            type="search"
            className="insert-search"
            placeholder={t("insert.searchPlaceholder", "Search (⌘K)")}
            value={query}
            onChange={(event) => handleQueryChange(event.target.value)}
            ref={searchRef}
          />
          <IconSizeToggle value={size} onChange={handleSizeChange} />
          <button type="button" className="insert-close" onClick={onClose}>
            {t("common.close", "Close")}
          </button>
        </header>

        <div className="insert-body">
          <PaletteAccordion
            categories={categories}
            activeId={activeCategory}
            onChange={setActiveCategory}
          />

          <div className="insert-content">
            {recentItems.length > 0 && !query ? (
              <section className="insert-section">
                <h4>{t("insert.recents", "Recents")}</h4>
                <div
                  className="insert-grid"
                  style={{ gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))` }}
                >
                  {recentItems.map((item) => (
                    <PaletteCell
                      key={item.id}
                      item={item}
                      size={size}
                      onPick={onPick}
                      onDragStart={onDragStart}
                    />
                  ))}
                </div>
              </section>
            ) : null}

            <section className="insert-section insert-section--scroll">
              <div
                className="insert-grid"
                style={{ gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))` }}
              >
                {filteredItems.map((item) => (
                  <PaletteCell
                    key={item.id}
                    item={item}
                    size={size}
                    onPick={onPick}
                    onDragStart={onDragStart}
                  />
                ))}
                {filteredItems.length === 0 ? (
                  <div className="insert-empty" data-testid="insert-empty">
                    {t("insert.noResults", "No matches for your search.")}
                  </div>
                ) : null}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

type PaletteCellProps = {
  item: CatalogItem;
  size: IconSize;
  onPick: (item: CatalogItem) => void;
  onDragStart?: (item: CatalogItem) => void;
};

function PaletteCell({ item, size, onPick, onDragStart }: PaletteCellProps) {
  const { t } = useTranslation();
  const dimension = size === "S" ? 36 : size === "M" ? 48 : 56;
  return (
    <button
      type="button"
      className={`insert-cell insert-cell--${size}`}
      onClick={() => onPick(item)}
      draggable={Boolean(onDragStart)}
      onDragStart={() => onDragStart?.(item)}
    >
      <Icon name={item.iconName} size={dimension} aria-hidden className="insert-cell__icon" />
      <span className="insert-cell__label">{t(item.nameKey, item.fallbackName)}</span>
      <span className="insert-cell__meta">
        {Math.round(item.widthInches)}″ × {Math.round(item.depthInches)}″
      </span>
    </button>
  );
}
