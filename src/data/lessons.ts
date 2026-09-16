import type { Lang } from "@/i18n/lang";

export interface LessonTopic {
  title: string;
  items: string[];
}

export interface LessonSyllabus {
  topics: LessonTopic;
  component: LessonTopic;
  law: LessonTopic;
  circuit: LessonTopic;
}

/** Per-language overrides for the lesson index and page header. */
export interface LessonTranslation {
  title: string;
  subtitle: string;
  summary: string;
}

export interface Lesson {
  id: string;
  number: number;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  minutes: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  published: boolean;
  syllabus: LessonSyllabus;
  /** Optional translations — missing languages fall back to the English copy. */
  translations?: Partial<Record<Lang, LessonTranslation>>;
}

/** Title / subtitle / summary for the active language, with English fallback. */
export function lessonText(lesson: Lesson, lang: Lang): LessonTranslation {
  return (
    lesson.translations?.[lang] ?? {
      title: lesson.title,
      subtitle: lesson.subtitle,
      summary: lesson.summary,
    }
  );
}

export const LESSONS: Lesson[] = [
  {
    id: "01",
    number: 1,
    slug: "01",
    title: "LESSON 1: Introduction to Electronics & Ohm’s Law",
    subtitle: "Foundations of Charge, Potential, Resistance, and Series Circuit Protection",
    summary:
      "Understand the difference between electricity and electronics, master the fundamental triumvirate (V, I, R), explore resistor physics and unit conversions, derive Ohm's Law, and build a protective Battery + Resistor + LED circuit.",
    minutes: 25,
    level: "Beginner",
    published: true,
    syllabus: {
      topics: {
        title: "Today's Topics",
        items: [
          "Difference between electricity and electronics",
          "What is an electronic circuit?",
          "Voltage (V), Current (I), Resistance (R)",
        ],
      },
      component: {
        title: "Today's Component: Resistor",
        items: [
          "What is resistance?",
          "Why is a resistor used?",
          "The symbol for a resistor in a circuit",
          "Resistor values & Simple resistor examples",
          "Unit conversions: mA -> A, kΩ -> Ω, etc.",
        ],
      },
      law: {
        title: "Today's Law: Ohm’s Law",
        items: [
          "V = I × R",
          "The relationship between voltage, current, and resistance",
          "Using the formula for three different unknowns (V, I, R)",
        ],
      },
      circuit: {
        title: "Today's Circuit: Battery + Resistor + LED",
        items: [
          "Why the resistor protects the LED",
          "The result of choosing the wrong resistor",
          "The basic principle of series connection",
          "The path of current in the circuit",
        ],
      },
    },
  },
  {
    id: "02",
    number: 2,
    slug: "02",
    title: "LESSON 2: Series and Parallel Circuits",
    subtitle: "Current Paths, Component Failure Behaviour and Everyday Circuits",
    summary:
      "Identify series and parallel connections, explain how current paths differ, and build simple lamp circuits.",
    minutes: 20,
    level: "Beginner",
    published: true,
    translations: {
      tr: {
        title: "DERS 2: Seri ve Paralel Devreler",
        subtitle: "Akım Yolları, Eleman Arıza Davranışı ve Günlük Devreler",
        summary:
          "Seri ve paralel bağlantıları tanıyın, akım yollarının nasıl farklılaştığını açıklayın ve basit lamba devreleri kurun.",
      },
    },
    syllabus: {
      topics: {
        title: "Today's Topics",
        items: [
          "Series vs Parallel",
          "Current paths",
          "Component failure behavior",
          "Circuit symbols & diagrams",
          "Everyday examples",
        ],
      },
      component: {
        title: "Today's Components: Lamps, Switch & Battery",
        items: [
          "The lamp symbol (a circle with a cross)",
          "Switch and battery symbols in a diagram",
          "Why a real lamp behaves as a resistive load",
        ],
      },
      law: {
        title: "Today's Rules: Current and Voltage Sharing",
        items: [
          "Series: one current path, same current everywhere, voltage divides",
          "Parallel: multiple paths, same voltage per branch, branch currents add up",
          "Failure behaviour follows directly from the number of paths",
        ],
      },
      circuit: {
        title: "Today's Circuits: Circuit A (Series) & Circuit B (Parallel)",
        items: [
          "Battery + switch + Lamp 1 + Lamp 2 in one loop (Circuit A)",
          "Battery + switch + two separate lamp branches (Circuit B)",
          "Observing brightness and what happens when a lamp is removed",
        ],
      },
    },
  },
  {
    id: "03",
    number: 3,
    slug: "03",
    title: "LESSON 3: Voltage Dividers & Sensor Interfacing",
    subtitle: "Scaling Voltages for Analog Acquisition",
    summary:
      "The resistive voltage divider equation, input impedance, loading errors, and interfacing LDRs and thermistors to ADCs.",
    minutes: 22,
    level: "Intermediate",
    published: false,
    syllabus: {
      topics: {
        title: "Today's Topics",
        items: ["Voltage division ratio", "Loading effects", "Source vs load impedance"],
      },
      component: {
        title: "Today's Component: Potentiometers & Sensor Elements",
        items: ["Potentiometers as variable dividers", "LDRs and Thermistors"],
      },
      law: {
        title: "Today's Law: Divider Formula",
        items: ["Vout = Vin · (R2 / (R1 + R2))", "Selecting divider resistances"],
      },
      circuit: {
        title: "Today's Circuit: Daylight-Sensing Light Switch",
        items: ["LDR divider node monitoring", "Connecting divider output to a comparator"],
      },
    },
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return LESSONS.find((l) => l.id === id || l.slug === id || l.id === id.padStart(2, "0"));
}
