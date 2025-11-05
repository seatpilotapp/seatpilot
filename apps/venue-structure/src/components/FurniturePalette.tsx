import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { CatalogItem } from "../palette/catalog";
import "./FurniturePalette.css";

type FurniturePaletteProps = {
  items: CatalogItem[];
  selectedType: string | null;
  onSelectType: (typeId: string) => void;
};

export function FurniturePalette({ items, selectedType, onSelectType }: FurniturePaletteProps) {
  const { t } = useTranslation();
  const categories = useMemo(
    () => Array.from(new Set(items.map((item) => item.categoryId))),
    [items]
  );

  return (
    <section className="palette">
      {categories.map((categoryId) => {
        const group = items.filter((item) => item.categoryId === categoryId);
        return (
          <div key={categoryId} className="palette__group">
            <h3 className="palette__title">
              {t(`palette.${categoryId}`, itemCategoryFallback(categoryId))}
            </h3>
            <div className="palette__items">
              {group.map((item) => {
                const isSelected = selectedType === item.typeId;
                return (
                  <button
                    key={item.typeId}
                    type="button"
                    className={`palette__item ${
                      isSelected ? "palette__item--selected" : ""
                    }`}
                    onClick={() => onSelectType(item.typeId)}
                  >
                    <span className="palette__item-name">
                      {t(item.nameKey, item.fallbackName)}
                    </span>
                    <span className="palette__item-size">
                      {Math.round(item.widthInches)}" × {Math.round(item.depthInches)}"
                    </span>
                    {item.classification ? (
                      <span className="palette__item-meta">
                        {item.classification === "FOH"
                          ? t("palette.meta.foh", "Front of house")
                          : item.classification === "BOH"
                            ? t("palette.meta.boh", "Back of house")
                            : t("palette.meta.shared", "Shared")}
                      </span>
                    ) : null}
                    {item.notes ? (
                      <span className="palette__item-meta">{item.notes}</span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
}

function itemCategoryFallback(categoryId: string): string {
  switch (categoryId) {
    case "seating":
      return "Seating";
    case "stage":
      return "Stage";
    case "safety":
      return "Safety";
    case "utilities":
      return "Utilities";
    case "service":
      return "Service";
    case "floorplans":
      return "Floorplans";
    case "general":
      return "General";
    case "basic":
      return "Basic";
    default:
      return categoryId;
  }
}

