import type { ReactNode } from "react";
import { CodeIcon, Dots } from "./icons";

function Monogram({ children }: { children: ReactNode }) {
  return (
    <span className="font-display text-lg font-bold tracking-tight">{children}</span>
  );
}

const ReactAtom = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
  </svg>
);

const NextMark = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 16V8l8 10" />
    <path d="M15.5 8v6" />
  </svg>
);

const NodeHex = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7Z" />
    <text x="12" y="15.5" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor" stroke="none">JS</text>
  </svg>
);

const TailwindWave = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 10c.8-3 2.5-4 5-4 3 0 3.5 2 5.5 2.5 1.4.3 2.5-.2 3.5-1.5-.8 3-2.5 4-5 4-3 0-3.5-2-5.5-2.5-1.4-.3-2.5.2-3.5 1.5Z" />
    <path d="M2.5 14.5c.8-3 2.5-4 5-4 3 0 3.5 2 5.5 2.5 1.4.3 2.5-.2 3.5-1.5-.8 3-2.5 4-5 4-3 0-3.5-2-5.5-2.5-1.4-.3-2.5.2-3.5 1.5Z" />
  </svg>
);

const AngularShield = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <path d="M12 2.5 20 5l-1.3 11L12 21l-6.7-5L4 5Z" />
    <path d="M9 15.5 12 8l3 7.5M10 13.5h4" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const VueTriangle = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
    <path d="M3 5h4l5 8 5-8h4L12 21Z" />
    <path d="M8 5l4 6 4-6" strokeWidth="1.4" />
  </svg>
);

const skills: { label: string; glyph: ReactNode }[] = [
  { label: "JavaScript", glyph: <CodeIcon width={26} height={26} /> },
  { label: "TypeScript", glyph: <Monogram>TS</Monogram> },
  { label: "React", glyph: <ReactAtom /> },
  { label: "Next.js", glyph: <NextMark /> },
  { label: "Angular", glyph: <AngularShield /> },
  { label: "Vue", glyph: <VueTriangle /> },
  { label: "Node.js", glyph: <NodeHex /> },
  { label: "Tailwind CSS", glyph: <TailwindWave /> },
  { label: "More", glyph: <Dots width={26} height={26} /> },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Skills &amp; Technologies
        </h2>
        <span className="mt-3 block h-0.5 w-10 bg-accent" />

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-9">
          {skills.map((s) => (
            <div
              key={s.label}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_30px_-16px_rgba(255,91,46,0.5)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background text-foreground transition-colors group-hover:text-accent">
                {s.glyph}
              </div>
              <span className="text-xs font-medium text-foreground/80">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
