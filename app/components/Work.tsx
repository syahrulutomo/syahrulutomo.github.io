import { ArrowRight, ExternalLink } from "./icons";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
};

const projects: Project[] = [
  {
    title: "GoFood.id",
    description:
      "Food delivery web platform for GoFood, built and delivered on time.",
    tags: ["Next.js", "Tailwind"],
    image: "/work/gofood.png",
    url: "https://gofood.co.id/en",
  },
  {
    title: "Prima Freshmart E-Commerce",
    description:
      "Online grocery storefront built from scratch and delivered in under 2 months.",
    tags: ["Magento"],
    image: "/work/primafreshmart.png",
    url: "https://primafreshmart.com/",
  },
  {
    title: "Superlive",
    description:
      "Live-streaming & campaign platform with CMS for Djarum Group.",
    tags: ["Laravel", "jQuery", "Sass"],
    image: "/work/superlive.png",
    url: "https://superlive.id/",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Selected Work
          </h2>
          <span className="mt-3 block h-0.5 w-10 bg-accent" />
        </div>
        <a
          href="#work"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-accent"
        >
          View All Projects
          <ArrowRight width={16} height={16} className="text-accent" />
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(0,0,0,0.3)]"
          >
            <div className="aspect-[16/10] overflow-hidden border-b border-border bg-accent-soft">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={`${p.title} website screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold">
                {p.title}
                <ExternalLink
                  width={15}
                  height={15}
                  className="text-accent opacity-0 transition-opacity group-hover:opacity-100"
                />
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-foreground/70">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
