import "./Icon.css";

const iconModules = import.meta.glob("../../../../brand/icons/*.svg", {
  eager: true,
  import: "default"
}) as Record<string, string>;

const ICON_MAP: Record<string, string> = Object.entries(iconModules).reduce(
  (acc, [path, value]) => {
    const match = path.match(/brand\/icons\/(.+)\.svg$/);
    if (match) {
      acc[match[1]] = value;
    }
    return acc;
  },
  {} as Record<string, string>
);

type IconProps = {
  name: string;
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
};

export function Icon({ name, size = 32, className, "aria-hidden": ariaHidden = true }: IconProps) {
  const src = ICON_MAP[name];
  if (!src) {
    return (
      <span
        className={`icon icon--placeholder ${className ?? ""}`}
        style={{ width: size, height: size }}
        aria-hidden={ariaHidden}
      />
    );
  }
  return (
    <img
      src={src}
      alt=""
      className={`icon ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-hidden={ariaHidden}
    />
  );
}

