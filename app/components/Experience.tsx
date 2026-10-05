const items = [
  {
    period: "May 2025 – Present",
    role: "SDE II Web",
    org: "Halodoc",
    desc: "Single-handedly build & maintain the B2B Pharmacy webapps (Principal, Distributor & Merchant portals) and their BFF services. Shipped AI features end-to-end — OCR Order, the Principal AI concierge, and Mercia for merchants — and built the “No Green, No MR” Core Web Vitals pipeline, growing Search Console “Good” mobile URLs from ~487 to ~18,680.",
  },
  {
    period: "Aug 2023 – May 2025",
    role: "Senior Frontend Engineer",
    org: "Pintar Ventura Group",
    desc: "Developed the Klikoo (PPOB) and Klikoo Business dashboards. Led Web Performance, Clean Code, Observability & CI/CD, migrated the codebase to MVVM, and cut Internal Dashboard load from 13s+ to under 4s via Service Workers.",
  },
  {
    period: "Apr 2023 – Aug 2023",
    role: "Frontend Engineer",
    org: "Aleph Labs",
    desc: "Built a Hospital Information System for Siloam Hospital and the Astra Internal Dashboard that streamlined the KYC process for FIF users.",
  },
  {
    period: "Jul 2022 – Apr 2023",
    role: "Web Platform Engineer",
    org: "Tokopedia",
    desc: "Improved HomeCarouselWidget CLS from 2+ to under 0.1, owned the Recommendation Module, and refactored the Tokopedia Lite homepage to 90% coverage with better Core Web Vitals.",
  },
  {
    period: "Sep 2022 – Dec 2022",
    role: "Frontend Engineer",
    org: "GoFood",
    desc: "Delivered gofood.co.id on time and contributed feedback during design reviews.",
  },
  {
    period: "Sep 2021 – Jun 2022",
    role: "Senior Web Developer",
    org: "LinkAja",
    desc: "Built reconciliation tools to improve the recon process across payment channels.",
  },
  {
    period: "Sep 2020 – Sep 2021",
    role: "Frontend Engineer",
    org: "Weekendinc",
    desc: "Built e-commerce platforms (Sharp, Prima Freshmart, CnF) on Magento from scratch in under 2 months, plus Superlive.com and its CMS in Laravel for Djarum Group.",
  },
  {
    period: "Sep 2019 – May 2020",
    role: "Frontend Engineer",
    org: "Medigo Indonesia",
    desc: "Developed and maintained all frontend products using Nuxt, Vuetify, Vuex, Stylus, jQuery, and Laravel.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h2>
        <span className="mt-3 block h-0.5 w-10 bg-accent" />

        <ol className="mt-12 ml-1.5 space-y-10 border-l-2 border-border pl-8">
          {items.map(({ period, role, org, desc }) => (
            <li key={`${org}-${period}`} className="relative">
              <span className="absolute -left-[41px] top-1 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent" />
              <p className="text-sm font-semibold text-accent">{period}</p>
              <h3 className="mt-1 font-display text-lg font-bold">
                {role}
                <span className="font-sans text-base font-medium text-foreground/70">
                  {" · "}
                  {org}
                </span>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
