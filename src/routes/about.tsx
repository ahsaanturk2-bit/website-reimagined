import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, HandHeart } from "lucide-react";

import unitImg from "@/assets/dialysis-unit.jpg";
import { DonateBand } from "@/components/site/DonateBand";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { org } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Who We Are — WSPC, Free Dialysis Since 2009" },
      {
        name: "description",
        content:
          "Founded in 2009 by Prof. Dr Iffat Yazdani, the Welfare Society for Patient Care provides free dialysis and medical care in Karachi. Audited annually by Ernst & Young.",
      },
      { property: "og:title", content: "Who We Are — Welfare Society for Patient Care" },
      {
        property: "og:description",
        content: "A trusted Karachi NGO making sure financial hardship never blocks life-saving care.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    Icon: Eye,
    title: "Our vision",
    text: "A healthier, more equitable society where essential medical care is available to all, regardless of financial status.",
  },
  {
    Icon: Target,
    title: "Our mission",
    text: "To provide free dialysis and medical care to those who cannot afford it — and to build a dedicated kidney treatment hospital for the growing number of patients in need.",
  },
  {
    Icon: HandHeart,
    title: "Transparency",
    text: `Registered under the ${org.registrationAct} (${org.registrationNo}), with our finances audited every year by ${org.auditor}.`,
  },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Who we are" title="Financial hardship should never block life-saving care">
        WSPC is a trusted non-profit in Clifton, Karachi, providing free dialysis and medical care
        to people who cannot afford treatment.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading eyebrow="Our story" title={`A simple, powerful mission since ${org.founded}`} />
          <div className="mt-6 space-y-4 leading-relaxed text-foreground/85">
            <p>
              {org.name} was founded in {org.founded} by <strong>{org.founder}</strong> with one
              aim: to provide free dialysis and medical care to those who cannot afford life-saving
              treatment.
            </p>
            <p>
              Today we sponsor patients through <strong>{org.hospital}</strong>, covering their
              dialysis, medical and surgical treatment.
            </p>
            <p>
              Our work is only possible through the generosity of our donors. Every contribution
              helps us support patients in need.
            </p>
          </div>
        </div>
        <img
          src={unitImg}
          alt="WSPC dialysis treatment area"
          width={1200}
          height={912}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
        />
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading center eyebrow="What guides us" title="Vision, mission and values" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-8">
                <Icon className="h-8 w-8 text-highlight" />
                <h3 className="mt-5 text-2xl font-semibold text-primary-deep">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="WSPC & the hospital" title="How we work together" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-semibold text-primary-deep">{org.name}</h3>
            <p className="mt-3 text-muted-foreground">
              The registered non-profit. WSPC raises Zakat, donations and sponsorships and uses them
              to fund treatment for deserving patients.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-semibold text-primary-deep">{org.hospital}</h3>
            <p className="mt-3 text-muted-foreground">
              The healthcare facility in Clifton where WSPC-supported patients receive dialysis,
              consultations and medical care.
            </p>
          </div>
        </div>
      </section>

      <DonateBand />
    </>
  );
}
