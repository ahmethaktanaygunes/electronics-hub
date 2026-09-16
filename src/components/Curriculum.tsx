import { Link } from "@tanstack/react-router";
import { LESSONS, lessonText, type Lesson } from "@/data/lessons";
import { useLanguage, useUi } from "@/i18n/languageContext";

export function Curriculum({ lessons = LESSONS }: { lessons?: Lesson[] }) {
  const t = useUi();
  const { lang } = useLanguage();

  return (
    <section id="curriculum" className="border-b border-rule">
      <div className="mx-auto max-w-[1360px] px-5 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-4">
          <div>
            <p className="label">Section 03 · {t.lessonIndex}</p>
            <h2 className="mt-1 text-[26px] font-semibold tracking-tight">{t.curriculumTitle}</h2>
            <p className="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">
              {t.curriculumLead}
            </p>
          </div>
          <span className="label border border-rule px-2 py-1">
            {lessons.length.toString().padStart(2, "0")} {t.modules}
          </span>
        </div>

        <ol className="mt-6 border-t border-rule">
          {lessons.map((lesson) => {
            const text = lessonText(lesson, lang);
            return (
              <li
                key={lesson.id}
                className="flex flex-col gap-3 border-b border-rule px-1 py-5 transition-colors hover:bg-surface md:flex-row md:items-center md:gap-6 md:px-4"
              >
                <span className="value w-10 shrink-0 text-[18px] font-semibold text-signal">
                  {lesson.id}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[16px] font-semibold tracking-tight">{text.title}</h3>
                  <p className="mt-1 max-w-[80ch] text-[13.5px] text-muted-foreground">
                    {text.summary}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="label whitespace-nowrap border border-rule px-2 py-1">
                    {lesson.minutes} {t.minAbbrev} · {t.levels[lesson.level]}
                  </span>
                  {lesson.published ? (
                    <Link
                      to="/lessons/$lessonId"
                      params={{ lessonId: lesson.slug }}
                      className="btn btn-active whitespace-nowrap"
                    >
                      {t.startLesson}
                    </Link>
                  ) : (
                    <span className="btn cursor-not-allowed whitespace-nowrap opacity-60">
                      {t.comingSoon}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
