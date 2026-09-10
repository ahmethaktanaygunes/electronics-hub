import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-surface/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-12 max-w-[1360px] items-stretch px-0">
        <Link
          to="/"
          className="flex items-center gap-3 border-r border-rule px-5 hover:bg-surface-2 transition-colors"
        >
          <span className="value text-[15px] font-semibold tracking-tight">
            Electronics with <span className="text-signal">Haktan</span>
          </span>
        </Link>

        <div className="flex items-center border-r border-rule px-4">
          <span className="label text-[10px] border border-signal px-2 py-0.5 text-signal">
            Engineering Workbench
          </span>
        </div>

        <div className="ml-auto flex items-stretch">
          <Link
            to="/"
            hash="curriculum"
            className="flex items-center border-l border-rule px-4 text-[13px] text-muted-foreground hover:bg-surface-2 hover:text-foreground transition-colors"
          >
            Lessons
          </Link>
          <Link
            to="/"
            hash="tools"
            className="flex items-center border-l border-rule px-4 text-[13px] text-muted-foreground hover:bg-surface-2 hover:text-foreground transition-colors"
          >
            Calculators
          </Link>
        </div>
      </div>
    </header>
  );
}
