import { useState } from "react";

type Key = "V" | "I" | "R" | "P";

const UNITS: Record<Key, string> = { V: "V", I: "A", R: "Ω", P: "W" };
const NAMES: Record<Key, string> = {
  V: "Voltage",
  I: "Current",
  R: "Resistance",
  P: "Power",
};

export function OhmsLaw() {
  const [known, setKnown] = useState<[Key, Key]>(["V", "R"]);
  const [a, setA] = useState("5");
  const [b, setB] = useState("220");

  const va = Number(a);
  const vb = Number(b);
  const res = solve(known, va, vb);

  function toggle(k: Key) {
    setKnown(([x, y]) => (k === x || k === y ? [x, y] : [y, k]));
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <span>Tool 02 · Ohm&apos;s law matrix</span>
        <span className="value text-[10px]">V=IR · P=VI</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
        <div className="border-rule p-3 md:border-r">
          <div className="label mb-2">Select two known quantities</div>
          <div className="grid grid-cols-2 gap-1">
            {(["V", "I", "R", "P"] as Key[]).map((k) => (
              <button
                key={k}
                onClick={() => toggle(k)}
                className={`btn h-9 justify-start ${known.includes(k) ? "btn-active" : ""}`}
              >
                {k} · {NAMES[k]}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            <Field label={`${NAMES[known[0]]} (${UNITS[known[0]]})`} value={a} onChange={setA} />
            <Field label={`${NAMES[known[1]]} (${UNITS[known[1]]})`} value={b} onChange={setB} />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4">
          {(["V", "I", "R", "P"] as Key[]).map((k) => {
            const isInput = known.includes(k);
            const val = isInput ? (known[0] === k ? va : vb) : res[k];
            return (
              <div
                key={k}
                className="-ml-px -mt-px border-t border-l border-rule p-4"
              >
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="label">{NAMES[k]}</span>
                  <span className={`label text-[10px] ${isInput ? "text-rule-strong" : "text-signal"}`}>
                    {isInput ? "given" : "solved"}
                  </span>
                </div>
                <div
                  className={`value mt-2 text-[24px] ${isInput ? "" : "text-signal"}`}
                >
                  {Number.isFinite(val) ? engineering(val) : "—"}
                  <span className="ml-1 text-[13px] text-muted-foreground">
                    {UNITS[k]}
                  </span>
                </div>
                <div className="value mt-1 text-[11px] text-muted-foreground">
                  {FORMULA[k]}
                </div>
              </div>
            );
          })}
          <div className="col-span-2 -ml-px -mt-px border-t border-l border-rule p-4 lg:col-span-4">
            <span className="label">Notes</span>
            <p className="mt-1 text-[13px] text-muted-foreground">
              DC / resistive case only. For a real part, check the dissipation
              above against the package rating — a 0603 chip resistor derates to
              roughly 100 mW at 70 °C.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const FORMULA: Record<Key, string> = {
  V: "V = I·R = √(P·R)",
  I: "I = V/R = P/V",
  R: "R = V/I = V²/P",
  P: "P = V·I = I²·R",
};

function solve(known: [Key, Key], a: number, b: number): Record<Key, number> {
  const m: Partial<Record<Key, number>> = { [known[0]]: a, [known[1]]: b };
  const g = (k: Key) => m[k] as number;
  const has = (k: Key) => m[k] !== undefined;

  if (has("V") && has("I")) {
    m.R = g("V") / g("I");
    m.P = g("V") * g("I");
  } else if (has("V") && has("R")) {
    m.I = g("V") / g("R");
    m.P = (g("V") * g("V")) / g("R");
  } else if (has("V") && has("P")) {
    m.I = g("P") / g("V");
    m.R = (g("V") * g("V")) / g("P");
  } else if (has("I") && has("R")) {
    m.V = g("I") * g("R");
    m.P = g("I") * g("I") * g("R");
  } else if (has("I") && has("P")) {
    m.V = g("P") / g("I");
    m.R = g("P") / (g("I") * g("I"));
  } else if (has("R") && has("P")) {
    m.V = Math.sqrt(g("P") * g("R"));
    m.I = Math.sqrt(g("P") / g("R"));
  }
  return m as Record<Key, number>;
}

function engineering(v: number) {
  if (!Number.isFinite(v)) return "—";
  const abs = Math.abs(v);
  if (abs === 0) return "0";
  if (abs >= 1e6) return `${+(v / 1e6).toPrecision(4)}M`;
  if (abs >= 1e3) return `${+(v / 1e3).toPrecision(4)}k`;
  if (abs >= 1) return `${+v.toPrecision(4)}`;
  if (abs >= 1e-3) return `${+(v * 1e3).toPrecision(4)}m`;
  return `${+(v * 1e6).toPrecision(4)}µ`;
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="label">{label}</span>
      <input
        className="field mt-1"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
