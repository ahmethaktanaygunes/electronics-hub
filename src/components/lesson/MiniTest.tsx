import { useMemo, useState } from "react";
import {
  LESSON_ONE_QUIZ,
  type NumericQuizItem,
  type QuizGroup,
  type TextQuizItem,
} from "@/data/lesson1Quiz";

type Entry = {
  value: string;
  status: "idle" | "correct" | "wrong";
  revealed: boolean;
};

const EMPTY: Entry = { value: "", status: "idle", revealed: false };

export function MiniTest({ groups = LESSON_ONE_QUIZ }: { groups?: QuizGroup[] }) {
  const [entries, setEntries] = useState<Record<string, Entry>>({});

  const numericItems = useMemo(
    () => groups.flatMap((g) => g.items).filter((i): i is NumericQuizItem => i.kind === "numeric"),
    [groups],
  );

  const answered = numericItems.filter((i) => entries[i.id]?.status === "correct").length;

  const update = (id: string, patch: Partial<Entry>) =>
    setEntries((prev) => ({ ...prev, [id]: { ...EMPTY, ...prev[id], ...patch } }));

  const check = (item: NumericQuizItem) => {
    const entry = entries[item.id] ?? EMPTY;
    const value = Number(entry.value.replace(",", "."));
    const ok =
      Number.isFinite(value) &&
      Math.abs(value - item.answer) <= Math.abs(item.answer) * item.tolerance;
    update(item.id, { status: ok ? "correct" : "wrong" });
  };

  return (
    <div className="space-y-6">
      <div className="panel">
        <div className="panel-head">
          <span>Mini test · Lesson 01</span>
          <span className="value text-[11px]">
            {answered} / {numericItems.length} numerical items correct
          </span>
        </div>
        <div className="px-4 py-3">
          <p className="text-[13.5px] text-muted-foreground">
            Two parts: unit conversions, then circuit and conceptual questions. Type an answer and
            press Submit to validate it, or reveal the worked solution. Conceptual questions are
            graded by self-assessment — write your answer, then compare it with the model answer.
          </p>
        </div>
      </div>

      {groups.map((group) => (
        <div key={group.id} className="panel">
          <div className="panel-head">
            <span>
              {group.label} · {group.title}
            </span>
            <span className="value text-[11px]">{group.items.length} items</span>
          </div>
          <p className="border-b border-rule px-4 py-2 text-[13px] text-muted-foreground">
            {group.instruction}
          </p>
          <ol className="divide-y divide-rule">
            {group.items.map((item, index) => (
              <li key={item.id} className="flex gap-3 px-4 py-4">
                <span className="value w-8 shrink-0 pt-0.5 text-[13px] font-semibold text-signal">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[14px] text-foreground">{item.prompt}</p>
                  {item.kind === "numeric" ? (
                    <NumericAnswer
                      item={item}
                      entry={entries[item.id] ?? EMPTY}
                      onChange={(v) => update(item.id, { value: v, status: "idle" })}
                      onSubmit={() => check(item)}
                      onReveal={() => update(item.id, { revealed: true })}
                    />
                  ) : (
                    <TextAnswer
                      item={item}
                      entry={entries[item.id] ?? EMPTY}
                      onChange={(v) => update(item.id, { value: v })}
                      onReveal={() => update(item.id, { revealed: true })}
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: Entry["status"] }) {
  if (status === "correct")
    return <span className="label border border-trace px-2 py-0.5 text-trace">correct</span>;
  if (status === "wrong")
    return <span className="label border border-warn px-2 py-0.5 text-warn">try again</span>;
  return null;
}

function NumericAnswer({
  item,
  entry,
  onChange,
  onSubmit,
  onReveal,
}: {
  item: NumericQuizItem;
  entry: Entry;
  onChange: (v: string) => void;
  onSubmit: () => void;
  onReveal: () => void;
}) {
  return (
    <div className="mt-2">
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-stretch">
          <input
            className="field"
            style={{ width: 140 }}
            inputMode="decimal"
            placeholder="value"
            value={entry.value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") onSubmit();
            }}
            aria-label={`Answer for ${item.id}`}
          />
          <span className="value flex items-center border border-l-0 border-rule bg-surface-2 px-2 text-[12px] text-muted-foreground">
            {item.unit}
          </span>
        </div>
        <button type="button" className="btn btn-active" onClick={onSubmit}>
          Submit
        </button>
        <button type="button" className="btn" onClick={onReveal}>
          {entry.revealed ? "Solution shown" : "Show solution"}
        </button>
        <StatusBadge status={entry.status} />
      </div>

      {entry.revealed && (
        <p className="mt-2 border-l-2 border-l-signal bg-surface-2 px-3 py-2 text-[13px] text-muted-foreground">
          <span className="label mr-2">Worked solution</span>
          {item.solution}
          <span className="value ml-2 text-[12px] text-signal">
            answer = {item.answer} {item.unit}
          </span>
        </p>
      )}
    </div>
  );
}

function TextAnswer({
  item,
  entry,
  onChange,
  onReveal,
}: {
  item: TextQuizItem;
  entry: Entry;
  onChange: (v: string) => void;
  onReveal: () => void;
}) {
  return (
    <div className="mt-2">
      <textarea
        className="field py-2"
        style={{ height: "auto", minHeight: 72 }}
        placeholder="Write your own answer here…"
        value={entry.value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Conceptual answer"
      />
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <button type="button" className="btn" onClick={onReveal}>
          {entry.revealed ? "Model answer shown" : "Reveal model answer"}
        </button>
        {entry.value.trim().length > 0 && (
          <span className="label border border-rule px-2 py-0.5">answer recorded</span>
        )}
      </div>
      {entry.revealed && (
        <p className="mt-2 border-l-2 border-l-signal bg-surface-2 px-3 py-2 text-[13px] text-muted-foreground">
          <span className="label mr-2">Model answer</span>
          {item.solution}
        </p>
      )}
    </div>
  );
}
