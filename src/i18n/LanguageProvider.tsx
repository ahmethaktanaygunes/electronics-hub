import { useCallback, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { DEFAULT_LANG, isLang, type Lang } from "@/i18n/lang";
import { UI } from "@/i18n/ui";
import { LanguageContext, type LanguageContextValue } from "@/i18n/languageContext";

const STORAGE_KEY = "ewh.lang";

/**
 * Holds the active interface language. The context and its hooks live in
 * `languageContext.ts` so this module only exports the component.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Restore the stored preference after hydration (keeps SSR markup stable).
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && isLang(stored)) setLangState(stored);
    } catch {
      /* storage unavailable — keep the default language */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore write failures */
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: UI[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
