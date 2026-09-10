import { useEffect, useMemo, useRef, useState } from "react";

/* ------------------------------------------------------------------
 * Loop geometry: a rectangular current path in a 400 x 300 viewBox.
 * Electron dots travel along this path; the resistor constricts the
 * tube on the top segment (x 165..235).
 * ------------------------------------------------------------------ */
const X1 = 60;
const X2 = 340;
const Y1 = 60;
const Y2 = 240;

type Pt = { x: number; y: number };

const SEGS: { len: number; from: Pt; to: Pt }[] = [
  { len: X2 - X1, from: { x: X1, y: Y1 }, to: { x: X2, y: Y1 } },
  { len: Y2 - Y1, from: { x: X2, y: Y1 }, to: { x: X2, y: Y2 } },
  { len: X2 - X1, from: { x: X2, y: Y2 }, to: { x: X1, y: Y2 } },
  { len: Y2 - Y1, from: { x: X1, y: Y2 }, to: { x: X1, y: Y1 } },
];

const TOTAL = SEGS.reduce((acc, s) => acc + s.len, 0);

function pointAt(raw: number): Pt {
  let d = ((raw % TOTAL) + TOTAL) % TOTAL;
  for (const seg of SEGS) {
    if (d <= seg.len) {
      const t = d / seg.len;
      return {
        x: seg.from.x + (seg.to.x - seg.from.x) * t,
        y: seg.from.y + (seg.to.y - seg.from.y) * t,
      };
    }
    d -= seg.len;
  }
  return SEGS[0]!.from;
}

const MAX_FLOW_REFERENCE = 0.1; // 100 mA => visually "full flow"

