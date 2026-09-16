/**
 * Language-neutral circuit schematics for Lesson 2.
 * Labels are reference designators only (L1, L2, SW1), so the drawings work
 * for every language; the accessible name is passed in.
 */

const WIRE = "var(--foreground)";

export function SeriesSchematic({ ariaLabel }: { ariaLabel: string }) {
  return (
    <svg viewBox="0 0 320 200" className="h-auto w-full" role="img" aria-label={ariaLabel}>
      <g fill="none" stroke={WIRE} strokeWidth="1.6">
        {/* loop with gaps for the components */}
        <path d="M40 40 H110" />
        <path d="M150 40 H280" />
        <path d="M280 40 V88" />
        <path d="M280 112 V160" />
        <path d="M280 160 H188" />
        <path d="M152 160 H40" />
        <path d="M40 160 V112" />
        <path d="M40 88 V40" />

        {/* switch (open) */}
        <path d="M110 40 L146 24" />

        {/* lamps */}
        <circle cx="280" cy="100" r="12" />
        <path d="M271.5 91.5 L288.5 108.5 M288.5 91.5 L271.5 108.5" />
        <circle cx="40" cy="100" r="12" />
        <path d="M31.5 91.5 L48.5 108.5 M48.5 91.5 L31.5 108.5" />
      </g>

      {/* battery cells */}
      <g fill="none" stroke={WIRE} strokeWidth="2">
        <path d="M152 146 V174" />
        <path d="M164 152 V168" />
        <path d="M176 146 V174" />
        <path d="M188 152 V168" />
      </g>

      <g fill={WIRE} stroke="none">
        <circle cx="110" cy="40" r="2.4" />
        <circle cx="150" cy="40" r="2.4" />
      </g>

      <g fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)">
        <text x="96" y="18">
          SW1
        </text>
        <text x="298" y="104">
          L1
        </text>
        <text x="16" y="104">
          L2
        </text>
        <text x="170" y="192" textAnchor="middle">
          9 V
        </text>
      </g>

      <g fill="var(--glow)" fontSize="10" fontFamily="var(--font-mono)">
        <text x="70" y="60">
          I →
        </text>
      </g>
    </svg>
  );
}

export function ParallelSchematic({ ariaLabel }: { ariaLabel: string }) {
  return (
    <svg viewBox="0 0 320 200" className="h-auto w-full" role="img" aria-label={ariaLabel}>
      <g fill="none" stroke={WIRE} strokeWidth="1.6">
        {/* supply rails */}
        <path d="M60 40 H96" />
        <path d="M132 40 H280" />
        <path d="M60 170 H280" />

        {/* battery leg */}
        <path d="M60 40 V82" />
        <path d="M60 100 V170" />

        {/* branch 1 */}
        <path d="M150 40 V93" />
        <path d="M150 117 V170" />

        {/* branch 2 */}
        <path d="M235 40 V93" />
        <path d="M235 117 V170" />

        {/* switch (open) */}
        <path d="M96 40 L128 24" />

        {/* lamps */}
        <circle cx="150" cy="105" r="12" />
        <path d="M141.5 96.5 L158.5 113.5 M158.5 96.5 L141.5 113.5" />
        <circle cx="235" cy="105" r="12" />
        <path d="M226.5 96.5 L243.5 113.5 M243.5 96.5 L226.5 113.5" />
      </g>

      {/* battery cells */}
      <g fill="none" stroke={WIRE} strokeWidth="2">
        <path d="M50 82 H70" />
        <path d="M54 88 H66" />
        <path d="M50 94 H70" />
        <path d="M54 100 H66" />
      </g>

      <g fill={WIRE} stroke="none">
        <circle cx="96" cy="40" r="2.4" />
        <circle cx="132" cy="40" r="2.4" />
      </g>

      <g fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)">
        <text x="84" y="18">
          SW1
        </text>
        <text x="162" y="100">
          L1
        </text>
        <text x="247" y="100">
          L2
        </text>
        <text x="24" y="96">
          9 V
        </text>
      </g>

      <g fill="var(--glow)" fontSize="10" fontFamily="var(--font-mono)">
        <text x="152" y="34">
          I1 →
        </text>
        <text x="237" y="34">
          I2 →
        </text>
      </g>
    </svg>
  );
}
