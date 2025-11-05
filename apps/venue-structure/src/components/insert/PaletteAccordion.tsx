import { useTranslation } from "react-i18next";
import type { PaletteCategory } from "../../types/palette";
import "./insert.css";

type PaletteAccordionProps = {
  categories: PaletteCategory[];
  activeId: string;
  onChange: (id: string) => void;
};

export function PaletteAccordion({ categories, activeId, onChange }: PaletteAccordionProps) {
  const { t } = useTranslation();
  return (
    <nav className="insert-nav" aria-label={t("insert.categories", "Categories")}
      data-testid="insert-nav">
      {categories.map((category) => {
        const isActive = category.id === activeId;
        return (
          <button
            key={category.id}
            type="button"
            className={`insert-nav__item${isActive ? " insert-nav__item--active" : ""}`}
            onClick={() => onChange(category.id)}
          >
            {category.icon ? (
              <span className="insert-nav__icon">{category.icon}</span>
            ) : null}
            <span className="insert-nav__label">
              {t(category.labelKey, category.labelKey)}
            </span>
            <span className="insert-nav__chevron" aria-hidden>
              ›
            </span>
          </button>
        );
      })}
    </nav>
  );
}