export function OhmsLawSimulation() {
  const [voltage, setVoltage] = useState(9);
  const [resistance, setResistance] = useState(220);
  const [phase, setPhase] = useState(0);

  const current = voltage / resistance; // Amperes
  const normalized = Math.max(0, Math.min(current / MAX_FLOW_REFERENCE, 1));

  const speed = 30 + 320 * normalized; // px / second
  const dotCount = 8 + Math.round(28 * normalized);

  const speedRef = useRef(speed);
  speedRef.current = speed;

  const phaseRef = useRef(0);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const step = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      phaseRef.current += speedRef.current * dt;
      setPhase(phaseRef.current);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const dots = useMemo(() => {
    const spacing = TOTAL / dotCount;
    return Array.from({ length: dotCount }, (_, i) => pointAt(phase + i * spacing));
  }, [phase, dotCount]);

  const currentMa = current * 1000;
  const powerMw = voltage * current * 1000;

  return (
    <div className="panel">
      <div className="panel-head">
        <span>Sim 01 · Ohm&apos;s law circuit</span>
        <span className={normalized > 0.02 ? "text-trace" : "text-muted-foreground"}>
          {normalized > 0.02 ? "electron flow active" : "no measurable flow"}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px]">
        <div className="graticule border-rule bg-background p-4 lg:border-r">
          <CircuitCanvas dots={dots} voltage={voltage} resistance={resistance} />
        </div>

        <div className="divide-y divide-rule">
          <Slider
            label="Source voltage (Vₛ)"
            unit="V"
            value={voltage}
            min={1}
            max={24}
            step={0.5}
            onChange={setVoltage}
          />
          <Slider
            label="Resistance (R)"
            unit="Ω"
            value={resistance}
            min={10}
            max={1000}
            step={10}
            onChange={setResistance}
          />

          <div className="px-3 py-3">
            <span className="label">Live equation · I = V / R</span>
            <div className="value mt-1 text-[13px] text-muted-foreground">
              I = {voltage.toFixed(1)} V / {resistance} Ω
            </div>
            <div className="value mt-2 text-[26px] text-signal">
              {current.toFixed(4)}
              <span className="ml-1 text-[13px] text-muted-foreground">A</span>
            </div>
            <div className="value mt-1 text-[12px] text-muted-foreground">
              {currentMa.toFixed(2)} mA · P {powerMw.toFixed(1)} mW
            </div>
            <div className="mt-3 h-1 w-full bg-surface-2">
              <div
                className="h-full bg-trace transition-[width] duration-150"
                style={{ width: `${(normalized * 100).toFixed(1)}%` }}
              />
            </div>
            <div className="label mt-1">Relative electron flow</div>
          </div>
          <div className="px-3 py-3">
            <span className="label">Presets</span>
            <div className="mt-2 flex flex-wrap gap-1">
              {[
                { v: 9, r: 470, t: "9V / 470Ω" },
                { v: 5, r: 300, t: "5V / 300Ω" },
                { v: 12, r: 1000, t: "12V / 1kΩ" },
                { v: 24, r: 100, t: "24V / 100Ω" },
              ].map((p) => (
                <button
                  key={p.t}
                  type="button"
                  className="btn"
                  onClick={() => {
                    setVoltage(p.v);
                    setResistance(p.r);
                  }}
                >
                  {p.t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CircuitCanvas({
  dots,
  voltage,
  resistance,
}: {
  dots: Pt[];
  voltage: number;
  resistance: number;
}) {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-auto w-full"
      role="img"
      aria-label="DC circuit with battery, wire loop and resistor"
    >
      {/* Wire channel */}
      <g fill="none" stroke="var(--rule-strong)" strokeWidth="10" strokeLinejoin="round">
        <path d={`M${X1} ${Y1} H${X2} V${Y2} H${X1} Z`} />
      </g>
      <g fill="none" stroke="var(--background)" strokeWidth="6" strokeLinejoin="round">
        <path d={`M${X1} ${Y1} H${X2} V${Y2} H${X1} Z`} />
      </g>

      {/* Resistor constriction tube on the top segment */}
      <g fill="none" stroke="var(--signal)" strokeWidth="1.5">
        <path d="M165 52 L180 68 H220 L235 52" />
        <path d="M165 68 L180 52 H220 L235 68" />
      </g>
      <rect
        x="178"
        y="50"
        width="44"
        height="20"
        fill="none"
        stroke="var(--signal)"
        strokeWidth="1.5"
      />
      <text
        x="200"
        y="40"
        textAnchor="middle"
        fill="var(--signal)"
        fontSize="11"
        fontFamily="var(--font-mono)"
      >
        R = {resistance} Ω
      </text>

      {/* Flowing electron dots */}
      <g>
        {dots.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2.6" fill="var(--trace)" />
        ))}
      </g>

      {/* Battery source on the bottom segment */}
      <g stroke="var(--foreground)" strokeWidth="2" fill="none">
        <path d="M172 224 V256" />
        <path d="M186 232 V248" />
        <path d="M200 224 V256" />
        <path d="M214 232 V248" />
      </g>
      <text
        x="200"
        y="278"
        textAnchor="middle"
        fill="var(--foreground)"
        fontSize="11"
        fontFamily="var(--font-mono)"
      >
        BATTERY V = {voltage.toFixed(1)} V
      </text>
      <text x="252" y="252" fill="var(--warn)" fontSize="15" fontFamily="var(--font-mono)">
        −
      </text>
      <text x="138" y="252" fill="var(--warn)" fontSize="15" fontFamily="var(--font-mono)">
        +
      </text>

      {/* Current direction label */}
      <g stroke="var(--trace)" strokeWidth="1.2" fill="var(--trace)">
        <path d="M200 130 H250" />
        <path d="M250 130 l-7 -4 v8 z" stroke="none" />
      </g>
      <text x="120" y="126" fill="var(--trace)" fontSize="10" fontFamily="var(--font-mono)">
        ELECTRON FLOW
      </text>
    </svg>
  );
}

function Slider({
  label,
  unit,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="px-3 py-3">
      <div className="flex items-baseline justify-between">
        <span className="label">{label}</span>
        <span className="value text-[12px] text-signal">
          {value} {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-1 w-full accent-signal"
        aria-label={label}
      />
      <div className="value mt-1 flex justify-between text-[10px] text-muted-foreground">
        <span>
          {min} {unit}
        </span>
        <span>
          {max} {unit}
        </span>
      </div>
    </div>
  );
}
