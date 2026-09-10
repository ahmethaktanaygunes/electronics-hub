import { useId } from "react";

export interface HElectronicsLogoProps {
  /** Rendered size in CSS pixels (the mark is square). */
  size?: number;
  /** Extra classes applied to the root <svg>. */
  className?: string;
  /** Pulses the neon connection nodes. */
  animated?: boolean;
  /** Draws the soft cyan halo behind the mark. */
  glow?: boolean;
  /**
   * Accessible label. Pass an empty string to render the mark as purely
   * decorative (aria-hidden) — useful when a text wordmark sits next to it.
   */
  title?: string;
}

/** Bold "H" body — a single filled polygon so the letterform stays crisp at any size. */
const H_BODY = "M14 12 H24 V28 H40 V12 H50 V52 H40 V36 H24 V52 H14 Z";

/** Thin PCB traces etched across the letterform. */
const TRACES = [
  "M9 32 H14",
  "M17 15 V49",
  "M17 22 L21.5 26.5",
  "M26 32 H38",
  "M50 32 H55",
  "M47 15 V49",
  "M47 42 L42.5 37.5",
];

/** Glowing cyan connection nodes / vias. */
const NODES = [
  { x: 9, y: 32, r: 1.5, delay: 0 },
  { x: 17, y: 15, r: 1.4, delay: 0.35 },
  { x: 17, y: 49, r: 1.4, delay: 0.7 },
  { x: 21.5, y: 26.5, r: 1.1, delay: 1.05 },
  { x: 32, y: 32, r: 1.7, delay: 0.5 },
  { x: 42.5, y: 37.5, r: 1.1, delay: 0.2 },
  { x: 47, y: 15, r: 1.4, delay: 0.85 },
  { x: 47, y: 49, r: 1.4, delay: 1.2 },
  { x: 55, y: 32, r: 1.5, delay: 0.15 },
];

export function HElectronicsLogo({
  size = 32,
  className = "",
  animated = true,
  glow = true,
  title = "Electronics with Haktan",
}: HElectronicsLogoProps) {
  const raw = useId();
  const uid = raw.replace(/[^a-zA-Z0-9]/g, "");
  const nodeClass = `hkt-node-${uid}`;
  const decorative = title.trim().length === 0;

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {!decorative && <title>{title}</title>}

      <defs>
        <linearGradient id={`${uid}-board`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#122043" />
          <stop offset="55%" stopColor="#0B1530" />
          <stop offset="100%" stopColor="#050A18" />
        </linearGradient>

        <linearGradient id={`${uid}-body`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="32%" stopColor="#3B82F6" />
          <stop offset="72%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#16256B" />
        </linearGradient>

        <linearGradient id={`${uid}-trace`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A5F3FC" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>

        <radialGradient id={`${uid}-halo`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.85" />
          <stop offset="55%" stopColor="#3B82F6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>

        <filter id={`${uid}-blur`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>

        <filter id={`${uid}-glow`} x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="1.1" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {animated && (
        <style>{`
@keyframes ${nodeClass}-pulse{0%,100%{opacity:.55}50%{opacity:1}}
.${nodeClass}{animation:${nodeClass}-pulse 2.6s ease-in-out infinite}
@media (prefers-reduced-motion: reduce){.${nodeClass}{animation:none;opacity:1}}
`}</style>
      )}

      {/* Deep navy PCB board */}
      <rect x="2" y="2" width="60" height="60" rx="13" fill={`url(#${uid}-board)`} />
      <rect
        x="2.5"
        y="2.5"
        width="59"
        height="59"
        rx="12.5"
        fill="none"
        stroke="#3B82F6"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      {/* Soft cyan halo behind the mark */}
      {glow && (
        <g filter={`url(#${uid}-blur)`} opacity="0.5">
          <ellipse cx="32" cy="33" rx="22" ry="20" fill={`url(#${uid}-halo)`} />
        </g>
      )}

      {/* Bold H letterform with a metallic edge highlight */}
      <path d={H_BODY} fill={`url(#${uid}-body)`} />
      <path
        d={H_BODY}
        fill="none"
        stroke="#BFDBFE"
        strokeOpacity="0.28"
        strokeWidth="0.7"
        strokeLinejoin="miter"
      />

      {/* PCB traces etched into the letterform */}
      <g
        fill="none"
        stroke={`url(#${uid}-trace)`}
        strokeWidth="0.9"
        strokeLinecap="square"
        strokeOpacity="0.85"
      >
        {TRACES.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>

      {/* Soft cyan halos (single blur pass for performance) */}
      <g filter={`url(#${uid}-blur)`} opacity="0.9">
        {NODES.map((n) => (
          <circle
            key={`h-${n.x}-${n.y}`}
            cx={n.x}
            cy={n.y}
            r={n.r * 2.6}
            fill={`url(#${uid}-halo)`}
          />
        ))}
      </g>

      {/* Solid neon nodes with an electric-blue core */}
      <g filter={`url(#${uid}-glow)`}>
        {NODES.map((n) => (
          <g
            key={`n-${n.x}-${n.y}`}
            className={animated ? nodeClass : undefined}
            style={animated ? { animationDelay: `${n.delay}s` } : undefined}
          >
            <circle cx={n.x} cy={n.y} r={n.r} fill="#22D3EE" />
            <circle cx={n.x} cy={n.y} r={n.r * 0.45} fill="#ECFEFF" />
          </g>
        ))}
      </g>
    </svg>
  );
}
