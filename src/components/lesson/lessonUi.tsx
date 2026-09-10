import type { ReactNode } from "react";

/** Bulleted body copy used inside step cards. */
export function Bullets({ items, marker = "▸" }: { items: ReactNode[]; marker?: string }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-muted-foreground">
          <span className="value shrink-0 text-glow">{marker}</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Small bordered panel with a mono header strip. */
export function InfoCard({
  title,
  note,
  children,
}: {
  title: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <div className="panel">
      <div className="panel-head">
        <span>{title}</span>
        {note && <span className="value text-[10px]">{note}</span>}
      </div>
      <div className="px-4 py-4">{children}</div>
    </div>
  );
}

/** Highlighted equation block. */
export function Formula({ children, note }: { children: ReactNode; note?: string }) {
  return (
    <div className="border border-glow/35 bg-surface-2 px-4 py-4">
      <div className="value text-[26px] leading-none text-glow">{children}</div>
      {note && <div className="label mt-2">{note}</div>}
    </div>
  );
}

/** Worked example block (given → arithmetic → result). */
export function Worked({ title, given, work }: { title: string; given: string; work: string }) {
  return (
    <div className="border-l-2 border-l-glow pl-3">
      <div className="label">{title}</div>
      <p className="text-[13.5px] text-muted-foreground">{given}</p>
      <p className="value mt-1 text-[13px] text-trace">{work}</p>
    </div>
  );
}

/** Three-column quantity tile (V / I / R and similar). */
export function StatTile({
  label,
  unit,
  children,
}: {
  label: string;
  unit: string;
  children: ReactNode;
}) {
  return (
    <div className="panel">
      <div className="panel-head">
        <span>{label}</span>
        <span className="value text-[11px]">{unit}</span>
      </div>
      <div className="px-4 py-3 text-[13.5px] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
