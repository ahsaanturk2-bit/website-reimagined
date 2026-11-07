import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Ambulance,
  Droplets,
  HeartPulse,
  Music,
  Pill,
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
          "Free dialysis, medicines, nephrology consultations, physiotherapy and emergency care for underprivileged kidney patients in Clifton, Karachi.",
      },
      { property: "og:title", content: "What We Do — Free Dialysis & Kidney Care | WSPC" },
      {
        property: "og:description",
        content: "The treatment and support WSPC provides to kidney patients who cannot afford care.",
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
    text: "Our core programme. Eligible patients receive regular haemodialysis — typically two to three sessions a week — completely free of charge.",
  },
  {
    Icon: Pill,
    title: "Medicines & medical support",
    text: "Help with essential medicines, injections, lab tests and other treatment costs that come with kidney disease.",
  },
  {
    Icon: Stethoscope,
    title: "Nephrology consultations",
    text: "Outpatient consultations with kidney specialists, ongoing monitoring and adjustment of each patient's care plan.",
  },
  {
    Icon: HeartPulse,
    title: "Physiotherapy",
    text: "Gentle rehabilitation to help dialysis patients stay mobile, strong and independent.",
  },
  {
    Icon: Music,
    title: "Music therapy",
    text: "Long hours on a dialysis machine are hard. Music therapy helps patients relax and cope emotionally.",
  },
  {
    Icon: Ambulance,
    title: "Emergency medical services",
    text: "Support for patients when complications arise and urgent care is needed.",
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
      <PageHero eyebrow="What we do" title="Free dialysis and complete kidney care">
        From the dialysis chair to medicines and emotional support, we look after the whole patient.
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
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
          <img
            src={consultImg}
            alt="A kidney specialist going through test results with a patient"
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
