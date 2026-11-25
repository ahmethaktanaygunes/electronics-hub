import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useUi } from "@/i18n/languageContext";

/**
 * Mini workbench: resistive voltage divider.
 * R1 / R2 / Vin drive the live node voltage and the output waveform.
 */
export function Hero() {
  const t = useUi();
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
    <section id="top" className="relative overflow-hidden border-b border-rule">
      <div className="relative mx-auto grid max-w-[1360px] grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center border-rule px-5 py-12 sm:px-8 md:py-14 lg:border-r lg:px-8 lg:py-16 xl:px-12">
          <p className="label text-signal">{t.heroEyebrow}</p>
          <h1
            id="hero-title"
            className="mt-5 text-[clamp(2rem,3.4vw,3rem)] leading-[1.03] font-semibold tracking-[-0.045em]"
          >
            <HighlightedLine text={t.heroTitleLineOne} accent={t.heroTitleAccentOne} />
            <HighlightedLine text={t.heroTitleLineTwo} accent={t.heroTitleAccentTwo} />
          </h1>
          <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
            {t.heroLead}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="curriculum"
              className="btn btn-active h-12 min-h-12 gap-2 px-5 text-[12px] sm:px-6"
            >
              {t.heroCtaStart}
              <ArrowRight />
            </Link>
            <Link
              to="/"
              hash="tools"
              className="btn h-12 min-h-12 gap-2 px-5 text-[12px] text-foreground sm:px-6"
            >
              {t.heroCtaTools}
              <ArrowRight />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-rule pt-5">
            {[t.heroHighlightLessons, t.heroHighlightCalculators, t.heroHighlightPractical].map(
              (highlight) => (
                <span
                  key={highlight}
                  className="flex items-center gap-2 font-mono text-[10px] tracking-[0.04em] text-muted-foreground uppercase"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-trace" aria-hidden="true" />
                  {highlight}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="graticule bg-surface px-4 py-8 sm:px-6 lg:px-5 lg:py-12 xl:px-8">
          <div className="panel border-rule-strong shadow-[0_0_32px_-24px_var(--signal)]">
            <div className="panel-head">
              <span>{t.miniWorkbench}</span>
              <span className="flex items-center gap-2 text-trace">
                <span className="h-1.5 w-1.5 bg-trace" aria-hidden="true" />
                {t.live}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_190px]">
              <div className="min-w-0 p-3 sm:p-4">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <span className="label">{t.heroSignalPath}</span>
                  <span className="value shrink-0 text-[10px] text-signal">DC · 01</span>
                </div>
                <svg
                  viewBox="0 0 320 220"
                  className="mx-auto w-full max-w-[440px]"
                  role="img"
                  aria-label={t.voltageDividerSchematic}
                >
                  <g
                    fill="none"
                    stroke="var(--rule-strong)"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  >
                    <path d="M44 88 V40 H112 V50" />
                    <rect
                      x="94"
                      y="50"
                      width="36"
                      height="50"
                      fill="var(--surface-2)"
                      stroke="var(--foreground)"
                    />
                    <path d="M112 100 V112" />
                    <rect
                      x="94"
                      y="125"
                      width="36"
                      height="50"
                      fill="var(--surface-2)"
                      stroke="var(--foreground)"
                    />
                    <path d="M112 175 V188 H44 V132" />
                    <path d="M112 112 H270" />
                    <path d="M112 188 V195 M100 195 H124 M104 201 H120 M108 207 H116" />
                  </g>
                  <circle
                    cx="44"
                    cy="110"
                    r="22"
                    fill="var(--surface)"
                    stroke="var(--signal)"
                    strokeWidth="1.5"
                  />
                  <g fill="var(--signal)" fontSize="12" fontFamily="var(--font-mono)">
                    <text x="44" y="105" textAnchor="middle">
                      +
                    </text>
                    <text x="44" y="120" textAnchor="middle">
                      −
                    </text>
                  </g>
                  <g fill="var(--trace)">
                    <circle cx="112" cy="50" r="3" />
                    <circle cx="112" cy="112" r="3.5" />
                    <circle cx="270" cy="112" r="3.5" />
                  </g>
                  <g fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)">
                    <text x="8" y="23" fill="var(--signal)">
                      VIN {vin.toFixed(1)} V
                    </text>
                    <text x="142" y="79">
                      R1 {r1} kΩ
                    </text>
                    <text x="142" y="155">
                      R2 {r2} kΩ
                    </text>
                    <text x="226" y="102" fill="var(--signal)">
                      VOUT
                    </text>
                    <text x="127" y="207" fontSize="8">
                      GND
                    </text>
                  </g>
                </svg>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-rule pt-2">
                  <span className="label">
                    {t.heroSourceLabel}{" "}
                    <span className="value text-signal">{vin.toFixed(1)} V</span>
                  </span>
                  <span className="label">
                    {t.heroOutputNodeLabel}{" "}
                    <span className="value text-signal">{vout.toFixed(3)} V</span>
                  </span>
                </div>
              </div>

              <div className="divide-y divide-rule border-t border-rule md:border-t-0 md:border-l">
                <Slider label="R1 (kΩ)" value={r1} min={1} max={100} step={1} onChange={setR1} />
                <Slider label="R2 (kΩ)" value={r2} min={1} max={100} step={1} onChange={setR2} />
                <Slider label="Vin (V)" value={vin} min={1} max={12} step={0.5} onChange={setVin} />
                <div className="bg-background/40 px-3 py-3">
                  <span className="label">{t.heroOutputNodeLabel}</span>
                  <div className="value mt-1 text-[28px] leading-tight text-signal">
                    {vout.toFixed(3)} V
                  </div>
                  <div className="value mt-2 text-[11px] leading-relaxed text-muted-foreground">
                    I {(current * 1000).toFixed(3)} mA
                    <br />P {(power * 1000).toFixed(2)} mW
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-rule">
              <div className="panel-head gap-2 text-[9px] sm:text-[10px]">
                <span>CH1 VIN · CH2 VOUT · 2 V/div</span>
                <span className="text-trace">
                  {(ratio * 100).toFixed(1)} % {t.percentOfInput}
                </span>
              </div>
              <div className="graticule bg-background">
                <svg viewBox="0 0 320 120" className="h-[110px] w-full sm:h-[120px]">
                  <line
                    x1="0"
                    y1="60"
                    x2="320"
                    y2="60"
                    stroke="var(--rule-strong)"
                    strokeWidth="1"
                  />
                  <path
                    d={inPath}
                    fill="none"
                    stroke="var(--signal)"
                    strokeWidth="1.25"
                    strokeDasharray="3 3"
                  />
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

function HighlightedLine({ text, accent }: { text: string; accent: string }) {
  const accentStart = text.indexOf(accent);

  if (accentStart < 0 || !accent) {
    return <span className="block">{text}</span>;
  }

  return (
    <span className="block">
      {text.slice(0, accentStart)}
      <span className="text-signal">{accent}</span>
      {text.slice(accentStart + accent.length)}
    </span>
  );
}

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2.5 8h10M8.5 4l4 4-4 4" />
    </svg>
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
