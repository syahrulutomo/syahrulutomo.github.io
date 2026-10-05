import {
  Rocket,
  Target,
  CodeIcon,
  Sparkle,
  Laptop,
  Book,
} from "./icons";
import { AboutIllustration } from "./illustrations";

const traits = [
  { icon: Rocket, label: "Web Performance" },
  { icon: Target, label: "Observability" },
  { icon: CodeIcon, label: "Clean Code" },
  { icon: Sparkle, label: "AI Features" },
  { icon: Laptop, label: "Multiplatform" },
  { icon: Book, label: "Always Learning" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <AboutIllustration className="mx-auto w-full max-w-sm lg:max-w-md" />
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <span className="mt-3 block h-0.5 w-10 bg-accent" />

          <p className="mt-6 max-w-lg text-[15px] leading-7 text-muted">
            Senior frontend engineer with a strong track record across web
            development. I adapt eagerly to new tech stacks and consistently
            deliver on time — with a deep focus on performance, observability,
            and great user experiences.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-3">
            {traits.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon width={20} height={20} className="shrink-0 text-accent" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
