import { useMemo, useState } from "react";

/**
 * Mini workbench: resistive voltage divider.
 * R1 / R2 / Vin drive the live node voltage and the output waveform.
 */
export function Hero() {
  const [r1, setR1] = useState(10);
  const [r2, setR2] = useState(10);
  const [vin, setVin] = useState(5);

  const ratio = r2 / (r1 + r2);
  const vout = vin * ratio;
  const current = vin / ((r1 + r2) * 1000);
  const power = vin * current;

  const path = useMemo(() => {
    const pts: string[] = [];
    for (let x = 0; x <= 320; x += 2) {
      const raw = Math.sin((x / 320) * Math.PI * 4) * vout;
      const y = 60 - Math.max(Math.min(raw, 6), -6) * 9;
      pts.push(`${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)}`);
    }
    return pts.join(" ");
  }, [vout]);

  const inPath = useMemo(() => {
    const pts: string[] = [];
    for (let x = 0; x <= 320; x += 2) {
      const raw = Math.sin((x / 320) * Math.PI * 4) * vin;
      const y = 60 - Math.max(Math.min(raw, 6), -6) * 9;
      pts.push(`${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)}`);
    }
    return pts.join(" ");
  }, [vin]);

  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 lg:grid-cols-[1fr_minmax(520px,46%)]">
        <div className="border-rule px-5 py-12 lg:border-r lg:py-16">
          <p className="label">Track · Basic Electronics</p>
          <h1 className="mt-4 max-w-[24ch] text-[36px] leading-[1.08] font-semibold tracking-tight md:text-[42px]">
            Basic electronics from the governing equation to the measured node
            voltage.
          </h1>
          <p className="mt-5 max-w-[62ch] text-[15px] text-muted-foreground">
            Voltage, current, resistance, power, dividers and RC behaviour —
            derived by hand, checked against a schematic, then verified on the
            bench. Values are computed live, not illustrated.
          </p>

          <div className="mt-8 grid grid-cols-1 border-t border-l border-rule sm:grid-cols-3">
            {[
              ["Scope", "Basic electronics only"],
              ["Method", "Derive · build · measure"],
              ["Units", "SI, engineering notation"],
            ].map(([k, v]) => (
              <div key={k} className="-mt-px -ml-px border-t border-l border-rule px-4 py-3">
                <div className="label">{k}</div>
                <div className="value mt-1 text-[13px]">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="graticule bg-surface px-5 py-6">
          <div className="panel">
            <div className="panel-head">
              <span>Mini workbench · resistive divider</span>
              <span className="text-trace">live</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_190px]">
              <div className="border-rule p-3 md:border-r">
                <svg viewBox="0 0 300 200" className="w-full" role="img" aria-label="Voltage divider schematic">
                  <g fill="none" stroke="var(--foreground)" strokeWidth="1.5" strokeLinecap="square">
                    <path d="M60 24 V52" />
                    <rect x="46" y="52" width="28" height="46" />
                    <path d="M60 98 V132" />
                    <rect x="46" y="132" width="28" height="46" />
                    <path d="M60 178 V190 M46 190 H74 M50 195 H70" />
                    <path d="M60 115 H210" />
                    <circle cx="212" cy="115" r="3" fill="var(--signal)" stroke="none" />
                    <path d="M60 24 H24 V190 H46" />
                  </g>
                  <g fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)">
                    <text x="80" y="80">R1 {r1}k</text>
                    <text x="80" y="160">R2 {r2}k</text>
                    <text x="150" y="108" fill="var(--signal)">VOUT</text>
                    <text x="14" y="18">VIN {vin} V</text>
                  </g>
                </svg>
              </div>

              <div className="divide-y divide-rule border-t border-rule md:border-t-0">
                <Slider label="R1 (kΩ)" value={r1} min={1} max={100} step={1} onChange={setR1} />
                <Slider label="R2 (kΩ)" value={r2} min={1} max={100} step={1} onChange={setR2} />
                <Slider label="Vin (V)" value={vin} min={1} max={12} step={0.5} onChange={setVin} />
                <div className="px-3 py-3">
                  <span className="label">Vout = Vin·R2/(R1+R2)</span>
                  <div className="value mt-1 text-[26px] text-signal">
                    {vout.toFixed(3)} V
                  </div>
                  <div className="value mt-1 text-[12px] text-muted-foreground">
                    I {(current * 1000).toFixed(3)} mA · P {(power * 1000).toFixed(2)} mW
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-rule">
              <div className="panel-head">
                <span>CH1 vin · CH2 vout · 2 V/div</span>
                <span className="text-trace">{(ratio * 100).toFixed(1)} % of input</span>
              </div>
              <div className="graticule bg-background">
                <svg viewBox="0 0 320 120" className="h-[120px] w-full">
                  <line x1="0" y1="60" x2="320" y2="60" stroke="var(--rule-strong)" strokeWidth="1" />
                  <path d={inPath} fill="none" stroke="var(--signal)" strokeWidth="1.25" strokeDasharray="3 3" />
                  <path d={path} fill="none" stroke="var(--trace)" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="px-3 py-2">
      <div className="flex items-baseline justify-between">
        <span className="label">{label}</span>
        <span className="value text-[12px]">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 h-1 w-full accent-signal"
        aria-label={label}
      />
    </div>
  );
}
