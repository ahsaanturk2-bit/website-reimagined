import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";

import motherSonImg from "@/assets/mother-son.jpg";
import heroImg from "@/assets/hero-dialysis-care.jpg";
import physioImg from "@/assets/physiotherapy.jpg";
import { DonateBand } from "@/components/site/DonateBand";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Patient Stories — Lives Kept Going by Dialysis | WSPC" },
      {
        name: "description",
        content:
          "Stories of kidney patients and families in Karachi who receive free dialysis through the Welfare Society for Patient Care.",
      },
      { property: "og:title", content: "Patient Stories | WSPC" },
      {
        property: "og:description",
        content: "Meet the patients and families whose lives your support keeps going.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoriesPage,
});

// Representative stories — replace with real, consented patient stories from WSPC.
const stories = [
  {
    img: motherSonImg,
    alt: "A mother holding her son's hand during his dialysis",
    name: "A young patient, 16",
    place: "Interior Sindh",
    quote:
      "My son was diagnosed when he was fourteen. We sold what we had for the first few sessions. Since WSPC took him in, he has not missed a single one — and he has gone back to school.",
    by: "His mother",
  },
  {
    img: heroImg,
    alt: "An elderly patient resting during dialysis while a nurse checks on him",
    name: "A retired labourer, 68",
    place: "Karachi",
    quote:
      "Three times a week I come here. The nurses know my name, they know my family. Without this place I would not be alive today.",
    by: "Patient",
  },
  {
    img: physioImg,
    alt: "A physiotherapist helping an elderly woman with leg exercises",
    name: "A grandmother, 72",
    place: "Hyderabad",
    quote:
      "After months of weakness I could barely walk. With physiotherapy alongside my dialysis, I can now walk to the market on my own again.",
    by: "Patient",
  },
];

function StoriesPage() {
  return (
    <>
      <PageHero eyebrow="Patient stories" title="Every session is another week with family">
        Behind every dialysis chair is a person, a family and a future. Names and details are kept
        private to protect our patients.
      </PageHero>

      <section className="mx-auto max-w-7xl space-y-20 px-6 py-24">
        {stories.map((s, i) => (
          <article
            key={s.name}
            className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}
          >
            <img
              src={s.img}
              alt={s.alt}
              width={1200}
              height={912}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            />
            <div>
              <Quote className="h-10 w-10 text-highlight" />
              <blockquote className="mt-4 font-display text-2xl leading-snug text-primary-deep md:text-3xl">
                “{s.quote}”
              </blockquote>
              <p className="mt-6 font-semibold text-foreground">
                {s.by} · <span className="font-normal text-muted-foreground">{s.name}, {s.place}</span>
              </p>
            </div>
          </article>
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
            Share your story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <DonateBand />
    </>
  );
}
