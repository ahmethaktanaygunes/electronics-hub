import { LANGS, type Lang } from "@/i18n/lang";
import { useLanguage } from "@/i18n/languageContext";

const LABEL: Record<Lang, string> = { en: "EN", tr: "TR" };

const TITLE: Record<Lang, string> = {
  en: "English",
  tr: "Türkçe",
};

/** EN / TR toggle. Lives in the site header so it is always reachable. */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className={`flex items-stretch ${className}`} role="group" aria-label={t.language}>
      {LANGS.map((code, index) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            title={TITLE[code]}
            className={`h-7 min-w-[38px] border px-2 font-mono text-[11px] tracking-[0.08em] uppercase transition-colors ${
              index > 0 ? "-ml-px" : ""
            } ${
              active
                ? "border-glow bg-glow/15 text-glow"
                : "border-rule text-muted-foreground hover:border-rule-strong hover:text-foreground"
            }`}
          >
            {LABEL[code]}
          </button>
        );
      })}
    </div>
  );
}
