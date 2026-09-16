import type { ReactNode } from "react";

/** One circuit observation panel: schematic, setup, tasks and expected result. */
export function ObservationPanel({
  data,
  schematic,
}: {
  data: { name: string; setup: string; tasks: string[]; expected: string };
  schematic: ReactNode;
}) {
  return (
    <div className="panel">
      <div className="panel-head">
        <span>{data.name}</span>
      </div>
      <div className="border-b border-rule bg-background px-4 py-3">{schematic}</div>
      <div className="space-y-3 px-4 py-4">
        <p className="text-[13.5px] leading-relaxed text-muted-foreground">{data.setup}</p>
        <ul className="space-y-2">
          {data.tasks.map((task, index) => (
            <li
              key={task}
              className="flex gap-2.5 text-[13.5px] leading-relaxed text-muted-foreground"
            >
              <span className="value shrink-0 text-glow">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span>{task}</span>
            </li>
          ))}
        </ul>
        <p className="border-l-2 border-l-trace pl-3 text-[13.5px] leading-relaxed text-muted-foreground">
          {data.expected}
        </p>
      </div>
    </div>
  );
}
