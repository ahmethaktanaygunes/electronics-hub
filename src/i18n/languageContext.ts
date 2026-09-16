import { createContext, useContext } from "react";
import type { Lang } from "@/i18n/lang";
import type { UiStrings } from "@/i18n/ui";

export interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Interface strings for the active language. */
  t: UiStrings;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage() must be used inside a <LanguageProvider>");
  }
  return context;
}

/** Shorthand for `useLanguage().t`. */
export function useUi(): UiStrings {
  return useLanguage().t;
}
