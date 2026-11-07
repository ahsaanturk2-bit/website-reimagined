import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Droplets,
  HeartPulse,
  Quote,
  ShieldCheck,
  Siren,
  Stethoscope,
} from "lucide-react";

import heroImg from "@/assets/hero-dialysis-care.jpg";
import unitImg from "@/assets/dialysis-unit.jpg";
import consultImg from "@/assets/consultation.jpg";
import communityImg from "@/assets/community-event.jpg";
import { DonateBand } from "@/components/site/DonateBand";
import { SectionHeading } from "@/components/site/PageHero";
import { certifications, impactStats, org, testimonials } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WSPC — Free Dialysis for Kidney Patients in Karachi" },
      {
        name: "description",
        content:
          "Welfare Society for Patient Care provides free dialysis, medicines and kidney care to underprivileged patients in Clifton, Karachi. Donate your Zakat today.",
      },
      { property: "og:title", content: "WSPC — Free Dialysis for Kidney Patients in Karachi" },
      {
        property: "og:description",
        content:
          "Life-saving dialysis and kidney care for patients who cannot afford treatment. Support WSPC with your Zakat or donation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    Icon: Droplets,
    title: "Free dialysis",
    text: "Regular dialysis, with medicines, for patients with chronic kidney disease who cannot afford it.",
  },
  {
    Icon: Stethoscope,
    title: "Outpatient consultancy",
    text: "Doctor consultations and ongoing follow-up for every patient.",
  },
  {
    Icon: HeartPulse,
    title: "Holistic care",
    text: "Physiotherapy and music therapy to support patients' strength and wellbeing.",
  },
  {
    Icon: Siren,
    title: "24-hour emergency",
    text: "A round-the-clock emergency medical service, so critical treatment is always within reach.",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="A nurse caring for an elderly patient during dialysis"
          width={1600}
          height={1072}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="max-w-2xl text-primary-foreground">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
              <ShieldCheck className="h-4 w-4" /> Zakat eligible · Non-profit
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              {org.tagline}.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              {org.name} gives free, high-quality dialysis and medical care to patients in Karachi
              who cannot afford treatment — week after week.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-highlight px-7 py-4 font-semibold text-highlight-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Donate your Zakat <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-primary-foreground/40 px-7 py-4 font-semibold text-primary-foreground hover:bg-primary-foreground/10"
              >
                Get treatment help
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="relative z-10 mx-auto -mt-12 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-soft md:grid-cols-4">
          {impactStats.map((s) => (
            <div key={s.label} className="bg-card px-6 py-8 text-center">
              <p className="font-display text-3xl font-semibold text-primary md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div className="relative">
          <img
            src={unitImg}
            alt="Dialysis machines and patient chairs in a clean treatment unit"
            width={1200}
            height={912}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="absolute -bottom-8 -right-4 max-w-[15rem] rounded-2xl bg-highlight p-5 text-highlight-foreground shadow-soft md:-right-8">
            <p className="font-display text-lg leading-snug">
              “Essential treatment should be available across the board.”
            </p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Who we are" title={`A lifeline for kidney patients since ${org.founded}`}>
            Founded by {org.founder}, WSPC is a trusted Karachi NGO. We sponsor patients through{" "}
            {org.hospital}, covering their dialysis, medical and surgical treatment.
          </SectionHeading>
          <ul className="mt-8 space-y-3 text-foreground/85">
            {[
              "Dialysis is lifelong treatment — usually three sessions a week, or until a transplant.",
              "Missing even a few sessions can lead to rapid deterioration and serious complications.",
              `Every contribution directly funds treatment, and our finances are audited annually by ${org.auditor}.`,
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-highlight" />
                {t}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3"
          >
            Our story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="What we do" title="Care that goes beyond the machine">
              Kidney failure affects every part of a patient's life. Our care does too.
            </SectionHeading>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-7 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-primary-deep">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two ways */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-24 md:grid-cols-2">
        {[
          {
            img: consultImg,
            alt: "A doctor reviewing a kidney test report with a patient",
            eyebrow: "For patients",
            title: "Need dialysis but can't afford it?",
            text: "Contact us to find out about eligibility for free treatment at our Clifton centre.",
            cta: "Contact us",
            to: "/contact" as const,
          },
          {
            img: communityImg,
            alt: "Volunteers and staff at a community health event",
            eyebrow: "For supporters",
            title: "Sponsor a patient's treatment",
            text: "Individuals, families and companies can sponsor dialysis for a patient each month.",
            cta: "Ways to give",
            to: "/donate" as const,
          },
        ].map((c) => (
          <article key={c.title} className="group overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={c.img}
              alt={c.alt}
              width={1200}
              height={912}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                {c.eyebrow}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-primary-deep">{c.title}</h3>
              <p className="mt-3 text-muted-foreground">{c.text}</p>
              <Link
                to={c.to}
                className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3"
              >
                {c.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Feedback */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading eyebrow="Feedback from patients" title="What patients and families say" />
            <Link
              to="/stories"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3"
            >
              All feedback <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-3xl bg-card p-8 shadow-soft">
                <Quote className="h-8 w-8 text-highlight" />
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 font-semibold text-primary-deep">{t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-y border-border bg-muted py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Registered & certified · {org.registrationNo}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {certifications.map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary-deep"
              >
                <ShieldCheck className="h-4 w-4 text-primary" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <DonateBand />
    </>
  );
}
