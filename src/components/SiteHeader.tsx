import { Link } from "@tanstack/react-router";
import { HElectronicsLogo } from "@/components/HElectronicsLogo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-surface/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-12 max-w-[1360px] items-stretch px-0">
        <Link
          to="/"
          className="group flex items-center gap-2.5 border-r border-rule px-4 transition-colors hover:bg-surface-2 sm:px-5"
        >
          <HElectronicsLogo
            size={26}
            title=""
            className="shrink-0 transition-transform duration-300 group-hover:scale-[1.06]"
          />
          <span className="value text-[14px] font-semibold whitespace-nowrap tracking-tight sm:text-[15px]">
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
