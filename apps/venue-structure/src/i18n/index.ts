import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./locales/es.json";
import en from "./locales/en.json";

const DEFAULT_LANG = "es";
const STORAGE_KEY = "sp.lang";

const storedLanguage =
  typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;

const browserLanguage =
  typeof window !== "undefined" ? window.navigator.language || window.navigator.languages?.[0] : "";

const initialLanguage = storedLanguage
  ? storedLanguage
  : browserLanguage?.toLowerCase().startsWith("es")
    ? "es"
    : "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en }
    },
    lng: initialLanguage,
    fallbackLng: DEFAULT_LANG,
    interpolation: {
      escapeValue: false
    }
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error("Failed to initialise i18n", error);
  });

export function persistLanguage(language: string) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, language);
  document.documentElement.lang = language;
}

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
}

export default i18n;
