import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function DonateBand() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:px-14">
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-foreground/10"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 right-40 h-56 w-56 rounded-full bg-highlight/30"
        />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              One dialysis session can keep a patient alive for another few days.
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Your Zakat, Sadaqah or donation goes directly towards dialysis, medicines and care for
              patients who would otherwise go without treatment.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-highlight px-6 py-3.5 font-semibold text-highlight-foreground transition-transform hover:-translate-y-0.5"
            >
              Donate now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-primary-foreground/40 px-6 py-3.5 font-semibold hover:bg-primary-foreground/10"
            >
              Sponsor a patient
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
