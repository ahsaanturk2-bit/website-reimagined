import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Ambulance,
  Droplets,
  HeartPulse,
  Hospital,
  Music,
  Stethoscope,
} from "lucide-react";

import consultImg from "@/assets/consultation.jpg";
import { DonateBand } from "@/components/site/DonateBand";
import { PageHero, SectionHeading } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What We Do — Free Dialysis & Kidney Care in Karachi | WSPC" },
      {
        name: "description",
        content:
          "Free dialysis, outpatient consultations, physiotherapy, music therapy and a 24-hour emergency service for kidney patients in Clifton, Karachi.",
      },
      { property: "og:title", content: "What We Do — Free Dialysis & Kidney Care | WSPC" },
      {
        property: "og:description",
        content: "Free, high-quality dialysis and holistic care for patients who cannot afford treatment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    Icon: Droplets,
    title: "Free dialysis treatment",
    text: "Our primary focus. Patients with chronic kidney disease receive regular dialysis free of charge, along with the medicines they need.",
  },
  {
    Icon: Stethoscope,
    title: "Outpatient consultancy",
    text: "Consultations with doctors, ongoing monitoring and adjustment of each patient's care.",
  },
  {
    Icon: Hospital,
    title: "Medical & surgical treatment",
    text: "For sponsored patients we also cover medical and surgical treatment at Clifton Kidney & General Hospital.",
  },
  {
    Icon: HeartPulse,
    title: "Physiotherapy",
    text: "Rehabilitation to help dialysis patients stay mobile, strong and independent.",
  },
  {
    Icon: Music,
    title: "Music therapy",
    text: "Long hours on a dialysis machine are hard. Music therapy helps patients relax and cope.",
  },
  {
    Icon: Ambulance,
    title: "24-hour emergency service",
    text: "Our facility has a 24-hour emergency medical service, so critical treatment is available at any time.",
  },
];

const dialysisTypes = [
  {
    title: "Haemodialysis",
    text: "A machine and a special filter called a dialyzer (an artificial kidney) remove waste, extra fluid and toxins from the blood. Blood is drawn from the body, cleaned through the dialyzer and returned. It is usually done in a dialysis centre three times a week.",
  },
  {
    title: "Peritoneal dialysis",
    text: "Uses the body's own peritoneal membrane in the abdomen as a filter. A cleansing fluid called dialysate is passed into the abdomen through a catheter, absorbs toxins and is then drained out. It can be done at home during the day (CAPD) or overnight by machine (APD).",
  },
];

const steps = [
  { n: "01", title: "Get in touch", text: "Call or visit us in Clifton with your medical reports." },
  { n: "02", title: "Assessment", text: "Our team reviews the patient's condition and financial need." },
  { n: "03", title: "Start treatment", text: "Eligible patients are scheduled for regular, free dialysis." },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="What we do" title="Free, high-quality healthcare for those in need">
        We are committed to serving humanity. Our main focus is dialysis for people with chronic
        kidney disease — and we look after the whole patient, not just their kidneys.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text }, i) => (
            <div
              key={title}
              className={`rounded-2xl border p-8 ${
                i === 0
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card"
              }`}
            >
              <Icon className={`h-9 w-9 ${i === 0 ? "text-primary-foreground" : "text-primary"}`} />
              <h2
                className={`mt-6 text-2xl font-semibold ${i === 0 ? "" : "text-primary-deep"}`}
              >
                {title}
              </h2>
              <p
                className={`mt-3 leading-relaxed ${i === 0 ? "text-primary-foreground/85" : "text-muted-foreground"}`}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-sand p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our goal</p>
          <p className="mt-3 max-w-3xl font-display text-2xl leading-snug text-primary-deep md:text-3xl">
            A dedicated kidney treatment hospital for the growing number of patients who need us.
          </p>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            We envision a healthier, more equitable society where essential medical care is
            available to all, regardless of financial status — and we keep expanding our services
            and resources to get there.
          </p>
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Understanding treatment" title="What is dialysis?">
            When the kidneys fail (end-stage renal disease), they can no longer filter waste, extra
            fluid and toxins from the blood. Dialysis takes over this job. It is not a cure, but it
            keeps patients alive — long-term, or while they wait for a kidney transplant.
          </SectionHeading>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {dialysisTypes.map((d) => (
              <div key={d.title} className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-2xl font-semibold text-primary-deep">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <img
            src={consultImg}
            alt="A doctor going through test results with a patient"
            width={1200}
            height={912}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
          />
          <div>
            <SectionHeading eyebrow="For patients" title="How to get help">
              If you or a family member needs dialysis and cannot afford it, here is how to begin.
            </SectionHeading>
            <ol className="mt-8 space-y-6">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="font-display text-3xl font-semibold text-highlight">{s.n}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-primary-deep">{s.title}</h3>
                    <p className="text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Contact our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <DonateBand />
    </>
  );
}
