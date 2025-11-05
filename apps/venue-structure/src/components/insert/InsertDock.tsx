import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { CatalogItem } from "../../palette/catalog";
import type { PaletteCategory } from "../../types/palette";
import { Icon } from "../icons/Icon";
import "./insert-dock.css";

type InsertDockProps = {
  categories: PaletteCategory[];
  items: CatalogItem[];
  recentItems: CatalogItem[];
  onPick: (item: CatalogItem) => void;
  onToggleCategory?: (categoryId: string, open: boolean) => void;
};

const ICON_MAP: Record<string, string> = {
  seating: "sp-chair-row",
  service: "sp-concrete-block",
  general: "sp-gift-table",
  stage: "sp-stage",
  utilities: "sp-rain-gutter",
  safety: "sp-tent-pole",
  floorplans: "sp-dancefloor-panels",
  basic: "sp-leg-drape"
};

export function InsertDock({
  categories,
  items,
  recentItems,
  onPick,
  onToggleCategory
}: InsertDockProps) {
  const { t } = useTranslation();
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!openCategory) {
      return;
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenCategory((current) => {
          if (current) {
            onToggleCategory?.(current, false);
          }
          return null;
        });
      }
    };
    const handleClick = (event: MouseEvent) => {
      if (!popoverRef.current?.contains(event.target as Node)) {
        setOpenCategory((current) => {
          if (current) {
            onToggleCategory?.(current, false);
          }
          return null;
        });
      }
    };
    window.addEventListener("keydown", handleKey);
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [openCategory]);

  const shownItems = useMemo(() => {
    if (!openCategory) {
      return [];
    }
    const subset = items.filter((item) => item.categoryId === openCategory);
    return subset.slice(0, 12);
  }, [items, openCategory]);

  const recentSlice = useMemo(() => recentItems.slice(0, 6), [recentItems]);

  return (
    <div className="insert-dock" aria-label="Insert quick dock">
      <div className="insert-dock__group">
        {recentSlice.length > 0 ? (
          <div className="insert-dock__recent" aria-label={t("insert.recents", "Recents")}>
            {recentSlice.map((item) => (
              <button
                key={`recent-${item.typeId}`}
                className="insert-dock__item insert-dock__item--recent"
                title={`${item.fallbackName} · ${Math.round(item.widthInches)}″ × ${Math.round(
                  item.depthInches
                )}″`}
                type="button"
                onClick={() => onPick(item)}
              >
                <Icon
                  name={item.iconName}
                  size={28}
                  aria-hidden
                  className="insert-dock__item-icon"
                />
              </button>
            ))}
          </div>
        ) : null}
        <div className="insert-dock__categories">
          {categories.map((category) => {
            const iconName = ICON_MAP[category.id] ?? null;
            const isActive = openCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                className={`insert-dock__item ${isActive ? "is-active" : ""}`}
                title={t(category.labelKey, category.labelKey)}
                onClick={() =>
                  setOpenCategory((current) => {
                    const next = current === category.id ? null : category.id;
                    if (current && current !== next) {
                      onToggleCategory?.(current, false);
                    }
                    if (next) {
                      onToggleCategory?.(category.id, true);
                    }
                    return next;
                  })
                }
              >
                {iconName ? (
                  <Icon
                    name={iconName}
                    size={26}
                    aria-hidden
                    className="insert-dock__item-icon"
                  />
                ) : (
                  <span className="insert-dock__item-fallback">
                    {category.labelKey.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      {openCategory ? (
        <div className="insert-dock__popover" ref={popoverRef}>
          <div className="insert-dock__popover-header">
            <span className="insert-dock__popover-title">
              {t(`palette.${openCategory}`, openCategory)}
            </span>
            <button
              type="button"
              className="insert-dock__popover-close"
              onClick={() => {
                setOpenCategory((current) => {
                  if (current) {
                    onToggleCategory?.(current, false);
                  }
                  return null;
                });
              }}
            >
              ×
            </button>
          </div>
          <div className="insert-dock__popover-grid">
            {shownItems.map((item) => (
              <button
                key={item.typeId}
                type="button"
                className="insert-dock__card"
                onClick={() => {
                  onPick(item);
                  setOpenCategory((current) => {
                    if (current) {
                      onToggleCategory?.(current, false);
                    }
                    return null;
                  });
                }}
              >
                <Icon
                  name={item.iconName}
                  size={32}
                  aria-hidden
                  className="insert-dock__card-icon"
                />
                <span className="insert-dock__card-name">{item.fallbackName}</span>
                <span className="insert-dock__card-meta">
                  {Math.round(item.widthInches)}″ × {Math.round(item.depthInches)}″
                </span>
              </button>
            ))}
            {shownItems.length === 0 ? (
              <div className="insert-dock__empty">
                {t("insert.empty", "No items available in this category.")}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
