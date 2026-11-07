import { Link } from "@tanstack/react-router";
import { Heart, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { navLinks, org } from "@/lib/site";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={`${org.name} home`}>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full ${
          inverted ? "bg-primary-foreground text-primary-deep" : "bg-primary text-primary-foreground"
        }`}
      >
        <Heart className="h-5 w-5" fill="currentColor" />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-xl font-semibold ${inverted ? "text-primary-foreground" : "text-primary-deep"}`}
        >
          WSPC
        </span>
        <span
          className={`block text-[11px] uppercase tracking-[0.14em] ${inverted ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        >
          Welfare Society for Patient Care
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="hidden bg-primary-deep text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <span>Free dialysis for underprivileged kidney patients · Clifton, Karachi</span>
          <a href={org.phoneHref} className="flex items-center gap-1.5 hover:underline">
            <Phone className="h-3.5 w-3.5" /> {org.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary-deep"
              activeProps={{ className: "bg-secondary text-primary-deep" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/donate"
            className="hidden rounded-full bg-highlight px-5 py-2.5 text-sm font-semibold text-highlight-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Donate now
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 pb-6 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  className="block border-b border-border py-3 text-base font-medium"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/donate"
            onClick={() => setOpen(false)}
            className="mt-4 flex justify-center rounded-full bg-highlight px-5 py-3 font-semibold text-highlight-foreground"
          >
            Donate now
          </Link>
        </nav>
      )}
    </header>
  );
}
