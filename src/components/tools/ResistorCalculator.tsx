import { useState } from "react";

const BANDS = [
  { name: "black", digit: 0, mult: 1, hex: "#0b0b0b" },
  { name: "brown", digit: 1, mult: 10, tol: 1, hex: "#7a4a22" },
  { name: "red", digit: 2, mult: 100, tol: 2, hex: "#c62828" },
  { name: "orange", digit: 3, mult: 1e3, hex: "#e07a15" },
  { name: "yellow", digit: 4, mult: 1e4, hex: "#e5c220" },
  { name: "green", digit: 5, mult: 1e5, tol: 0.5, hex: "#2f9e56" },
  { name: "blue", digit: 6, mult: 1e6, tol: 0.25, hex: "#2f6fb5" },
  { name: "violet", digit: 7, mult: 1e7, tol: 0.1, hex: "#7a52b3" },
  { name: "grey", digit: 8, mult: 1e8, tol: 0.05, hex: "#9aa3b2" },
  { name: "white", digit: 9, mult: 1e9, hex: "#f1f5f9" },
  { name: "gold", digit: -1, mult: 0.1, tol: 5, hex: "#c8a03c" },
  { name: "silver", digit: -1, mult: 0.01, tol: 10, hex: "#b9c0cc" },
];

const DIGITS = BANDS.filter((b) => b.digit >= 0);
const MULTS = BANDS;
const TOLS = BANDS.filter((b) => b.tol !== undefined);

function format(ohms: number) {
  if (ohms >= 1e9) return `${+(ohms / 1e9).toFixed(3)} GΩ`;
  if (ohms >= 1e6) return `${+(ohms / 1e6).toFixed(3)} MΩ`;
  if (ohms >= 1e3) return `${+(ohms / 1e3).toFixed(3)} kΩ`;
  return `${+ohms.toFixed(3)} Ω`;
}

export function ResistorCalculator() {
  const [mode, setMode] = useState<4 | 5>(4);
  const [b1, setB1] = useState(1); // brown
  const [b2, setB2] = useState(0); // black
  const [b3, setB3] = useState(0); // 3rd digit (5-band) - black
  const [mult, setMult] = useState(2); // red -> x100
  const [tol, setTol] = useState(10); // gold 5%

  const band = (i: number) => BANDS[i] ?? BANDS[0]!;
  const digits =
    mode === 4
      ? band(b1).digit * 10 + band(b2).digit
      : band(b1).digit * 100 + band(b2).digit * 10 + band(b3).digit;
  const value = digits * band(mult).mult;
  const tolerance = band(tol).tol ?? 5;
  const min = value * (1 - tolerance / 100);
  const max = value * (1 + tolerance / 100);

  const drawn = mode === 4 ? [b1, b2, mult, tol] : [b1, b2, b3, mult, tol];

  return (
    <div className="panel">
      <div className="panel-head">
        <span>Tool 01 · Resistor colour code</span>
        <span className="text-signal">IEC 60062</span>
      </div>

      <div className="flex items-center gap-2 border-b border-rule px-3 py-2">
        <span className="label">Bands</span>
        {[4, 5].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m as 4 | 5)}
            className={`btn ${mode === m ? "btn-active" : ""}`}
          >
            {m}-band
          </button>
        ))}
        <span className="label ml-auto hidden sm:inline">
          {mode === 4 ? "2 digits + mult + tol" : "3 digits + mult + tol"}
        </span>
      </div>

      <div className="border-b border-rule bg-background p-5">
        <svg viewBox="0 0 320 90" className="mx-auto h-[90px] w-full max-w-[420px]" role="img" aria-label="Resistor body">
          <line x1="0" y1="45" x2="320" y2="45" stroke="var(--foreground)" strokeWidth="1.5" />
          <rect
            x="60"
            y="22"
            width="200"
            height="46"
            rx="14"
            fill="var(--surface-2)"
            stroke="var(--foreground)"
            strokeWidth="1.25"
          />
          {drawn.map((idx, i) => (
            <rect
              key={i}
              x={80 + i * 28 + (i === drawn.length - 1 ? 40 : 0)}
              y="23"
              width="14"
              height="44"
              fill={band(idx).hex}
            />
          ))}
        </svg>
        <div className="mt-3 flex flex-wrap items-baseline justify-center gap-x-4">
          <span className="value text-[30px] tracking-tight text-trace">{format(value)}</span>
          <span className="value text-[15px] text-signal">±{tolerance}%</span>
          <span className="value text-[12px] text-muted-foreground">
            range {format(min)} … {format(max)}
          </span>
        </div>
      </div>

      <div
        className={`grid grid-cols-1 divide-y divide-rule md:divide-x md:divide-y-0 ${
          mode === 4 ? "md:grid-cols-4" : "md:grid-cols-5"
        }`}
      >
        <BandPicker title="Band 1 · digit" options={DIGITS} value={b1} onChange={setB1} render={(b) => String(b.digit)} />
        <BandPicker title="Band 2 · digit" options={DIGITS} value={b2} onChange={setB2} render={(b) => String(b.digit)} />
        {mode === 5 && (
          <BandPicker title="Band 3 · digit" options={DIGITS} value={b3} onChange={setB3} render={(b) => String(b.digit)} />
        )}
        <BandPicker
          title="Multiplier"
          options={MULTS}
          value={mult}
          onChange={setMult}
          render={(b) =>
            `×${
              b.mult >= 1e6
                ? `${b.mult / 1e6}M`
                : b.mult >= 1e3
                  ? `${b.mult / 1e3}k`
                  : b.mult
            }`
          }
        />
        <BandPicker title="Tolerance" options={TOLS} value={tol} onChange={setTol} render={(b) => `±${b.tol}%`} />
      </div>
    </div>
  );
}

function BandPicker({
  title,
  options,
  value,
  onChange,
  render,
}: {
  title: string;
  options: typeof BANDS;
  value: number;
  onChange: (i: number) => void;
  render: (b: (typeof BANDS)[number]) => string;
}) {
  return (
    <div className="p-3">
      <div className="label mb-2">{title}</div>
      <ul>
        {options.map((b) => {
          const idx = BANDS.indexOf(b);
          const active = idx === value;
          return (
            <li key={b.name}>
              <button
                onClick={() => onChange(idx)}
                className={`flex w-full items-center gap-2 border-b border-rule px-1 py-1 text-left ${
                  active ? "bg-foreground text-background" : "hover:bg-surface-2"
                }`}
              >
                <span
                  className="h-3 w-3 border border-rule-strong"
                  style={{ background: b.hex }}
                />
                <span className="value text-[11px] uppercase">{b.name}</span>
                <span className="value ml-auto text-[11px] opacity-70">{render(b)}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
