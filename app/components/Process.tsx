import { Search, Pencil, CodeIcon, Rocket, Chart } from "./icons";

const steps = [
  { icon: Search, num: "01", title: "Discover", desc: "Understand the problem deeply." },
  { icon: Pencil, num: "02", title: "Design", desc: "Plan and craft simple solutions." },
  { icon: CodeIcon, num: "03", title: "Develop", desc: "Write clean code and build features." },
  { icon: Rocket, num: "04", title: "Deploy", desc: "Test thoroughly and launch." },
  { icon: Chart, num: "05", title: "Improve", desc: "Monitor, iterate and improve." },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        My Process
      </h2>
      <span className="mt-3 block h-0.5 w-10 bg-accent" />

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {steps.map(({ icon: Icon, num, title, desc }, i) => (
          <div key={num} className="relative flex flex-col items-center text-center">
            {i < steps.length - 1 && (
              <span className="absolute left-[calc(50%+40px)] top-8 hidden h-px w-[calc(100%-80px)] border-t-2 border-dashed border-border lg:block" />
            )}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon width={26} height={26} />
            </div>
            <p className="mt-4 font-display text-sm font-bold text-accent">{num}</p>
            <h3 className="mt-1 font-display text-base font-bold">{title}</h3>
            <p className="mt-1 max-w-[9rem] text-xs leading-5 text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
