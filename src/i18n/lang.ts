/** Supported interface languages. English is the original, Turkish is the translation. */
export type Lang = "en" | "tr";

export const LANGS: Lang[] = ["en", "tr"];

export const DEFAULT_LANG: Lang = "en";

export function isLang(value: string): value is Lang {
  return value === "en" || value === "tr";
}

/** Picks the variant matching the active language from a `{ en, tr }` pair. */
export function pick<T>(copy: Record<Lang, T>, lang: Lang): T {
  return copy[lang];
}
