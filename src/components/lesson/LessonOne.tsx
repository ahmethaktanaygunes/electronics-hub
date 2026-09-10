import type { ReactNode } from "react";
import { OhmsLawSimulation } from "@/components/lesson/OhmsLawSimulation";
import { MiniTest } from "@/components/lesson/MiniTest";

function Section({
  index,
  id,
  title,
  subtitle,
  children,
}: {
  index: string;
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-b border-rule">
      <div className="mx-auto max-w-[1360px] px-5 py-10">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-rule pb-4">
          <div>
            <p className="label">
              Section {index} · {id.replace(/-/g, " ")}
            </p>
            <h2 className="mt-1 text-[24px] font-semibold tracking-tight">{title}</h2>
            {subtitle && (
              <p className="mt-2 max-w-[75ch] text-[14px] text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <span className="value text-[11px] text-signal">LESSON 01</span>
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

function Bullets({ items, marker = "▸" }: { items: ReactNode[]; marker?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2 text-[14px] text-muted-foreground">
          <span className="value shrink-0 text-signal">{marker}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="panel">
      <div className="panel-head">
        <span>{title}</span>
      </div>
      <div className="px-4 py-4">{children}</div>
    </div>
  );
}

function Formula({ children, note }: { children: ReactNode; note?: string }) {
  return (
    <div className="border border-rule bg-surface-2 px-4 py-3">
      <div className="value text-[22px] text-signal">{children}</div>
      {note && <div className="label mt-1">{note}</div>}
    </div>
  );
}

export function LessonOne() {
  return (
    <div>
      <Section
        index="01"
        id="topics"
        title="Today's Topics"
        subtitle="Before touching a single component, we separate two words that beginners often use interchangeably: electricity and electronics."
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card title="Electricity vs. electronics">
            <Bullets
              items={[
                <>
                  <strong className="text-foreground">Electricity</strong> is the general phenomenon
                  of electric charge in motion or at rest — the physical reality behind lighting,
                  motors, heating and power distribution.
                </>,
                <>
                  <strong className="text-foreground">Electronics</strong> is the engineering
                  discipline of controlling that energy with components (resistors, diodes,
                  transistors) to process information, not just deliver power.
                </>,
                <>
                  Electricity answers “how is energy transported?”, electronics answers “what
                  decision does the circuit make?”
                </>,
              ]}
            />
          </Card>

          <Card title="What is an electronic circuit?">
            <Bullets
              items={[
                "A closed loop of conductive material that gives charge carriers a continuous path to follow.",
                "It needs a source (battery or supply), a path (wires / PCB traces), and a load (the component doing the work).",
                "Break the loop anywhere and the current stops everywhere — a circuit is either complete or it is not.",
              ]}
            />
          </Card>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="panel">
            <div className="panel-head">
              <span>Voltage · V</span>
              <span className="value text-[11px]">volt (V)</span>
            </div>
            <div className="px-4 py-3 text-[13.5px] text-muted-foreground">
              The electrical pressure or potential difference between two points. It is what pushes
              charge around the loop. Measured in parallel with the component, from node to node.
            </div>
          </div>
          <div className="panel">
            <div className="panel-head">
              <span>Current · I</span>
              <span className="value text-[11px]">ampere (A)</span>
            </div>
            <div className="px-4 py-3 text-[13.5px] text-muted-foreground">
              The rate of charge flow — how many coulombs pass a point every second. Measured by
              breaking the loop and inserting the meter in series.
            </div>
          </div>
          <div className="panel">
            <div className="panel-head">
              <span>Resistance · R</span>
              <span className="value text-[11px]">ohm (Ω)</span>
            </div>
            <div className="px-4 py-3 text-[13.5px] text-muted-foreground">
              The opposition to that flow. It converts electrical energy into heat and sets how much
              current a given voltage will produce.
            </div>
          </div>
        </div>
      </Section>

      <Section
        index="02"
        id="component-resistor"
        title="Today's Component: Resistor"
        subtitle="The simplest and most used passive component — a deliberate bottleneck for charge."
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card title="What is resistance?">
            <Bullets
              items={[
                "Resistance is the property that opposes the movement of charge carriers inside a material.",
                "It is caused by collisions between drifting electrons and the atoms of the conductor lattice; each collision converts kinetic energy into heat.",
                "It is measured in ohms (Ω) — the resistance across which 1 volt drives exactly 1 ampere.",
                "Conductors (copper) have very low resistance; insulators (air, glass) have extremely high resistance; resistors sit in a controlled middle ground.",
              ]}
            />
          </Card>

          <Card title="Why is a resistor used?">
            <Bullets
              items={[
                "To limit current to a safe value for a sensitive component (the LED case in Section 04).",
                "To divide voltage — creating a smaller reference voltage from a larger supply.",
                "To set the operating point (bias) of transistors and amplifiers.",
                "To pull a signal line to a defined level (pull-up / pull-down) so it is never left floating.",
                "To convert electrical energy into heat on purpose — heaters, fuses, sensing elements.",
              ]}
            />
          </Card>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[320px_1fr]">
          <Card title="Symbol in a circuit">
            <svg
              viewBox="0 0 300 110"
              className="h-[110px] w-full"
              role="img"
              aria-label="IEC resistor symbol and ANSI zig-zag resistor symbol"
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
              <g fill="var(--signal)" fontSize="11" fontFamily="var(--font-mono)">
                <text x="244" y="38">
                  R1
                </text>
                <text x="244" y="86">
                  R2
                </text>
              </g>
            </svg>
            <p className="mt-2 text-[13px] text-muted-foreground">
              Reference designators start with <span className="value">R</span> (R1, R2, R47). A
              value is written next to it — for example <span className="value">R1 = 220 Ω</span>.
              In text schematics you will also meet <span className="value">220R</span> and{" "}
              <span className="value">4k7</span> shorthand.
            </p>
          </Card>

          <Card title="Resistor values & simple examples">
            <Bullets
              items={[
                "Values follow the E-series (E12 / E24 / E96): 10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 as leading digits multiplied by powers of ten.",
                "220 Ω — the most common LED current-limiting value for 5 V logic.",
                "1 kΩ — general-purpose pull-up and transistor base resistor value.",
                "10 kΩ — the classic pull-up on a microcontroller input pin.",
                "4.7 kΩ — conventional I²C bus pull-up.",
                "Power rating matters: a 1/4 W (250 mW) metal-film resistor will overheat if its dissipation exceeds the rating.",
              ]}
            />
          </Card>
        </div>

        <div className="mt-6 panel">
          <div className="panel-head">
            <span>Unit conversions · mA → A · kΩ → Ω</span>
            <span className="value text-[11px]">×1000 / ÷1000</span>
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
            Rule of thumb: going from a small unit to a larger one you divide by the factor (mA → A
            divides by 1000); going from a larger unit to a smaller one you multiply (A → mA
            multiplies by 1000).
          </p>
        </div>
      </Section>

      <Section
        index="03"
        id="law-ohms-law"
        title="Today's Law: Ohm’s Law"
        subtitle="The single most useful equation in electronics. It links the three quantities of Section 01 into one relationship."
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <Formula note="V in volts · I in amperes · R in ohms">V = I × R</Formula>
            <div className="grid grid-cols-3 border-t border-l border-rule">
              {[
                ["I = V / R", "current from voltage and resistance"],
                ["R = V / I", "resistance from voltage and current"],
                ["V = I × R", "voltage from current and resistance"],
              ].map(([f, d]) => (
                <div key={f} className="-mt-px -ml-px border-t border-l border-rule px-3 py-3">
                  <div className="value text-[15px] text-signal">{f}</div>
                  <div className="mt-1 text-[12px] text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
            <Card title="The relationship">
              <Bullets
                items={[
                  "V and I are directly proportional: at constant R, doubling the voltage doubles the current.",
                  "I and R are inversely proportional: at constant V, doubling the resistance halves the current.",
                  "At constant I, voltage and resistance rise together — more resistance needs more pressure to keep the same flow.",
                  "These are exactly the sliders you will move in the simulation below.",
                ]}
              />
            </Card>
          </div>

          <div className="space-y-4">
            <Card title="Three solved unknowns">
              <div className="space-y-3">
                {[
                  [
                    "Find the current",
                    "A 12 V supply is across a 470 Ω resistor.",
                    "I = V / R = 12 ÷ 470 = 0.02553 A = 25.53 mA",
                  ],
                  [
                    "Find the resistance",
                    "6 V appears across a resistor while 3 mA flows.",
                    "R = V / I = 6 ÷ 0.003 = 2000 Ω = 2 kΩ",
                  ],
                  [
                    "Find the voltage",
                    "0.25 A flows through 100 Ω.",
                    "V = I × R = 0.25 × 100 = 25 V",
                  ],
                ].map(([t, given, work]) => (
                  <div key={t} className="border-l-2 border-l-signal pl-3">
                    <div className="label">{t}</div>
                    <p className="text-[13.5px] text-muted-foreground">{given}</p>
                    <p className="value mt-1 text-[13px] text-trace">{work}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card title="Bench check">
              <p className="text-[13.5px] text-muted-foreground">
                Always verified the same way on the bench: measure V with the voltmeter in parallel,
                measure I by breaking the loop and inserting the ammeter in series, then confirm the
                arithmetic. If the measured current is far from the predicted value, check the
                resistor tolerance and the actual supply voltage first.
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2 border-b border-rule pb-2">
            <h3 className="text-[18px] font-semibold tracking-tight">
              Interactive Ohm’s Law Circuit Simulation
            </h3>
            <span className="label">Live widget · electron flow</span>
          </div>
          <OhmsLawSimulation />
          <p className="mt-3 text-[13px] text-muted-foreground">
            Move the voltage and resistance sliders. The equation readout updates in real time, and
            the green electron dots in the wire loop change speed and density according to the
            resulting current I — a high current produces a fast, dense stream; a small current
            produces a slow, sparse one. The amber constriction in the top wire is the resistor: it
            is the bottleneck that determines how much charge can pass per second.
          </p>
        </div>
      </Section>

      <Section
        index="04"
        id="circuit-battery-resistor-led"
        title="Today's Circuit: Battery + Resistor + LED"
        subtitle="A light-emitting diode is a current device, not a voltage device. The resistor is what translates a fixed supply voltage into a safe current."
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(320px,420px)_1fr]">
          <Card title="Schematic · series LED">
            <svg
              viewBox="0 0 340 220"
              className="h-auto w-full"
              role="img"
              aria-label="Battery, resistor and LED in series"
            >
              <g fill="none" stroke="var(--foreground)" strokeWidth="1.6">
                {/* wire loop */}
                <path d="M40 40 H150" />
                <rect x="150" y="28" width="60" height="24" />
                <path d="M210 40 H300 V150" />
                <path d="M300 150 H215" />
                {/* LED */}
                <path d="M215 150 l-16 -18 v36 z" fill="var(--foreground)" />
                <path d="M182 132 H150" />
                <path d="M182 168 H150" />
                {/* return to battery */}
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
              <g fill="var(--trace)" fontSize="10" fontFamily="var(--font-mono)">
                <text x="60" y="60">
                  I →
                </text>
              </g>
            </svg>
          </Card>

          <div className="space-y-4">
            <Card title="Why the resistor protects the LED">
              <Bullets
                items={[
                  "An LED has an almost fixed forward voltage (Vf ≈ 1.8 V for red, ≈ 3.2 V for blue/white). Below that value almost no current flows.",
                  "Once the supply exceeds Vf, the extra voltage must be dropped somewhere — that is the resistor's job.",
                  "Without a resistor the current rises until something fails: the PN junction is destroyed in milliseconds (thermal runaway).",
                  "Design equation: R = (VS − Vf) / I_LED.",
                ]}
              />
              <div className="mt-3 border-l-2 border-l-signal pl-3">
                <div className="label">Worked design · 5 V supply, red LED</div>
                <p className="value mt-1 text-[13px] text-trace">
                  R = (5 − 2) V / 0.010 A = 300 Ω → nearest E12 value 330 Ω
                </p>
                <p className="value mt-1 text-[12px] text-muted-foreground">
                  P = I²R = 0.01² × 330 = 33 mW → a 1/4 W resistor is more than adequate
                </p>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card title="Wrong resistor: too small">
            <Bullets
              items={[
                "Current exceeds the LED rating (often by an order of magnitude).",
                "Junction temperature climbs → light output droops → bond wires or the die fail.",
                "Result: a dead LED, sometimes a shorted one that is suddenly a 0 Ω path across the supply.",
              ]}
              marker="!"
            />
          </Card>
          <Card title="Wrong resistor: too large">
            <Bullets
              items={[
                "Current is far below the design value.",
                "The LED still works but is visibly dim or barely glowing.",
                "Common symptom when a 10 kΩ resistor is accidentally used instead of 330 Ω.",
              ]}
              marker="!"
            />
          </Card>
          <Card title="Series connection principle">
            <Bullets
              items={[
                "Components in series share the same current — there is only one path, so every coulomb that leaves the battery passes through the resistor and then the LED.",
                "The voltage is divided between them: VS = V_R + V_LED.",
                "Adding a series component always increases the total resistance and therefore reduces the current.",
              ]}
              marker="▸"
            />
          </Card>
        </div>

        <div className="mt-6 panel">
          <div className="panel-head">
            <span>The path of current in the circuit</span>
            <span className="value text-[11px]">closed loop · series</span>
          </div>
          <ol className="divide-y divide-rule">
            {[
              "Current leaves the positive (+) terminal of the battery.",
              "It travels along the wire to the resistor; the resistor drops V_R = I × R volts across itself.",
              "It continues through the LED, which drops its forward voltage V_LED ≈ 2 V.",
              "It returns to the negative (−) terminal of the battery, closing the loop.",
              "Because the loop is series, the same current I flows through every element — I is set by VS and the total series resistance.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 px-4 py-3">
                <span className="value w-6 shrink-0 text-[13px] text-signal">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="text-[13.5px] text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section
        index="05"
        id="mini-test"
        title="Mini Test"
        subtitle="Ten unit-conversion exercises followed by eight circuit and conceptual questions. Submit numerical answers for automatic validation, or reveal the worked solution."
      >
        <MiniTest />
        <div className="mt-6 panel">
          <div className="panel-head">
            <span>Summary · what you should be able to do</span>
            <span className="value text-[11px]">LESSON 01</span>
          </div>
          <div className="grid grid-cols-1 divide-y divide-rule md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="px-4 py-3">
              <Bullets
                items={[
                  "Explain the difference between electricity and electronics.",
                  "Name the three fundamental quantities and their SI units.",
                  "Describe what resistance is and give three reasons to use a resistor.",
                  "Convert between mA/A, kΩ/Ω, MΩ/Ω and mV/V without a calculator.",
                ]}
              />
            </div>
            <div className="px-4 py-3">
              <Bullets
                items={[
                  "State Ohm’s Law and solve it for V, I and R.",
                  "Predict how current changes when V or R changes.",
                  "Size a series resistor for an LED from its forward voltage and target current.",
                  "Describe the single current path in a series circuit.",
                ]}
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
