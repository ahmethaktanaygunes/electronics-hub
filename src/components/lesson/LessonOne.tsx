import { LessonPlayer } from "@/components/lesson/LessonPlayer";
import { LESSON_ONE_STEPS } from "@/components/lesson/lessonSteps";

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
  return (
    <LessonPlayer
      steps={LESSON_ONE_STEPS}
      lessonId="01"
      lessonTitle="Lesson 1: Introduction to Electronics & Ohm’s Law"
      outcomes={OUTCOMES}
      nextLessonId="02"
    />
  );
}
