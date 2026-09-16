export interface NumericQuizItem {
  id: string;
  kind: "numeric";
  prompt: string;
  unit: string;
  answer: number;
  /** Relative tolerance, e.g. 0.02 = ±2 % */
  tolerance: number;
  solution: string;
}

export interface ChoiceQuizItem {
  id: string;
  kind: "choice";
  prompt: string;
  options: string[];
  /** Index into `options` of the correct answer. */
  correctIndex: number;
  solution: string;
}

export interface TextQuizItem {
  id: string;
  kind: "text";
  prompt: string;
  solution: string;
}

export type QuizItem = NumericQuizItem | ChoiceQuizItem | TextQuizItem;

export interface QuizGroup {
  id: string;
  label: string;
  title: string;
  instruction: string;
  items: QuizItem[];
}
