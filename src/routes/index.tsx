import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Curriculum } from "@/components/Curriculum";
import { ResistorCalculator } from "@/components/tools/ResistorCalculator";
import { OhmsLaw } from "@/components/tools/OhmsLaw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electronics with Haktan — Basic Electronics Engineering Workbench" },
      {
        name: "description",
        content:
          "A dark technical workbench for basic electronics: interactive voltage divider, resistor colour-code, Ohm's law simulation and complete lesson modules.",
      },
      {
        property: "og:title",
        content: "Electronics with Haktan — Basic Electronics Engineering Workbench",
      },
      {
        property: "og:description",
        content:
          "Interactive basic electronics reference: Ohm's law simulator, resistor calculators, voltage divider workbench, and structured engineering curriculum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Approach />
        <Curriculum />
        <Tools />
      </main>
      <Footer />
    </div>
  );
}

function Approach() {
  const items = [
    [
      "01",
      "Derive before you simulate",
      "Each concept starts from the governing equation and a hand-calculated component value. Simulation only checks the derivation.",
    ],
    [
      "02",
      "Every value is measurable",
      "Each circuit is drawn so it can be built on a breadboard and probed, then compared against the predicted node voltages.",
    ],
    [
      "03",
      "Tolerances are part of the answer",
      "E-series rounding, resistor tolerance and power derating are treated as first-class design inputs, not footnotes.",
    ],
  ];

  return (
    <section className="border-b border-rule bg-surface">
      <div className="mx-auto max-w-[1360px] px-5 py-10">
        <p className="label">Section 02 · Method</p>
        <div className="mt-4 grid grid-cols-1 border-t border-l border-rule md:grid-cols-3">
          {items.map(([n, t, d]) => (
            <article key={n} className="-mt-px -ml-px border-t border-l border-rule p-5">
              <span className="value text-[12px] text-signal">{n}</span>
              <h3 className="mt-2 text-[16px] font-semibold tracking-tight">{t}</h3>
              <p className="mt-2 text-[13.5px] text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section id="tools" className="border-b border-rule">
      <div className="mx-auto max-w-[1360px] px-5 py-12">
        <div className="border-b border-rule pb-4">
          <p className="label">Section 04 · Interactive workbench</p>
          <h2 className="mt-1 text-[26px] font-semibold tracking-tight">
            Basic electronics calculators
          </h2>
          <p className="mt-2 max-w-[70ch] text-[14px] text-muted-foreground">
            Live tools for the fundamentals. Enter measured or specified values; results update as
            you type.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <ResistorCalculator />
          <OhmsLaw />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-rule">
      <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-3 px-5 py-6">
        <span className="value text-[13px] font-semibold">
          Electronics with <span className="text-signal">Haktan</span>
        </span>
        <span className="label">Engineering Workbench · Practical Circuit Analysis</span>
        <span className="label">Track: Basic Electronics · doc rev 1.0</span>
      </div>
    </footer>
  );
}
