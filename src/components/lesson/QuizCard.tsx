import { useState } from "react";
import type { QuizItem } from "@/data/lesson1Quiz";

export interface QuizResult {
  /** True when the learner solved it without revealing the solution. */
  correct: boolean;
  /** True when the worked / model answer was revealed. */
  revealed: boolean;
  attempts: number;
}

export interface QuizCardProps {
  item: QuizItem;
  /** Called once, the moment the step unlocks. */
  onSolved?: (result: QuizResult) => void;
}

type Status = "idle" | "correct" | "wrong";

/**
 * A single interactive question card. The card owns its own state and reports
 * the unlock moment upward so the lesson player can open the next step.
 */
export function QuizCard({ item, onSolved }: QuizCardProps) {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [attempts, setAttempts] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [solved, setSolved] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);

  const numeric = item.kind === "numeric" ? item : null;
  const text = item.kind === "text" ? item : null;

  const settle = (result: QuizResult) => {
    setSolved(true);
    onSolved?.(result);
  };

  const submit = () => {
    if (!numeric || solved) return;
    const parsed = Number(value.replace(",", "."));
    const tried = attempts + 1;
    const ok =
      value.trim().length > 0 &&
      Number.isFinite(parsed) &&
      Math.abs(parsed - numeric.answer) <= Math.abs(numeric.answer) * numeric.tolerance;
    setAttempts(tried);
    setStatus(ok ? "correct" : "wrong");
    if (ok) settle({ correct: true, revealed: false, attempts: tried });
    else setShakeKey((k) => k + 1);
  };

  const reveal = () => {
    if (solved) return;
    setRevealed(true);
    setStatus("idle");
    settle({ correct: false, revealed: true, attempts });
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="label border border-glow/40 px-2 py-0.5 text-glow">{item.id}</span>
        <span className="label">
          {numeric ? "numeric answer" : "written answer · self-assessed"}
        </span>
        {solved && (
          <span className="label animate-step-pop border border-trace px-2 py-0.5 text-trace">
            step unlocked
          </span>
        )}
      </div>

      <p className="mt-4 text-[17px] leading-relaxed text-foreground">{item.prompt}</p>

      <div className="mt-5">
        {numeric ? (
          <div className="flex flex-wrap items-stretch gap-2">
            <input
              className="field"
              style={{ width: 160 }}
              inputMode="decimal"
              placeholder="your answer"
              value={value}
              disabled={solved}
              onChange={(e) => {
                setValue(e.target.value);
                setStatus("idle");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") submit();
              }}
              aria-label={`Answer for ${numeric.id}`}
            />
            <span className="value flex items-center border border-rule bg-surface-2 px-3 text-[13px] text-glow">
              {numeric.unit}
            </span>
            <button
              type="button"
              className="btn h-8 px-4 disabled:cursor-not-allowed disabled:opacity-40"
              onClick={submit}
              disabled={solved}
            >
              Check
            </button>
          </div>
        ) : (
          <textarea
            className="field w-full py-2 disabled:cursor-not-allowed disabled:opacity-60"
            style={{ height: "auto", minHeight: 96 }}
            placeholder="Write your own answer here…"
            value={value}
            disabled={solved}
            onChange={(e) => setValue(e.target.value)}
            aria-label="Written answer"
          />
        )}
      </div>

      <div
        key={shakeKey}
        className={status === "wrong" && !solved ? "animate-step-shake" : undefined}
      >
        {status === "correct" && (
          <p className="animate-step-pop mt-4 border-l-2 border-l-trace bg-surface-2 px-3 py-2 text-[13.5px] text-trace">
            Correct — the next step is unlocked.
          </p>
        )}
        {status === "wrong" && !solved && (
          <p className="mt-4 border-l-2 border-l-warn bg-surface-2 px-3 py-2 text-[13.5px] text-warn">
            Not quite. Re-check the unit prefix and the arithmetic, then try again.
          </p>
        )}
      </div>

      {!solved && (
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="btn px-3"
            onClick={reveal}
            disabled={numeric !== null && attempts === 0}
          >
            Show solution
          </button>
          <span className="label">
            {numeric
              ? attempts === 0
                ? "try once to unlock the solution"
                : "or reveal the worked solution"
              : "write first, then compare with the model answer"}
          </span>
        </div>
      )}

      {revealed && (
        <div className="mt-4 border-l-2 border-l-signal bg-surface-2 px-3 py-3">
          <div className="label mb-1">Worked solution</div>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground">
            {text?.solution ?? numeric?.solution}
          </p>
          {numeric && (
            <p className="value mt-1 text-[12.5px] text-signal">
              answer = {numeric.answer} {numeric.unit}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
