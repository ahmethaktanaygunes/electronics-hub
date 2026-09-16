import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { HElectronicsLogo } from "@/components/HElectronicsLogo";
import { QuizCard, type QuizResult } from "@/components/lesson/QuizCard";
import type { LessonStep } from "@/components/lesson/lessonTypes";
import { useUi } from "@/i18n/languageContext";

export interface LessonPlayerProps {
  steps: LessonStep[];
  lessonId: string;
  /** Lesson title shown on the completion card (already localized). */
  lessonTitle: string;
  /** Learning outcomes listed on the completion card (already localized). */
  outcomes: string[];
  /** Lesson id the "next lesson" button points at. */
  nextLessonId: string;
}

/**
 * Card-by-card lesson engine: one step on screen at a time, a progress bar,
 * Back / Continue navigation and question steps that gate the flow.
 */
export function LessonPlayer({
  steps,
  lessonId,
  lessonTitle,
  outcomes,
  nextLessonId,
}: LessonPlayerProps) {
  const t = useUi();
  const total = steps.length;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [results, setResults] = useState<Record<string, QuizResult>>({});
  const [finished, setFinished] = useState(false);

  const step = steps[index];
  const quizTotal = useMemo(() => steps.filter((entry) => entry.quiz).length, [steps]);

  const resultsList = Object.values(results);
  const solvedCount = resultsList.length;
  const correctCount = resultsList.filter((r) => r.correct).length;
  const revealedCount = resultsList.filter((r) => r.revealed).length;

  const gateOpen = !step || !step.quiz || Boolean(results[step.id]);

  const goNext = useCallback(() => {
    if (finished || !gateOpen) return;
    setIndex((current) => {
      if (current >= total - 1) {
        setFinished(true);
        return current;
      }
      setDirection("next");
      return current + 1;
    });
  }, [finished, gateOpen, total]);

  const goPrev = useCallback(() => {
    setIndex((current) => {
      if (current === 0) return current;
      setDirection("prev");
      return current - 1;
    });
  }, []);

  const restart = () => {
    setResults({});
    setFinished(false);
    setDirection("next");
    setIndex(0);
  };

  const solve = useCallback((id: string, result: QuizResult) => {
    setResults((prev) => ({ ...prev, [id]: result }));
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [index, finished]);

  if (!step) return null;

  const progress = finished ? 100 : Math.round((index / total) * 100);
  const isLast = index === total - 1;
  const outcomeHalf = Math.ceil(outcomes.length / 2);
  const outcomeColumns = [outcomes.slice(0, outcomeHalf), outcomes.slice(outcomeHalf)];

  const nextClasses = gateOpen
    ? "border-glow bg-glow/15 text-glow shadow-[0_0_24px_-6px_rgba(34,211,238,0.8)] hover:bg-glow/25"
    : "cursor-not-allowed border-rule bg-surface text-muted-foreground/60";

  return (
    <div className="bg-background pb-16">
      {/* Sticky progress header */}
      <div className="sticky top-12 z-20 border-b border-rule bg-surface/95 backdrop-blur-[2px]">
        <div className="mx-auto max-w-[980px] px-4 py-3 sm:px-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link
              to="/"
              hash="curriculum"
              className="label transition-colors hover:text-foreground"
            >
              ← {t.lessonIndex}
            </Link>
            <span className="label border border-glow/40 px-2 py-0.5 whitespace-nowrap text-glow">
              {finished ? t.complete : step.section}
            </span>
            <span className="value text-[12px] whitespace-nowrap text-muted-foreground">
              {t.stepCounter(finished ? total : index + 1, total)}
            </span>
          </div>

          <div
            className="mt-2.5 h-1.5 w-full overflow-hidden rounded-[3px] bg-surface-2"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Lesson progress"
          >
            <div
              className="h-full rounded-[3px] bg-gradient-to-r from-[#06b6d4] to-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.6)] transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[980px] px-4 pt-8 sm:px-5">
        <div
          key={finished ? "summary" : step.id}
          className={direction === "next" ? "animate-step-next" : "animate-step-prev"}
        >
          <article className="panel">
            <div className="panel-head">
              <span>{finished ? t.complete : `${step.section} · LES-${lessonId}`}</span>
              <span className="value text-[11px] text-muted-foreground">
                {finished ? `${correctCount}/${quizTotal}` : `${index + 1}/${total}`}
              </span>
            </div>

            <div className="px-5 py-6 sm:px-8 sm:py-8">
              {finished ? (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <HElectronicsLogo size={44} title="" animated />
                    <div>
                      <p className="label">{t.lessonFinished}</p>
                      <h2 className="text-[24px] leading-tight font-semibold tracking-tight">
                        {lessonTitle}
                      </h2>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 border-t border-l border-rule sm:grid-cols-3">
                    {[
                      [t.stepsCompleted, `${total}`, t.stepsCompletedHint],
                      [t.answersCorrect, `${correctCount} / ${quizTotal}`, t.answersCorrectHint],
                      [t.solutionsRevealed, `${revealedCount}`, t.solutionsRevealedHint],
                    ].map(([k, v, hint]) => (
                      <div
                        key={k}
                        className="-mt-px -ml-px border-t border-l border-rule px-4 py-4"
                      >
                        <div className="label">{k}</div>
                        <div className="value mt-1 text-[24px] text-glow">{v}</div>
                        <div className="mt-1 text-[12px] text-muted-foreground">{hint}</div>
                      </div>
                    ))}
                  </div>

                  <div className="panel">
                    <div className="panel-head">
                      <span>{t.whatYouCanDo}</span>
                      <span className="value text-[11px]">LES-{lessonId}</span>
                    </div>
                    <div className="grid grid-cols-1 divide-y divide-rule md:grid-cols-2 md:divide-x md:divide-y-0">
                      {outcomeColumns.map((column, columnIndex) => (
                        <ul key={columnIndex} className="space-y-2 px-4 py-4">
                          {column.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2 text-[13.5px] text-muted-foreground"
                            >
                              <span className="value shrink-0 text-trace">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={restart}
                      className="inline-flex h-11 items-center gap-2 border border-glow bg-glow/15 px-6 font-mono text-[12px] tracking-[0.06em] text-glow uppercase transition-colors hover:bg-glow/25"
                    >
                      ↺ {t.restartLesson}
                    </button>
                    <Link
                      to="/"
                      hash="curriculum"
                      className="inline-flex h-11 items-center gap-2 border border-rule bg-surface px-6 font-mono text-[12px] tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:border-rule-strong hover:text-foreground"
                    >
                      {t.backToLessonIndex}
                    </Link>
                    <Link
                      to="/lessons/$lessonId"
                      params={{ lessonId: nextLessonId }}
                      className="inline-flex h-11 items-center gap-2 border border-rule bg-surface px-6 font-mono text-[12px] tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:border-rule-strong hover:text-foreground"
                    >
                      {t.nextLesson} →
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-[24px] leading-tight font-semibold tracking-tight">
                    {step.title}
                  </h2>
                  {step.subtitle && (
                    <p className="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">
                      {step.subtitle}
                    </p>
                  )}
                  <div className="mt-6">
                    {step.quiz ? (
                      <QuizCard
                        key={step.id}
                        item={step.quiz}
                        onSolved={(result) => solve(step.id, result)}
                      />
                    ) : (
                      step.content
                    )}
                  </div>
                </>
              )}
            </div>
          </article>

          {!finished && (
            <nav className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={goPrev}
                disabled={index === 0}
                className="inline-flex h-11 items-center gap-2 border border-rule bg-surface px-5 font-mono text-[12px] tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:border-rule-strong hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← {t.back}
              </button>

              <span className="label order-last w-full text-center sm:order-none sm:w-auto">
                {gateOpen ? t.hintKeyboard : t.hintLocked}
              </span>

              <button
                type="button"
                onClick={goNext}
                disabled={!gateOpen}
                className={`inline-flex h-11 items-center gap-2 border px-6 font-mono text-[12px] tracking-[0.06em] uppercase transition-all duration-200 ${nextClasses}`}
              >
                {isLast ? t.finishLesson : t.continueLabel} →
              </button>
            </nav>
          )}

          <p className="mt-4 text-center text-[12px] text-muted-foreground">
            {t.solvedCounter(solvedCount, quizTotal)}
          </p>
        </div>
      </div>
    </div>
  );
}
