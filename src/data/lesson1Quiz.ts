import type { NumericQuizItem, QuizGroup, TextQuizItem } from "@/data/quizTypes";

export type {
  ChoiceQuizItem,
  NumericQuizItem,
  QuizGroup,
  QuizItem,
  TextQuizItem,
} from "@/data/quizTypes";

const n = (
  id: string,
  prompt: string,
  unit: string,
  answer: number,
  tolerance: number,
  solution: string,
): NumericQuizItem => ({ id, kind: "numeric", prompt, unit, answer, tolerance, solution });

const t = (id: string, prompt: string, solution: string): TextQuizItem => ({
  id,
  kind: "text",
  prompt,
  solution,
});

export const UNIT_CONVERSIONS: QuizGroup = {
  id: "A",
  label: "Part A",
  title: "Unit Conversion Exercises",
  instruction:
    "Enter the converted value and submit. Accepted answers use engineering-prefix notation (mA, kΩ, MΩ).",
  items: [
    n("A1", "Convert 2.5 A to mA.", "mA", 2500, 0.001, "1 A = 1000 mA, so 2.5 A × 1000 = 2500 mA."),
    n("A2", "Convert 750 mA to A.", "A", 0.75, 0.001, "1 mA = 0.001 A, so 750 mA ÷ 1000 = 0.75 A."),
    n("A3", "Convert 0.035 A to mA.", "mA", 35, 0.001, "0.035 A × 1000 = 35 mA."),
    n("A4", "Convert 4.7 kΩ to Ω.", "Ω", 4700, 0.001, "1 kΩ = 1000 Ω, so 4.7 kΩ × 1000 = 4700 Ω."),
    n("A5", "Convert 6800 Ω to kΩ.", "kΩ", 6.8, 0.001, "6800 Ω ÷ 1000 = 6.8 kΩ."),
    n(
      "A6",
      "Convert 2.2 MΩ to Ω.",
      "Ω",
      2_200_000,
      0.001,
      "1 MΩ = 1 000 000 Ω, so 2.2 MΩ × 1 000 000 = 2 200 000 Ω.",
    ),
    n("A7", "Convert 0.0047 A to mA.", "mA", 4.7, 0.001, "0.0047 A × 1000 = 4.7 mA."),
    n("A8", "Convert 3300 mV to V.", "V", 3.3, 0.001, "1 mV = 0.001 V, so 3300 mV ÷ 1000 = 3.3 V."),
    n("A9", "Convert 0.75 kΩ to Ω.", "Ω", 750, 0.001, "0.75 kΩ × 1000 = 750 Ω."),
    n(
      "A10",
      "Which is larger: 470 Ω or 0.68 kΩ? Enter the value of the LARGER resistance in Ω.",
      "Ω",
      680,
      0.001,
      "0.68 kΩ = 680 Ω, and 680 Ω > 470 Ω. The larger value is 680 Ω.",
    ),
  ],
};

export const CIRCUIT_QUESTIONS: QuizGroup = {
  id: "B",
  label: "Part B",
  title: "Circuit & Conceptual Questions",
  instruction:
    "Solve each circuit with Ohm’s Law (V = I × R). Read the unit requested in brackets — it tells you what to enter.",
  items: [
    n(
      "B1",
      "Q1 — A 9 V battery is connected to a 1 kΩ resistor. What is the current? (answer in mA)",
      "mA",
      9,
      0.01,
      "I = V / R = 9 V ÷ 1000 Ω = 0.009 A = 9 mA.",
    ),
    n(
      "B2",
      "Q2 — An LED needs about 2 V and should run at 10 mA. If the supply is 5 V, what series resistor is required? (answer in Ω)",
      "Ω",
      300,
      0.02,
      "The resistor drops the difference: V_R = 5 V − 2 V = 3 V. R = V_R / I = 3 V ÷ 0.01 A = 300 Ω.",
    ),
    t(
      "B3",
      "Q3 — Conceptual: give your own real-life analogy for voltage, current, and resistance.",
      "Any consistent analogy is valid, for example a water pipe: voltage is the water pressure pushing the flow, current is the volume of water flowing per second, and resistance is a narrow section of pipe that restricts the flow. Electrical version: voltage is the potential difference, current is the charge passing per second, resistance opposes that charge movement.",
    ),
    t(
      "B4",
      "Q4 — Conceptual: if the resistance increases while the voltage stays constant, what happens to the current?",
      "From I = V / R, current and resistance are inversely proportional. With V constant, increasing R decreases I. Double the resistance and the current halves.",
    ),
    n(
      "B5",
      "Q5 — A 12 V supply is connected across a 470 Ω resistor. What current flows? (answer in mA, 2 decimals)",
      "mA",
      25.53,
      0.02,
      "I = V / R = 12 V ÷ 470 Ω = 0.02553 A = 25.53 mA.",
    ),
    n(
      "B6",
      "Q6 — A current of 0.25 A flows through a 100 Ω resistor. What is the voltage across it? (answer in V)",
      "V",
      25,
      0.01,
      "V = I × R = 0.25 A × 100 Ω = 25 V.",
    ),
    n(
      "B7",
      "Q7 — A 6 V drop appears across a resistor while 3 mA flows through it. What is its resistance? (answer in Ω)",
      "Ω",
      2000,
      0.02,
      "R = V / I = 6 V ÷ 0.003 A = 2000 Ω (2 kΩ).",
    ),
    n(
      "B8",
      "Q8 — A resistor has 5 V across it and 20 mA through it. How much power does it dissipate? (answer in mW)",
      "mW",
      100,
      0.02,
      "P = V × I = 5 V × 0.02 A = 0.1 W = 100 mW. A 1/8 W (125 mW) resistor is the minimum safe standard rating.",
    ),
  ],
};

export const LESSON_ONE_QUIZ: QuizGroup[] = [UNIT_CONVERSIONS, CIRCUIT_QUESTIONS];
