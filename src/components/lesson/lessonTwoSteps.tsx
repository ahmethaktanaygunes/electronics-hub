import { Link } from "@tanstack/react-router";
import type { QuizItem } from "@/data/quizTypes";
import { LESSON_TWO_COPY, LESSON_TWO_QUESTIONS, type LocalizedQuestion } from "@/i18n/lesson2";
import type { Lang } from "@/i18n/lang";
import { Bullets, InfoCard } from "@/components/lesson/lessonUi";
import type { LessonStep } from "@/components/lesson/lessonTypes";
import { ParallelSchematic, SeriesSchematic } from "@/components/lesson/CircuitSchematics";
import { ObservationChecklist } from "@/components/lesson/ObservationChecklist";
import { ObservationPanel } from "@/components/lesson/ObservationPanel";

/** Turns a bilingual question definition into a single-language quiz item. */
export function toQuizItem(question: LocalizedQuestion, lang: Lang): QuizItem {
  if (question.kind === "numeric") {
    const copy = lang === "en" ? question.en : question.tr;
    return {
      id: question.id,
      kind: "numeric",
      prompt: copy.prompt,
      solution: copy.solution,
      unit: question.unit,
      answer: question.answer,
      tolerance: question.tolerance,
    };
  }
  if (question.kind === "choice") {
    const copy = lang === "en" ? question.en : question.tr;
    return {
      id: question.id,
      kind: "choice",
      prompt: copy.prompt,
      solution: copy.solution,
      options: copy.options,
      correctIndex: question.correctIndex,
    };
  }
  const copy = lang === "en" ? question.en : question.tr;
  return { id: question.id, kind: "text", prompt: copy.prompt, solution: copy.solution };
}

/**
 * Builds the Lesson 2 step flow for one language. Card order:
 * objectives → series → parallel → observation → 10 questions → outcomes.
 */
export function buildLessonTwoSteps(lang: Lang): LessonStep[] {
  const c = LESSON_TWO_COPY[lang];

  const questionSteps: LessonStep[] = LESSON_TWO_QUESTIONS.map((question) => ({
    id: `l2-${question.id}`,
    section: c.quiz.section,
    title: c.quiz.title,
    quiz: toQuizItem(question, lang),
  }));

  return [
    {
      id: "l2-objectives",
      section: c.label,
      title: c.objectives.title,
      subtitle: c.objectives.subtitle,
      content: (
        <div className="space-y-4">
          <InfoCard title={c.objectives.aimTitle} note={c.label}>
            <p className="text-[14px] leading-relaxed text-muted-foreground">{c.objectives.aim}</p>
          </InfoCard>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InfoCard title={c.objectives.topicsTitle} note={String(c.objectives.topics.length)}>
              <ul className="space-y-2.5">
                {c.objectives.topics.map((topic, index) => (
                  <li key={topic} className="flex gap-2.5 text-[14px] text-muted-foreground">
                    <span className="value shrink-0 text-glow">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            <InfoCard title={c.objectives.flowTitle} note={c.label}>
              <Bullets items={c.objectives.flow} />
            </InfoCard>
          </div>
        </div>
      ),
    },

    {
      id: "l2-series",
      section: c.label,
      title: c.series.title,
      subtitle: c.series.subtitle,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(260px,320px)_1fr]">
            <InfoCard title={c.series.title} note="SW1 · L1 · L2">
              <SeriesSchematic ariaLabel={`${c.series.title} — L1, L2, SW1`} />
            </InfoCard>

            <div className="space-y-4">
              <Bullets items={c.series.body} />
              <InfoCard title={c.series.ruleTitle} note={String(c.series.rules.length)}>
                <Bullets items={c.series.rules} marker="■" />
              </InfoCard>
            </div>
          </div>

          <InfoCard title={c.series.exampleTitle} note="9 V">
            <p className="text-[14px] leading-relaxed text-muted-foreground">{c.series.example}</p>
            <p className="mt-2 border-l-2 border-l-glow pl-3 text-[13.5px] text-glow">
              {c.series.exampleNote}
            </p>
          </InfoCard>
        </div>
      ),
    },

    {
      id: "l2-parallel",
      section: c.label,
      title: c.parallel.title,
      subtitle: c.parallel.subtitle,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(260px,320px)_1fr]">
            <InfoCard title={c.parallel.title} note="SW1 · L1 ∥ L2">
              <ParallelSchematic
                ariaLabel={`${c.parallel.title} — L1 and L2 on separate branches`}
              />
            </InfoCard>

            <div className="space-y-4">
              <Bullets items={c.parallel.body} />
              <InfoCard title={c.parallel.ruleTitle} note={String(c.parallel.rules.length)}>
                <Bullets items={c.parallel.rules} marker="■" />
              </InfoCard>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InfoCard title={c.parallel.exampleTitle} note="L1 ∥ L2">
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                {c.parallel.example}
              </p>
            </InfoCard>
            <InfoCard title={c.parallel.noteTitle} note="230 V">
              <p className="text-[14px] leading-relaxed text-muted-foreground">{c.parallel.note}</p>
            </InfoCard>
          </div>
        </div>
      ),
    },

    {
      id: "l2-observation",
      section: c.label,
      title: c.observation.title,
      subtitle: c.observation.subtitle,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <ObservationPanel
              data={c.observation.circuitA}
              schematic={<SeriesSchematic ariaLabel={c.observation.circuitA.name} />}
            />
            <ObservationPanel
              data={c.observation.circuitB}
              schematic={<ParallelSchematic ariaLabel={c.observation.circuitB.name} />}
            />
          </div>

          <ObservationChecklist
            title={c.observation.checklistTitle}
            note={c.observation.checklistNote}
            items={c.observation.checklist}
          />
        </div>
      ),
    },

    ...questionSteps,

    {
      id: "l2-outcomes",
      section: c.outcomes.title,
      title: c.outcomes.title,
      subtitle: c.outcomes.subtitle,
      content: (
        <div className="space-y-5">
          <InfoCard title={c.outcomes.title} note={`${c.outcomes.items.length} ${c.label}`}>
            <ul className="space-y-2.5">
              {c.outcomes.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[14px] leading-relaxed text-muted-foreground"
                >
                  <span className="value shrink-0 text-trace">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </InfoCard>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/"
              hash="curriculum"
              className="inline-flex h-11 items-center gap-2 border border-rule bg-surface px-6 font-mono text-[12px] tracking-[0.06em] text-muted-foreground uppercase transition-colors hover:border-rule-strong hover:text-foreground"
            >
              ← {c.outcomes.indexLabel}
            </Link>
            <Link
              to="/lessons/$lessonId"
              params={{ lessonId: "03" }}
              className="inline-flex h-11 items-center gap-2 border border-glow bg-glow/15 px-6 font-mono text-[12px] tracking-[0.06em] text-glow uppercase shadow-[0_0_24px_-6px_rgba(34,211,238,0.8)] transition-colors hover:bg-glow/25"
            >
              {c.outcomes.nextLabel} →
            </Link>
          </div>

          <p className="text-[12.5px] text-muted-foreground">{c.outcomes.nextHint}</p>
        </div>
      ),
    },
  ];
}
