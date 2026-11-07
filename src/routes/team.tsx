import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Stethoscope, Syringe, Users } from "lucide-react";

import { DonateBand } from "@/components/site/DonateBand";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { org } from "@/lib/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Doctors, Nurses & Volunteers | WSPC" },
      {
        name: "description",
        content:
          "Meet the founder, doctors, dialysis staff and volunteers behind the Welfare Society for Patient Care in Karachi.",
      },
      { property: "og:title", content: "Our Team | WSPC" },
      {
        property: "og:description",
        content: "The people who keep free dialysis running for kidney patients in Karachi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

const groups = [
  {
    Icon: Stethoscope,
    title: "Doctors & nephrologists",
    text: "Kidney specialists who assess every patient, plan treatment and follow their progress.",
  },
  {
    Icon: Syringe,
    title: "Dialysis nurses & technicians",
    text: "Trained staff who run every session safely and look after patients in the chair.",
  },
  {
    Icon: HeartHandshake,
    title: "Patient welfare team",
    text: "Staff who handle patient assessments, scheduling and support for families.",
  },
  {
    Icon: Users,
    title: "Volunteers & supporters",
    text: "Friends of WSPC in Pakistan and abroad who raise funds and awareness.",
  },
];

function TeamPage() {
  return (
    <>
      <PageHero eyebrow="Our team" title="The people behind every session">
        A dedicated group of doctors, nurses, staff and volunteers working for patients who have
        nowhere else to go.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-[auto_1fr] md:p-12">
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-secondary font-display text-5xl font-semibold text-primary">
            IY
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Founder
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-primary-deep">{org.founder}</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Prof. (Dr.) Iffat Yazdani founded WSPC to make sure that no kidney patient is denied
              dialysis because of poverty. She continues to lead the society and its work with{" "}
              {org.hospital}.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Who does what" title="Our care team" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-7">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-xl font-semibold text-primary-deep">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-primary-deep">Want to volunteer?</h2>
        <p className="mt-4 text-muted-foreground">
          Doctors, students, professionals and fundraisers are always welcome to help.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3"
        >
          Get in touch <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <DonateBand />
    </>
  );
}
