import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type MenuKey = "save" | "export" | "more" | null;

type AppHeaderProps = {
  venueName: string;
  planName: string | null;
  onInsert: () => void;
  isInsertDisabled: boolean;
  onSave: () => void;
  canSave: boolean;
  isSaving: boolean;
  onSaveAs: () => void;
  onNewPlan: () => void;
  libraryOpen: boolean;
  onOpenLibrary: () => void;
  onCloseLibrary: () => void;
  onExportPdf: () => void;
  onExportSvg: () => void;
  onExportPng: () => void;
  onOpenPageSetup: () => void;
  onPrint: () => void;
  languageValue: string;
  onLanguageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  hasTenantConfigured: boolean;
  validationStatus: "ok" | "warn" | "error" | null;
  validationLabel: string | null;
  savedStatusLabel: string | null;
  errorMessage: string | null;
};

export function AppHeader({
  venueName,
  planName,
  onInsert,
  isInsertDisabled,
  onSave,
  canSave,
  isSaving,
  onSaveAs,
  onNewPlan,
  libraryOpen,
  onOpenLibrary,
  onCloseLibrary,
  onExportPdf,
  onExportSvg,
  onExportPng,
  onOpenPageSetup,
  onPrint,
  languageValue,
  onLanguageChange,
  hasTenantConfigured,
  validationStatus,
  validationLabel,
  savedStatusLabel,
  errorMessage
}: AppHeaderProps) {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!openMenu) {
      return;
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [openMenu]);

  const toggleMenu = (menu: MenuKey) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  return (
    <header className="app-header">
      <div className="app-header__main" ref={containerRef}>
        <h1 className="app-header__title">SeatPilot · Venue Structure Editor</h1>
        <Breadcrumb venue={venueName} plan={planName} />
        <button
          type="button"
          className="app__button"
          onClick={onInsert}
          disabled={isInsertDisabled}
        >
          {t("insert.title", "Insertar")}
          <span className="app__button-hint">⌘K</span>
        </button>

        <HeaderMenu
          label={t("toolbar.save", "Guardar")}
          open={openMenu === "save"}
          onToggle={() => toggleMenu("save")}
        >
          <HeaderMenuItem
            label={
              isSaving
                ? t("toolbar.saving", "Guardando…")
                : `${t("toolbar.save", "Guardar")} (⌘S)`
            }
            onClick={() => {
              onSave();
              setOpenMenu(null);
            }}
            disabled={!canSave || isSaving}
          />
          <HeaderMenuSeparator />
          <HeaderMenuItem
            label={`${t("toolbar.saveAs", "Guardar como…")}`}
            onClick={() => {
              onSaveAs();
              setOpenMenu(null);
            }}
            disabled={!canSave}
          />
        </HeaderMenu>

        <HeaderMenu
          label={t("toolbar.export", "Exportar")}
          open={openMenu === "export"}
          onToggle={() => toggleMenu("export")}
        >
          <HeaderMenuItem
            label="PDF"
            onClick={() => {
              onExportPdf();
              setOpenMenu(null);
            }}
          />
          <HeaderMenuItem
            label="SVG"
            onClick={() => {
              onExportSvg();
              setOpenMenu(null);
            }}
          />
          <HeaderMenuItem
            label="PNG"
            onClick={() => {
              onExportPng();
              setOpenMenu(null);
            }}
          />
          <HeaderMenuItem
            label={`${t("toolbar.print", "Imprimir")}…`}
            onClick={() => {
              onPrint();
              setOpenMenu(null);
            }}
          />
          <HeaderMenuSeparator />
          <HeaderMenuItem
            label={t("print.pageSetup", "Configuración de página…")}
            onClick={() => {
              onOpenPageSetup();
              setOpenMenu(null);
            }}
          />
        </HeaderMenu>

        <HeaderMenu
          label={t("toolbar.more", "Más")}
          open={openMenu === "more"}
          onToggle={() => toggleMenu("more")}
        >
          <HeaderMenuItem
            label={
              libraryOpen
                ? t("toolbar.returnEditor", "Volver al editor")
                : `${t("toolbar.library", "Planos guardados")}…`
            }
            onClick={() => {
              if (libraryOpen) {
                onCloseLibrary();
              } else {
                onOpenLibrary();
              }
              setOpenMenu(null);
            }}
          />
          <HeaderMenuItem
            label={`${t("toolbar.newPlan", "Nuevo diseño")}…`}
            onClick={() => {
              onNewPlan();
              setOpenMenu(null);
            }}
          />
        </HeaderMenu>
      </div>

      <div className="app-header__meta">
        <div className="app-header__language app__language-select">
          <label htmlFor="language-select">{t("toolbar.language", "Idioma")}</label>
          <select
            id="language-select"
            value={languageValue}
            onChange={onLanguageChange}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>
        </div>
        {!hasTenantConfigured ? (
          <span className="app__header-warning">
            Configura <code>VITE_TENANT_ID</code> para habilitar guardado.
          </span>
        ) : null}
        {validationStatus && validationLabel ? (
          <span className={`app__header-validation app__header-validation--${validationStatus}`}>
            {validationLabel}
          </span>
        ) : null}
        {savedStatusLabel ? (
          <span className="app__header-status">{savedStatusLabel}</span>
        ) : null}
        {errorMessage ? (
          <span className="app__header-error">{errorMessage}</span>
        ) : null}
      </div>
    </header>
  );
}

function Breadcrumb({ venue, plan }: { venue: string; plan: string | null }) {
  return (
    <nav className="app-header__breadcrumb" aria-label="Breadcrumb">
      <span className="app-header__crumb app-header__crumb--muted">
        {venue}
      </span>
      <span className="app-header__crumb app-header__crumb--separator">▸</span>
      <strong className="app-header__crumb app-header__crumb--strong">
        {plan ?? "—"}
      </strong>
    </nav>
  );
}

type HeaderMenuProps = {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

function HeaderMenu({ label, open, onToggle, children }: HeaderMenuProps) {
  return (
    <div className="app-header__menu">
      <button
        type="button"
        className="app__button app__button--secondary"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={onToggle}
      >
        {label} ▾
      </button>
      {open ? (
        <div className="app-header__menu-dropdown" role="menu">
          {children}
        </div>
      ) : null}
    </div>
  );
}

type HeaderMenuItemProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

function HeaderMenuItem({ label, onClick, disabled }: HeaderMenuItemProps) {
  return (
    <button
      type="button"
      role="menuitem"
      className="app-header__menu-item"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

function HeaderMenuSeparator() {
  return <div className="app-header__menu-separator" role="separator" />;
}
