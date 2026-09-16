import { useMemo } from "react";
import { LessonPlayer } from "@/components/lesson/LessonPlayer";
import { buildLessonTwoSteps } from "@/components/lesson/lessonTwoSteps";
import { LESSON_TWO_COPY } from "@/i18n/lesson2";
import { useLanguage } from "@/i18n/languageContext";

/**
 * Lesson 2 — Series and Parallel Circuits.
 * The whole card flow is rebuilt whenever the language changes, so every
 * title, explanation, question and solution switches instantly (EN / TR).
 */
export function LessonTwo() {
  const { lang } = useLanguage();
  const steps = useMemo(() => buildLessonTwoSteps(lang), [lang]);
  const copy = LESSON_TWO_COPY[lang];

  return (
    <LessonPlayer
      steps={steps}
      lessonId="02"
      lessonTitle={copy.title}
      outcomes={copy.outcomes.items}
      nextLessonId="03"
    />
  );
}
