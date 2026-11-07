import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

import { DonateBand } from "@/components/site/DonateBand";
import { PageHero } from "@/components/site/PageHero";
import { testimonials } from "@/lib/site";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Patient Feedback — What Our Patients Say | WSPC" },
      {
        name: "description",
        content:
          "Feedback from patients and families who receive dialysis and care through the Welfare Society for Patient Care in Karachi.",
      },
      { property: "og:title", content: "Patient Feedback | WSPC" },
      {
        property: "og:description",
        content: "Patients and families share their experience of care at WSPC.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <>
      <PageHero eyebrow="Feedback from our patients" title="In their own words">
        Patients and their families tell us what care at WSPC and Clifton Kidney Hospital means to
        them.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft"
          >
            <Quote className="h-9 w-9 text-highlight" />
            <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-primary-deep">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 font-semibold text-foreground">{t.name}</figcaption>
          </figure>
        ))}
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-primary-deep">Has WSPC touched your life?</h2>
          <p className="mt-4 text-muted-foreground">
            We'd love to hear from patients, families and volunteers who would like to share their
            experience.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Share your feedback <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <DonateBand />
    </>
  );
}
