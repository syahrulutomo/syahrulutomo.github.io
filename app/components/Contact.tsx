import { Mail, Phone, MapPin, GitHub, LinkedIn } from "./icons";

const socials = [
  { icon: GitHub, label: "GitHub", href: "https://github.com/syahrulutomo" },
  { icon: LinkedIn, label: "LinkedIn", href: "https://www.linkedin.com/in/syahrul-utomo-ba9661117/" },
  { icon: Mail, label: "Email", href: "mailto:syahrulputomo@gmail.com" },
];

export default function Contact() {
  return (
    <footer id="contact" className="mt-8 bg-accent-soft">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Let&apos;s build something
              <br />
              meaningful <span className="text-accent">together.</span>
            </h2>
            <span className="mt-4 block h-0.5 w-10 bg-accent" />
          </div>

          <div className="space-y-4">
            <a
              href="mailto:syahrulputomo@gmail.com"
              className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-accent"
            >
              <Mail width={18} height={18} className="text-accent" />
              syahrulputomo@gmail.com
            </a>
            <a
              href="tel:+6285712000166"
              className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-accent"
            >
              <Phone width={18} height={18} className="text-accent" />
              +62 857-1200-0166
            </a>
            <p className="flex items-center gap-3 text-sm text-foreground/80">
              <MapPin width={18} height={18} className="text-accent" />
              Cibinong, Bogor, Indonesia
            </p>
          </div>

          <div>
            <h3 className="font-display text-base font-bold">Let&apos;s Connect</h3>
            <div className="mt-4 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background text-foreground transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-accent/15 pt-6 text-center text-sm text-muted">
          © 2026 Syahrul Puji Utomo. All rights reserved. <span className="text-accent">♥</span>
        </div>
      </div>
    </footer>
  );
}
