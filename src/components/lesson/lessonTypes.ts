import type { ReactNode } from "react";
import type { QuizItem } from "@/data/quizTypes";

/** One card in a lesson step flow. */
export interface LessonStep {
  id: string;
  /** Group label shown in the progress header. */
  section: string;
  title: string;
  subtitle?: string;
  /** Body for concept / simulation steps. */
  content?: ReactNode;
  /** When present, the step is a gated question. */
  quiz?: QuizItem;
}
