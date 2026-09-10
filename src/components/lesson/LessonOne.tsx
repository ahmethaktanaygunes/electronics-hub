import { LessonPlayer } from "@/components/lesson/LessonPlayer";
import { LESSON_ONE_STEPS } from "@/components/lesson/lessonSteps";

/**
 * Lesson 1 is delivered as a card-by-card step flow instead of one long page.
 * All content, the Ohm's Law simulation and every practice question live in
 * LESSON_ONE_STEPS; the player handles progress, navigation and gating.
 */
export function LessonOne() {
  return <LessonPlayer steps={LESSON_ONE_STEPS} lessonId="01" />;
}
