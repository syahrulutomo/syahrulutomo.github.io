"use client";

import { useState } from "react";
import { ArrowRight } from "./icons";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-display text-2xl font-extrabold tracking-tight">
          S<span className="text-accent">U.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Let&apos;s Talk
          <ArrowRight width={16} height={16} className="text-accent" />
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-foreground transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-foreground transition-all ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-foreground transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border bg-background transition-[max-height] duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent-soft hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background"
            >
              Let&apos;s Talk
              <ArrowRight width={16} height={16} className="text-accent" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
