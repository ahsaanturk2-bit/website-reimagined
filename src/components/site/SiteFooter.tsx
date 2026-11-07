import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/site/SiteHeader";
import { navLinks, org } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            A non-profit welfare society providing free dialysis, medicines and care to kidney
            patients who cannot afford treatment — in association with {org.hospital}.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: org.social.facebook, label: "Facebook", Icon: Facebook },
              { href: org.social.instagram, label: "Instagram", Icon: Instagram },
              { href: org.social.linkedin, label: "LinkedIn", Icon: Linkedin },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/25 transition-colors hover:bg-primary-foreground hover:text-primary-deep"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-primary-foreground/80 md:grid-cols-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-foreground hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/donate" className="hover:text-primary-foreground hover:underline">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {org.address}
            </li>
            <li>
              <a href={org.phoneHref} className="flex gap-3 hover:text-primary-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                {org.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${org.email}`} className="flex gap-3 hover:text-primary-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                {org.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {org.name}. All rights reserved.
          </span>
          <span>Registered non-profit · Karachi, Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
