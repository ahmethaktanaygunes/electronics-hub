import type { ComponentType } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { HElectronicsLogo } from "@/components/HElectronicsLogo";
import { LessonOne } from "@/components/lesson/LessonOne";
import { LessonTwo } from "@/components/lesson/LessonTwo";
import { getLessonById, lessonText, type Lesson, type LessonTopic } from "@/data/lessons";
import { useLanguage, useUi } from "@/i18n/languageContext";

/** Lessons that render the card-by-card step player. Everything else shows its syllabus. */
const LESSON_VIEWS: Record<string, ComponentType> = {
  "01": LessonOne,
  "02": LessonTwo,
};

export const Route = createFileRoute("/lessons/$lessonId")({
  loader: ({ params }): { lesson: Lesson } => {
    const lesson = getLessonById(params.lessonId);
    if (!lesson) throw notFound();
    return { lesson };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: lessonData(loaderData)?.title
          ? `${lessonData(loaderData)!.title} — Electronics with Haktan`
          : "Lesson — Electronics with Haktan",
      },
      {
        name: "description",
        content:
          lessonData(loaderData)?.summary ??
          "Structured basic electronics lessons with interactive simulations and graded practice.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LessonPage,
});

type LessonLoaderData = { lesson: Lesson } | undefined;

function lessonData(data: unknown): Lesson | undefined {
  return (data as LessonLoaderData)?.lesson;
}

function LessonPage() {
  const { lesson } = Route.useLoaderData() as { lesson: Lesson };
  const t = useUi();
  const { lang } = useLanguage();
  const text = lessonText(lesson, lang);
  const View = LESSON_VIEWS[lesson.id];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {!View && (
          <header className="border-b border-rule">
            <div className="mx-auto max-w-[1360px] px-5 py-10">
              <nav className="flex flex-wrap items-center gap-2 text-[12px] text-muted-foreground">
                <Link to="/" className="hover:text-foreground">
                  Home
                </Link>
                <span className="value">/</span>
                <Link to="/" hash="curriculum" className="hover:text-foreground">
                  {t.navLessons}
                </Link>
                <span className="value">/</span>
                <span className="value text-signal">{lesson.id}</span>
              </nav>

              <div className="mt-4 flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-4">
                <div>
                  <p className="label">
                    Module {lesson.id} · {t.levels[lesson.level]}
                  </p>
                  <h1 className="mt-2 max-w-[30ch] text-[30px] leading-[1.12] font-semibold tracking-tight md:text-[36px]">
                    {text.title}
                  </h1>
                  <p className="mt-2 max-w-[70ch] text-[15px] text-muted-foreground">
                    {text.summary}
                  </p>
                </div>
                <span className="label border border-rule px-2 py-1 whitespace-nowrap">
                  {lesson.minutes} {t.minAbbrev}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 border-t border-l border-rule sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Topics", lesson.syllabus.topics.title],
                  ["Component", lesson.syllabus.component.title],
                  ["Law", lesson.syllabus.law.title],
                  ["Circuit", lesson.syllabus.circuit.title],
                ].map(([k, v]) => (
                  <div key={k} className="-mt-px -ml-px border-t border-l border-rule px-4 py-3">
                    <div className="label">{k}</div>
                    <div className="mt-1 text-[13px] text-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </header>
        )}

        {View ? (
          <View />
        ) : (
          <section className="border-b border-rule">
            <div className="mx-auto max-w-[1360px] px-5 py-12">
              <div className="panel">
                <div className="panel-head">
                  <span>Syllabus · module {lesson.id}</span>
                  <span>{t.comingSoon}</span>
                </div>
                <div className="grid grid-cols-1 gap-6 px-4 py-4 md:grid-cols-2">
                  {Object.values(lesson.syllabus).map((block: LessonTopic) => (
                    <div key={block.title}>
                      <h3 className="text-[15px] font-semibold tracking-tight">{block.title}</h3>
                      <ul className="mt-2 space-y-1">
                        {block.items.map((item) => (
                          <li key={item} className="text-[13.5px] text-muted-foreground">
                            ▸ {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-[14px] text-muted-foreground">
                This module is not published yet. Lesson 1 is fully available now.
              </p>
            </div>
          </section>
        )}
      </main>
      <footer className="border-t border-rule bg-surface-2">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-3 px-5 py-6">
          <span className="flex items-center gap-2">
            <HElectronicsLogo size={20} title="" glow={false} />
            <span className="value text-[13px] font-semibold">
              Electronics with <span className="text-signal">Haktan</span>
            </span>
          </span>
          <Link to="/" hash="curriculum" className="label hover:text-foreground">
            ← Back to lesson index
          </Link>
          <span className="label">Track: Basic Electronics · doc rev 1.0</span>
        </div>
      </footer>
    </div>
  );
}
