import type { IconSize } from "../../types/palette";
import "./insert.css";

type IconSizeToggleProps = {
  value: IconSize;
  onChange: (value: IconSize) => void;
};

const OPTIONS: IconSize[] = ["S", "M", "L"];

export function IconSizeToggle({ value, onChange }: IconSizeToggleProps) {
  return (
    <div className="insert-size-toggle" role="radiogroup" aria-label="Icon size">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          role="radio"
          aria-checked={option === value}
          className={`insert-size-btn${option === value ? " insert-size-btn--active" : ""}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

