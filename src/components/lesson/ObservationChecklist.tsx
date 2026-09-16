import { useState } from "react";

/** Interactive observation checklist — pure self-paced ticking, no gating. */
export function ObservationChecklist({
  title,
  note,
  items,
}: {
  title: string;
  note: string;
  items: string[];
}) {
  const [checked, setChecked] = useState<number[]>([]);

  const toggle = (index: number) =>
    setChecked((prev) =>
      prev.includes(index) ? prev.filter((value) => value !== index) : [...prev, index],
    );

  return (
    <div className="panel">
      <div className="panel-head">
        <span>{title}</span>
        <span className="value text-[11px] text-glow">
          {checked.length}/{items.length}
        </span>
      </div>
      <p className="border-b border-rule px-4 py-2 text-[13px] text-muted-foreground">{note}</p>
      <ul className="divide-y divide-rule">
        {items.map((item, index) => {
          const on = checked.includes(index);
          return (
            <li key={item}>
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-pressed={on}
                className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-surface-2"
              >
                <span
                  className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border text-[11px] ${
                    on
                      ? "border-trace bg-trace/15 text-trace"
                      : "border-rule-strong text-transparent"
                  }`}
                >
                  ✓
                </span>
                <span
                  className={`text-[13.5px] leading-relaxed ${
                    on ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
