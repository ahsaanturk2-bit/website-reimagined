import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { DonateBand } from "@/components/site/DonateBand";
import { PageHero } from "@/components/site/PageHero";
import { board, org } from "@/lib/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Board — Founder, Directors & Trustees | WSPC" },
      {
        name: "description",
        content:
          "Meet the board of the Welfare Society for Patient Care, led by founder and CEO Prof. Dr Iffat Yazdani.",
      },
      { property: "og:title", content: "Our Board | WSPC" },
      {
        property: "og:description",
        content: "The founder, directors and trustees who guide free dialysis care at WSPC in Karachi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

function initials(name: string) {
  return name
    .replace(/^(Prof\.|Dr|Mr\.?|Mrs)\s+/g, "")
    .replace(/^(Dr|Begum)\s+/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

function TeamPage() {
  const [founder, ...rest] = board;
  return (
    <>
      <PageHero eyebrow="Our board" title="The people who guide WSPC">
        A board of doctors and trustees oversees our work, our finances and the care our patients
        receive.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-[auto_1fr] md:p-12">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-secondary font-display text-5xl font-semibold text-primary">
            {initials(founder.name)}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              {founder.role}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-primary-deep">{founder.name}</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              {founder.name} founded WSPC in {org.founded} to provide free dialysis and medical care
              to people who cannot afford life-saving treatment. She continues to lead the society
              and its work with {org.hospital}.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((m) => (
            <div key={m.name} className="rounded-2xl border border-border bg-card p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary font-display text-xl font-semibold text-primary">
                {initials(m.name)}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-primary-deep">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-primary-deep">Want to help?</h2>
          <p className="mt-4 text-muted-foreground">
            Doctors, students, professionals and fundraisers are always welcome to get involved.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <DonateBand />
    </>
  );
}
