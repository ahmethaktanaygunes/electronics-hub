import type { ReactNode } from "react";
import { CIRCUIT_QUESTIONS, UNIT_CONVERSIONS, type QuizItem } from "@/data/lesson1Quiz";
import { OhmsLawSimulation } from "@/components/lesson/OhmsLawSimulation";
import { HElectronicsLogo } from "@/components/HElectronicsLogo";
import { Bullets, Formula, InfoCard, StatTile, Worked } from "@/components/lesson/lessonUi";

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

const QUIZ_BY_ID: Record<string, QuizItem> = Object.fromEntries(
  [...UNIT_CONVERSIONS.items, ...CIRCUIT_QUESTIONS.items].map((item) => [item.id, item]),
);

function q(id: string): QuizItem {
  const item = QUIZ_BY_ID[id];
  if (!item) throw new Error(`Unknown quiz item id: ${id}`);
  return item;
}

/** Builds the gated question steps belonging to one quiz group. */
function quizSteps(prefix: string, section: string, title: string, ids: string[]): LessonStep[] {
  return ids.map((id) => ({
    id: `${prefix}-${id}`,
    section,
    title,
    quiz: q(id),
  }));
}

export const LESSON_ONE_STEPS: LessonStep[] = [
  {
    id: "welcome",
    section: "Foundations",
    title: "Introduction to Electronics & Ohm’s Law",
    subtitle: "Lesson 1 · Beginner · 25 min · card-by-card",
    content: (
      <div className="space-y-5">
        <div className="flex items-center gap-3">
          <HElectronicsLogo size={44} title="" />
          <div>
            <p className="label">Electronics with Haktan</p>
            <p className="value text-[15px] text-glow">Engineering Workbench · Module 01</p>
          </div>
        </div>

        <p className="text-[14px] leading-relaxed text-muted-foreground">
          This lesson runs card by card instead of as one long page. Read one idea, then prove it
          with one question. A question card locks the flow until it is solved — a correct answer
          opens the next step.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="What you will learn" note="4 blocks">
            <Bullets
              items={[
                "The difference between electricity and electronics",
                "What an electronic circuit really is",
                "Voltage (V), current (I) and resistance (R)",
                "The resistor: physics, symbol, values and unit conversions",
                "Ohm’s Law — solved for all three unknowns",
                "A battery + resistor + LED series circuit",
              ]}
            />
          </InfoCard>
          <InfoCard title="How the flow works" note="step player">
            <Bullets
              items={[
                "One concept or one question per card",
                "The progress bar and step counter show your position",
                "Question cards unlock only when answered correctly",
                "“Show solution” is available after one attempt — you are never stuck",
                "Use ← / → on the keyboard, or the Back / Continue buttons",
              ]}
            />
          </InfoCard>
        </div>
      </div>
    ),
  },

  {
    id: "electricity",
    section: "Foundations",
    title: "Electricity vs. Electronics",
    subtitle: "Two words beginners use interchangeably — they are not the same thing.",
    content: (
      <div className="space-y-4">
        <Bullets
          items={[
            <>
              <strong className="text-foreground">Electricity</strong> is the general physical
              phenomenon of electric charge in motion or at rest — the reality behind lighting,
              motors, heating and power distribution.
            </>,
            <>
              <strong className="text-foreground">Electronics</strong> is the engineering discipline
              of <em>controlling</em> that energy with components — resistors, diodes, transistors —
              so the circuit can process information, not merely transport power.
            </>,
            <>
              Electricity answers “how is energy transported?”; electronics answers “what decision
              does the circuit make?”
            </>,
          ]}
        />
        <InfoCard title="One-sentence summary" note="keep this">
          <p className="text-[14px] leading-relaxed text-muted-foreground">
            Electricity is the raw phenomenon; electronics is the designed behaviour we impose on it
            with components.
          </p>
        </InfoCard>
      </div>
    ),
  },

  {
    id: "circuit",
    section: "Foundations",
    title: "What is an Electronic Circuit?",
    subtitle: "A circuit is either complete or it is not — there is no middle state.",
    content: (
      <div className="space-y-4">
        <Bullets
          items={[
            "A closed loop of conductive material that gives charge carriers a continuous path to follow.",
            "It needs three things: a source (battery or supply), a path (wires or PCB traces) and a load (the component doing the work).",
            "Break the loop anywhere and the current stops everywhere.",
            "Every circuit in this course can be built on a breadboard and probed — that is the point.",
          ]}
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatTile label="Source" unit="energy in">
            The battery pushes charge around the loop and fixes the available voltage.
          </StatTile>
          <StatTile label="Path" unit="conductor">
            Wires and PCB traces carry the current between components.
          </StatTile>
          <StatTile label="Load" unit="work done">
            The component that converts electrical energy into light, heat, motion or signal.
          </StatTile>
        </div>
      </div>
    ),
  },

  {
    id: "quantities",
    section: "Foundations",
    title: "Voltage (V), Current (I) & Resistance (R)",
    subtitle: "Three quantities describe everything that happens inside a circuit.",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatTile label="Voltage · V" unit="volt (V)">
            The electrical pressure, or potential difference, between two points. It is what pushes
            charge around the loop. Measured{" "}
            <strong className="text-foreground">in parallel</strong> with the component, node to
            node.
          </StatTile>
          <StatTile label="Current · I" unit="ampere (A)">
            The rate of charge flow — how many coulombs pass a point each second. Measured by
            breaking the loop and inserting the meter{" "}
            <strong className="text-foreground">in series</strong>.
          </StatTile>
          <StatTile label="Resistance · R" unit="ohm (Ω)">
            The opposition to that flow. It turns electrical energy into heat and sets how much
            current a given voltage will actually produce.
          </StatTile>
        </div>
        <InfoCard title="Memory hook" note="from the bench">
          <p className="text-[14px] leading-relaxed text-muted-foreground">
            Think of voltage as pressure, current as flow rate and resistance as the narrow pipe
            that limits the flow. You will reuse this picture in the conceptual questions at the end
            of the lesson.
          </p>
        </InfoCard>
      </div>
    ),
  },

  {
    id: "resistance",
    section: "The Resistor",
    title: "What is Resistance?",
    subtitle: "The property that opposes the movement of charge — measured in ohms (Ω).",
    content: (
      <div className="space-y-4">
        <Bullets
          items={[
            "Resistance is caused by collisions between drifting electrons and the atoms of the conductor lattice; each collision converts kinetic energy into heat.",
            "It is measured in ohms (Ω) — the resistance across which 1 volt drives exactly 1 ampere.",
            "Conductors such as copper have very low resistance; insulators such as air and glass have extremely high resistance; resistors sit in a controlled middle ground.",
            "A real resistor is specified by two numbers: the resistance value and the power it can dissipate.",
          ]}
        />
        <InfoCard title="Physical picture" note="why heat appears">
          <p className="text-[14px] leading-relaxed text-muted-foreground">
            Charge carriers do not travel through a resistor freely — they are constantly scattered
            by the material. The energy lost in those collisions leaves the resistor as heat, which
            is exactly why power rating matters.
          </p>
        </InfoCard>
      </div>
    ),
  },

  {
    id: "resistor-use",
    section: "The Resistor",
    title: "Why Do We Use Resistors?",
    subtitle: "The simplest and most used passive component — a deliberate bottleneck for charge.",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(280px,320px)_1fr]">
          <InfoCard title="Symbol in a circuit" note="IEC 60617">
            <svg
              viewBox="0 0 300 110"
              className="h-[110px] w-full"
              role="img"
              aria-label="IEC rectangle resistor symbol and ANSI zig-zag resistor symbol"
            >
              <g fill="none" stroke="var(--foreground)" strokeWidth="1.5">
                <path d="M10 34 H100" />
                <rect x="100" y="22" width="100" height="24" />
                <path d="M200 34 H290" />
                <path d="M10 82 H100" />
                <path d="M100 82 l10 -12 l10 24 l10 -24 l10 24 l10 -24 l10 24 l10 -24 l10 24 l10 -12" />
                <path d="M200 82 H290" />
              </g>
              <g fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)">
                <text x="100" y="16">
                  IEC 60617 · rectangle
                </text>
                <text x="100" y="106">
                  ANSI · zig-zag
                </text>
              </g>
              <g fill="var(--glow)" fontSize="11" fontFamily="var(--font-mono)">
                <text x="244" y="38">
                  R1
                </text>
                <text x="244" y="86">
                  R2
                </text>
              </g>
            </svg>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
              Reference designators start with <span className="value">R</span> (R1, R2, R47) and
              the value is written next to it, for example <span className="value">R1 = 220 Ω</span>
              . In text schematics you will also meet <span className="value">220R</span> and{" "}
              <span className="value">4k7</span> shorthand.
            </p>
          </InfoCard>

          <InfoCard title="Five reasons a resistor exists" note="applications">
            <Bullets
              items={[
                "To limit current to a safe value for a sensitive component — the LED case later in this lesson.",
                "To divide voltage, creating a smaller reference voltage from a larger supply.",
                "To set the operating point (bias) of transistors and amplifiers.",
                "To pull a signal line to a defined level (pull-up / pull-down) so it is never left floating.",
                "To convert electrical energy into heat on purpose — heaters, fuses and sensing elements.",
              ]}
            />
          </InfoCard>
        </div>
      </div>
    ),
  },

  {
    id: "units",
    section: "The Resistor",
    title: "Engineering Units & Conversions",
    subtitle:
      "Milli, kilo and mega prefixes are used constantly in electronics — convert them fluently.",
    content: (
      <div className="space-y-4">
        <div className="panel">
          <div className="panel-head">
            <span>Prefix reference</span>
            <span className="value text-[11px] text-glow">×1000 / ÷1000</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px]">
              <thead>
                <tr className="border-b border-rule">
                  {["Prefix", "Symbol", "Factor", "Example", "In base unit"].map((h) => (
                    <th key={h} className="label px-4 py-2 font-normal">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="value text-[13px]">
                {[
                  ["milliampere", "mA", "10⁻³", "750 mA", "0.75 A"],
                  ["microampere", "µA", "10⁻⁶", "250 µA", "0.00025 A"],
                  ["kilo-ohm", "kΩ", "10³", "4.7 kΩ", "4700 Ω"],
                  ["mega-ohm", "MΩ", "10⁶", "2.2 MΩ", "2 200 000 Ω"],
                  ["millivolt", "mV", "10⁻³", "3300 mV", "3.3 V"],
                ].map((row) => (
                  <tr key={row[1]} className="border-b border-rule last:border-b-0">
                    {row.map((cell, i) => (
                      <td key={i} className="px-4 py-2 text-muted-foreground">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-rule px-4 py-2 text-[13px] text-muted-foreground">
            Going from a small unit to a larger one you divide by the factor (mA → A divides by
            1000); going from a larger unit to a smaller one you multiply (A → mA multiplies by
            1000).
          </p>
        </div>
        <InfoCard title="Next: 10 conversion drills" note="gated">
          <p className="text-[14px] leading-relaxed text-muted-foreground">
            Each of the next ten cards is a single conversion exercise. Enter the value in the unit
            that is requested, press <span className="value">Check</span>, and the correct answer
            unlocks the following card.
          </p>
        </InfoCard>
      </div>
    ),
  },

  ...quizSteps("conv", "Practice · Units", "Unit Conversion Drill", [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
  ]),

  {
    id: "ohms-law",
    section: "Ohm’s Law",
    title: "The Law: V = I × R",
    subtitle: "The single most useful equation in electronics — it links all three quantities.",
    content: (
      <div className="space-y-4">
        <Formula note="V in volts · I in amperes · R in ohms">V = I × R</Formula>

        <div className="grid grid-cols-1 border-t border-l border-rule sm:grid-cols-3">
          {[
            ["I = V / R", "current from voltage and resistance"],
            ["R = V / I", "resistance from voltage and current"],
            ["V = I × R", "voltage from current and resistance"],
          ].map(([f, d]) => (
            <div key={f} className="-mt-px -ml-px border-t border-l border-rule px-3 py-3">
              <div className="value text-[15px] text-glow">{f}</div>
              <div className="mt-1 text-[12px] text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>

        <InfoCard title="The relationship" note="three proportionalities">
          <Bullets
            items={[
              "V and I are directly proportional: at constant R, doubling the voltage doubles the current.",
              "I and R are inversely proportional: at constant V, doubling the resistance halves the current.",
              "At constant I, voltage and resistance rise together — more resistance needs more pressure to keep the same flow.",
            ]}
          />
        </InfoCard>
      </div>
    ),
  },

  {
    id: "ohms-solved",
    section: "Ohm’s Law",
    title: "Using the Formula for Three Unknowns",
    subtitle: "Same law, rearranged three ways — always check what is given and what is asked.",
    content: (
      <div className="space-y-4">
        <Worked
          title="Find the current"
          given="A 12 V supply is across a 470 Ω resistor."
          work="I = V / R = 12 ÷ 470 = 0.02553 A = 25.53 mA"
        />
        <Worked
          title="Find the resistance"
          given="6 V appears across a resistor while 3 mA flows through it."
          work="R = V / I = 6 ÷ 0.003 = 2000 Ω = 2 kΩ"
        />
        <Worked
          title="Find the voltage"
          given="A current of 0.25 A flows through a 100 Ω resistor."
          work="V = I × R = 0.25 × 100 = 25 V"
        />
        <InfoCard title="Bench check" note="verification">
          <p className="text-[14px] leading-relaxed text-muted-foreground">
            Measure V with the voltmeter in parallel, measure I by breaking the loop and inserting
            the ammeter in series, then confirm the arithmetic. If the measured current is far from
            the predicted value, check the resistor tolerance and the actual supply voltage first.
          </p>
        </InfoCard>
      </div>
    ),
  },

  {
    id: "simulation",
    section: "Ohm’s Law",
    title: "Interactive Simulation: I = V / R",
    subtitle: "Move the voltage and resistance sliders and watch the electron flow change.",
    content: (
      <div className="space-y-4">
        <OhmsLawSimulation />
        <InfoCard title="What to look for" note="the visible link">
          <Bullets
            items={[
              "The equation readout updates in real time as you move either slider.",
              "The green electron dots in the wire loop change speed and density according to the resulting current I — a high current produces a fast, dense stream; a small current produces a slow, sparse one.",
              "The amber constriction in the top wire is the resistor: it is the bottleneck that determines how much charge can pass per second.",
              "Try the preset 9 V / 470 Ω, then increase the resistance to 1 kΩ: voltage is unchanged, so the current must fall.",
            ]}
          />
        </InfoCard>
      </div>
    ),
  },

  {
    id: "led-circuit",
    section: "LED Circuit",
    title: "Today's Circuit: Battery + Resistor + LED",
    subtitle:
      "An LED is a current device, not a voltage device. The resistor converts a fixed supply into a safe current.",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(280px,380px)_1fr]">
          <InfoCard title="Schematic · series LED" note="9 V">
            <svg
              viewBox="0 0 340 220"
              className="h-auto w-full"
              role="img"
              aria-label="Battery, resistor and LED connected in series"
            >
              <g fill="none" stroke="var(--foreground)" strokeWidth="1.6">
                <path d="M40 40 H150" />
                <rect x="150" y="28" width="60" height="24" />
                <path d="M210 40 H300 V150" />
                <path d="M300 150 H215" />
                <path d="M215 150 l-16 -18 v36 z" fill="var(--foreground)" />
                <path d="M182 132 H150" />
                <path d="M182 168 H150" />
                <path d="M150 150 V188" />
                <path d="M130 132 V168" />
                <path d="M130 150 H40 V40" />
              </g>
              <g stroke="var(--foreground)" strokeWidth="2" fill="none">
                <path d="M120 176 V204" />
                <path d="M106 184 V196" />
                <path d="M92 176 V204" />
                <path d="M78 184 V196" />
              </g>
              <g fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)">
                <text x="152" y="22">
                  R1 = 220 Ω
                </text>
                <text x="222" y="146">
                  LED · Vf ≈ 2 V
                </text>
                <text x="46" y="196">
                  VS = 9 V
                </text>
              </g>
              <g fill="var(--glow)" fontSize="10" fontFamily="var(--font-mono)">
                <text x="60" y="60">
                  I →
                </text>
              </g>
            </svg>
          </InfoCard>

          <InfoCard title="Why the resistor protects the LED" note="design rule">
            <Bullets
              items={[
                "An LED has an almost fixed forward voltage (Vf ≈ 1.8 V for red, ≈ 3.2 V for blue/white). Below that value almost no current flows.",
                "Once the supply exceeds Vf, the extra voltage must be dropped somewhere — that is the resistor's job.",
                "Without a resistor the current rises until something fails: the PN junction is destroyed in milliseconds by thermal runaway.",
                "Design equation: R = (VS − Vf) / I_LED.",
              ]}
            />
          </InfoCard>
        </div>

        <InfoCard title="Worked design · 5 V supply, red LED" note="check the numbers">
          <Worked
            title="Step 1 — find the resistor"
            given="VS = 5 V, Vf = 2 V, target current = 10 mA"
            work="R = (5 − 2) V / 0.010 A = 300 Ω → nearest E12 value 330 Ω"
          />
          <div className="mt-3">
            <Worked
              title="Step 2 — check the dissipation"
              given="I = 10 mA through 330 Ω"
              work="P = I²R = 0.01² × 330 = 33 mW → a 1/4 W resistor is more than adequate"
            />
          </div>
        </InfoCard>
      </div>
    ),
  },

  {
    id: "led-wrong",
    section: "LED Circuit",
    title: "The Result of Choosing the Wrong Resistor",
    subtitle: "Both directions of error have a signature — learn to recognise them.",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard title="Too small" note="overdrive">
            <Bullets
              marker="!"
              items={[
                "Current exceeds the LED rating, often by an order of magnitude.",
                "Junction temperature climbs, light output droops, then the bond wires or the die fail.",
                "Result: a dead LED — sometimes a shorted one that becomes a 0 Ω path across the supply.",
              ]}
            />
          </InfoCard>
          <InfoCard title="Too large" note="underdrive">
            <Bullets
              marker="!"
              items={[
                "Current sits far below the design value.",
                "The LED still works but is visibly dim or barely glowing.",
                "Common symptom when a 10 kΩ resistor is used by mistake instead of 330 Ω.",
              ]}
            />
          </InfoCard>
        </div>
        <InfoCard title="Rule of thumb" note="verify every time">
          <p className="text-[14px] leading-relaxed text-muted-foreground">
            Size the resistor for the current the LED actually wants, then confirm the resistor's
            power rating is at least twice the calculated dissipation. A resistor that survives on
            paper still runs hot inside a closed enclosure.
          </p>
        </InfoCard>
      </div>
    ),
  },

  {
    id: "led-series",
    section: "LED Circuit",
    title: "Series Connection & the Path of Current",
    subtitle: "Components in series share one current — there is only one path to follow.",
    content: (
      <div className="space-y-4">
        <InfoCard title="Series principles" note="one path">
          <Bullets
            items={[
              "Components in series share the same current: every coulomb that leaves the battery passes through the resistor and then the LED.",
              "The voltage is divided between them: VS = V_R + V_LED.",
              "Adding a series component always increases the total resistance and therefore reduces the current.",
            ]}
          />
        </InfoCard>

        <div className="panel">
          <div className="panel-head">
            <span>The path of current, step by step</span>
            <span className="value text-[11px] text-glow">closed loop</span>
          </div>
          <ol className="divide-y divide-rule">
            {[
              "Current leaves the positive (+) terminal of the battery.",
              "It travels along the wire to the resistor, which drops V_R = I × R volts across itself.",
              "It continues through the LED, which drops its forward voltage V_LED ≈ 2 V.",
              "It returns to the negative (−) terminal of the battery, closing the loop.",
              "Because the loop is series, the same current I flows through every element — I is set by VS and the total series resistance.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 px-4 py-3">
                <span className="value w-6 shrink-0 text-[13px] text-glow">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-[13.5px] leading-relaxed text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    ),
  },

  ...quizSteps("q", "Mini Test", "Circuit & Conceptual Question", [
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "B6",
    "B7",
    "B8",
  ]),
];
