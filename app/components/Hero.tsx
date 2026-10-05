import { ArrowRight, Download } from "./icons";
import { HeroIllustration } from "./illustrations";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:px-8 sm:pt-20 lg:pt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">
        {/* Text */}
        <div className="reveal">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-0.5 w-8 bg-accent" />
            <span className="text-sm font-medium text-muted">Hi, I&apos;m</span>
          </div>

          <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Syahrul <span className="text-accent">Utomo</span>
          </h1>

          <p className="mt-4 font-display text-lg font-semibold text-foreground/90 sm:text-xl">
            Senior Frontend Engineer
          </p>

          <p className="mt-5 max-w-md text-[15px] leading-7 text-muted">
            I build fast, reliable web experiences across many stacks. Passionate
            about web performance, observability, and multiplatform development —
            adapting eagerly to new tech and consistently delivering on time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(255,91,46,0.7)] transition-transform hover:scale-[1.03]"
            >
              View My Work
              <ArrowRight width={17} height={17} />
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Download CV
              <Download width={17} height={17} />
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="reveal order-first lg:order-none" style={{ animationDelay: "120ms" }}>
          <HeroIllustration className="mx-auto w-full max-w-md lg:max-w-none" />
        </div>
      </div>
    </section>
  );
}
