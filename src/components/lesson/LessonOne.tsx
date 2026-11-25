import { useMemo } from "react";
import { LessonPlayer } from "@/components/lesson/LessonPlayer";
import { buildLessonOneSteps } from "@/components/lesson/lessonSteps";
import { useLanguage } from "@/i18n/languageContext";
import { lessonText, LESSONS } from "@/data/lessons";

const OUTCOMES = [
  "Explain the difference between electricity and electronics.",
  "Name the three fundamental quantities and their SI units.",
  "Describe what resistance is and give three reasons to use a resistor.",
  "Convert between mA/A, kΩ/Ω, MΩ/Ω and mV/V without a calculator.",
  "State Ohm’s Law and solve it for V, I and R.",
  "Predict how current changes when V or R changes.",
  "Size a series resistor for an LED from its forward voltage and target current.",
  "Describe the single current path in a series circuit.",
];

/**
 * Lesson 1 is delivered as a card-by-card step flow instead of one long page.
 * All content, the Ohm's Law simulation and every practice question live in
 * LESSON_ONE_STEPS; the player handles progress, navigation and gating.
 */
export function LessonOne() {
  const { lang } = useLanguage();
  const steps = useMemo(() => buildLessonOneSteps(lang), [lang]);
  const lesson = LESSONS.find((item) => item.id === "01");
  const localizedTitle = lesson ? lessonText(lesson, lang).title : "Lesson 1";
  const localizedOutcomes =
    lang === "tr"
      ? [
          "Elektrik ile elektronik arasındaki farkı açıklayın.",
          "Üç temel büyüklüğü ve SI birimlerini sayın.",
          "Direncin ne olduğunu ve direnç kullanılmasının üç nedenini açıklayın.",
          "mA/A, kΩ/Ω, MΩ/Ω ve mV/V birimlerini hesap makinesiz dönüştürün.",
          "Ohm Kanunu'nu söyleyin ve V, I, R için çözün.",
          "V veya R değiştiğinde akımın nasıl değişeceğini tahmin edin.",
          "LED'in ileri gerilimi ve hedef akımından seri direnci seçin.",
          "Seri devredeki tek akım yolunu açıklayın.",
        ]
      : OUTCOMES;

  return (
    <LessonPlayer
      steps={steps}
      lessonId="01"
      lessonTitle={localizedTitle}
      outcomes={localizedOutcomes}
      nextLessonId="02"
    />
  );
}
