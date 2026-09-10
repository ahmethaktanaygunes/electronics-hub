import { Link } from "@tanstack/react-router";
import { LESSONS, type Lesson } from "@/data/lessons";

export function Curriculum({ lessons = LESSONS }: { lessons?: Lesson[] }) {
  return (
    <section id="curriculum" className="border-b border-rule">
      <div className="mx-auto max-w-[1360px] px-5 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-rule pb-4">
          <div>
            <p className="label">Section 03 · Lesson index</p>
            <h2 className="mt-1 text-[26px] font-semibold tracking-tight">
              Basic Electronics curriculum
            </h2>
            <p className="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">
              Modules are ordered by dependency. Each lesson opens with a derivation and ends with a
              circuit you can measure on the bench.
            </p>
          </div>
          <span className="label border border-rule px-2 py-1">
            {lessons.length.toString().padStart(2, "0")} modules
          </span>
        </div>

        <ol className="mt-6 border-t border-rule">
          {lessons.map((l) => (
            <li
              key={l.id}
              className="flex flex-col gap-3 border-b border-rule px-1 py-5 transition-colors hover:bg-surface md:flex-row md:items-center md:gap-6 md:px-4"
            >
              <span className="value w-10 shrink-0 text-[18px] font-semibold text-signal">
                {l.id}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-[16px] font-semibold tracking-tight">{l.title}</h3>
                <p className="mt-1 max-w-[80ch] text-[13.5px] text-muted-foreground">{l.summary}</p>
              </div>

              <div className="flex shrink-0 items-center gap-3">
                <span className="label whitespace-nowrap border border-rule px-2 py-1">
                  {l.minutes} min · {l.level}
                </span>
                {l.published ? (
                  <Link
                    to="/lessons/$lessonId"
                    params={{ lessonId: l.slug }}
                    className="btn btn-active whitespace-nowrap"
                  >
                    Start Lesson
                  </Link>
                ) : (
                  <span className="btn whitespace-nowrap cursor-not-allowed opacity-60">
                    Coming soon
                  </span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
