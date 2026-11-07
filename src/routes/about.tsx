import { createFileRoute } from "@tanstack/react-router";
import { Eye, Target, HandHeart } from "lucide-react";

import unitImg from "@/assets/dialysis-unit.jpg";
import { DonateBand } from "@/components/site/DonateBand";
import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { org } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WSPC — Our Story, Mission & Vision" },
      {
        name: "description",
        content:
          "Founded by Prof. (Dr.) Iffat Yazdani, the Welfare Society for Patient Care helps underprivileged kidney patients in Karachi access life-saving treatment.",
      },
      { property: "og:title", content: "About WSPC — Our Story, Mission & Vision" },
      {
        property: "og:description",
        content: "How a Karachi welfare society became a lifeline for kidney patients across Pakistan.",
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
    text: "To develop a healthy, aware, empowered and equitable society, where essential treatment and medical aid is available across the board.",
  },
  {
    Icon: Target,
    title: "Our mission",
    text: "To expand access to essential, life-saving treatment for kidney patients, and to keep improving the facilities and resources available to them.",
  },
  {
    Icon: HandHeart,
    title: "Our promise",
    text: "Dignified, compassionate care for every patient, and honest, transparent use of every donation we receive.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Treatment shouldn't depend on what you can afford">
        WSPC is a non-profit welfare society in Clifton, Karachi, dedicated to underprivileged
        kidney patients who need regular dialysis to survive.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <SectionHeading eyebrow="Our story" title="Started by a doctor who refused to turn patients away" />
          <div className="mt-6 space-y-4 leading-relaxed text-foreground/85">
            <p>
              {org.name} was founded by <strong>{org.founder}</strong>, a nephrologist who saw
              first-hand how many patients were forced to skip or stop dialysis simply because
              they could not pay for it.
            </p>
            <p>
              The society was formally established in {org.founded} to raise funds and organise
              free treatment for these patients. Its clinical work is carried out in association
              with <strong>{org.hospital}</strong>, where patients receive dialysis, consultations
              and follow-up care.
            </p>
            <p>
              Today WSPC supports over a hundred regular dialysis patients — aged from children to
              the elderly — who travel to Karachi from many parts of Pakistan.
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
