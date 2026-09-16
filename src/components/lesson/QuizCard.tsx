import { useState } from "react";
import type { QuizItem } from "@/data/quizTypes";
import { useUi } from "@/i18n/languageContext";

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
 * A single interactive question card. Owns its own state and reports the
 * unlock moment upward so the lesson player can open the next step.
 * Supports three answer kinds: numeric input, multiple choice, written answer.
 */
export function QuizCard({ item, onSolved }: QuizCardProps) {
  const t = useUi();

  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [attempts, setAttempts] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [solved, setSolved] = useState(false);
  const [shakeKey, setShakeKey] = useState(0);
  const [wrongOptions, setWrongOptions] = useState<number[]>([]);

  const numeric = item.kind === "numeric" ? item : null;
  const choice = item.kind === "choice" ? item : null;

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

  const choose = (index: number) => {
    if (!choice || solved || wrongOptions.includes(index)) return;
    const tried = attempts + 1;
    setAttempts(tried);
    if (index === choice.correctIndex) {
      setStatus("correct");
      settle({ correct: true, revealed: false, attempts: tried });
    } else {
      setStatus("wrong");
      setWrongOptions((prev) => [...prev, index]);
      setShakeKey((k) => k + 1);
    }
  };

  const reveal = () => {
    if (solved) return;
    setRevealed(true);
    setStatus("idle");
    settle({ correct: false, revealed: true, attempts });
  };

  const kindLabel = numeric ? t.numericAnswer : choice ? t.choiceAnswer : t.writtenAnswer;
  const solutionText =
    choice?.solution ?? numeric?.solution ?? (item.kind === "text" ? item.solution : "");

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="label border border-glow/40 px-2 py-0.5 text-glow">{item.id}</span>
        <span className="label">{kindLabel}</span>
        {solved && (
          <span className="label animate-step-pop border border-trace px-2 py-0.5 text-trace">
            {t.stepUnlocked}
          </span>
        )}
      </div>

      <p className="mt-4 text-[17px] leading-relaxed text-foreground">{item.prompt}</p>

      {numeric && (
        <div className="mt-5 flex flex-wrap items-stretch gap-2">
          <input
            className="field"
            style={{ width: 160 }}
            inputMode="decimal"
            placeholder={t.yourAnswer}
            value={value}
            disabled={solved}
            onChange={(e) => {
              setValue(e.target.value);
              setStatus("idle");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
            aria-label={`${t.yourAnswer} — ${numeric.id}`}
          />
          {numeric.unit.length > 0 && (
            <span className="value flex items-center border border-rule bg-surface-2 px-3 text-[13px] text-glow">
              {numeric.unit}
            </span>
          )}
          <button
            type="button"
            className="btn h-8 px-4 disabled:cursor-not-allowed disabled:opacity-40"
            onClick={submit}
            disabled={solved}
          >
            {t.check}
          </button>
        </div>
      )}

      {choice && (
        <ul className="mt-5 space-y-2">
          {choice.options.map((option, index) => {
            const isWrong = wrongOptions.includes(index);
            const isCorrect = solved && index === choice.correctIndex;
            return (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => choose(index)}
                  disabled={solved || isWrong}
                  className={`flex w-full items-start gap-3 border px-4 py-3 text-left text-[14px] leading-relaxed transition-colors ${
                    isCorrect
                      ? "border-trace bg-trace/10 text-trace"
                      : isWrong
                        ? "cursor-not-allowed border-warn/40 text-warn/60 line-through"
                        : "border-rule bg-surface text-muted-foreground hover:border-glow/60 hover:text-foreground"
                  }`}
                >
                  <span className="value shrink-0 pt-0.5 text-[12px] text-glow">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {item.kind === "text" && (
        <textarea
          className="field mt-5 w-full py-2 disabled:cursor-not-allowed disabled:opacity-60"
          style={{ height: "auto", minHeight: 96 }}
          placeholder={t.writeFirst}
          value={value}
          disabled={solved}
          onChange={(e) => setValue(e.target.value)}
          aria-label={t.writtenAnswer}
        />
      )}

      <div
        key={shakeKey}
        className={status === "wrong" && !solved ? "animate-step-shake" : undefined}
      >
        {status === "correct" && (
          <p className="animate-step-pop mt-4 border-l-2 border-l-trace bg-surface-2 px-3 py-2 text-[13.5px] text-trace">
            {t.correctUnlock}
          </p>
        )}
        {status === "wrong" && !solved && (
          <p className="mt-4 border-l-2 border-l-warn bg-surface-2 px-3 py-2 text-[13.5px] text-warn">
            {t.notQuite}
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
            {t.showSolution}
          </button>
          <span className="label">
            {numeric ? (attempts === 0 ? t.tryThenReveal : t.orReveal) : t.writeFirst}
          </span>
        </div>
      )}

      {revealed && (
        <div className="mt-4 border-l-2 border-l-signal bg-surface-2 px-3 py-3">
          <div className="label mb-1">{t.workedSolution}</div>
          <p className="text-[13.5px] leading-relaxed text-muted-foreground">{solutionText}</p>
          {numeric && (
            <p className="value mt-1 text-[12.5px] text-signal">
              {t.answerIs} = {numeric.answer}
              {numeric.unit.length > 0 ? ` ${numeric.unit}` : ""}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
