import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Copy, Globe, Landmark, Building2, HeartHandshake, ExternalLink } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/site/PageHero";
import { org, zakatAccount } from "@/lib/site";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate Zakat for Dialysis Patients in Pakistan | WSPC" },
      {
        name: "description",
        content:
          "Give Zakat, Sadaqah or a donation to fund free dialysis for kidney patients in Karachi. Bank transfer details for Pakistan, plus options for donors in the UK and USA.",
      },
      { property: "og:title", content: "Donate to WSPC — Fund a Dialysis Session" },
      {
        property: "og:description",
        content: "Your Zakat keeps underprivileged kidney patients alive. Here's how to give.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DonatePage,
});

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border py-4 last:border-0">
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
        <p className="mt-1 font-medium text-foreground">{value}</p>
      </div>
      <button
        type="button"
        aria-label={`Copy ${label}`}
        onClick={() => {
          void navigator.clipboard?.writeText(value.replace(/\s/g, label === "IBAN" ? "" : " "));
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        }}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
      >
        {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

const ways = [
  {
    Icon: HeartHandshake,
    title: "Sponsor a patient",
    text: "Cover a patient's dialysis every month and receive updates on their care.",
  },
  {
    Icon: Building2,
    title: "Corporate partnerships",
    text: "Companies and foundations can sponsor machines, sessions or a full patient programme.",
  },
  {
    Icon: Landmark,
    title: "Zakat & Sadaqah",
    text: "Our Zakat account is used solely for treatment of eligible, deserving patients.",
  },
];

function DonatePage() {
  return (
    <>
      <PageHero eyebrow="Donate" title="Your Zakat can keep someone alive">
        Kidney patients need dialysis two to three times a week, for life. Your gift pays for
        sessions, medicines and care for patients who cannot pay.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Landmark className="h-5 w-5" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-primary-deep">Bank transfer — Pakistan</h2>
              <p className="text-sm text-muted-foreground">Zakat account</p>
            </div>
          </div>
          <div className="mt-6">
            <CopyRow label="Bank" value={zakatAccount.bank} />
            <CopyRow label="Account title" value={zakatAccount.title} />
            <CopyRow label="Account number" value={zakatAccount.accountNumber} />
            <CopyRow label="IBAN" value={zakatAccount.iban} />
            <CopyRow label="Branch" value={`${zakatAccount.branch} (code ${zakatAccount.branchCode})`} />
          </div>
          <p className="mt-6 rounded-xl bg-muted p-4 text-sm text-muted-foreground">
            After transferring, please email your receipt to{" "}
            <a href={`mailto:${org.email}`} className="font-medium text-primary underline">
              {org.email}
            </a>{" "}
            so we can thank you and issue an acknowledgement.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-primary-deep p-8 text-primary-foreground md:p-10">
            <Globe className="h-8 w-8 text-highlight" />
            <h2 className="mt-4 text-2xl font-semibold">Giving from abroad</h2>
            <p className="mt-3 text-primary-foreground/80">
              Overseas Pakistanis and international friends can support WSPC through our partner
              charities.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="rounded-xl bg-primary-foreground/10 p-4">
                <p className="font-semibold">United Kingdom</p>
                <p className="mt-1 text-primary-foreground/75">
                  Donate via our partner, i-Care Foundation.
                </p>
                <a
                  href="https://i-care-foundation.org"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-medium text-highlight hover:underline"
                >
                  i-care-foundation.org <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
              <li className="rounded-xl bg-primary-foreground/10 p-4">
                <p className="font-semibold">United States</p>
                <p className="mt-1 text-primary-foreground/75">
                  Tax-deductible giving through i-Care America. Contact us for details.
                </p>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-sand p-8">
            <h3 className="text-xl font-semibold text-primary-deep">Questions about giving?</h3>
            <p className="mt-2 text-muted-foreground">
              Call us on{" "}
              <a href={org.phoneHref} className="font-medium text-primary underline">
                {org.phone}
              </a>{" "}
              or visit us in Clifton.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="More ways to help" title="Give in the way that suits you" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ways.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-8">
                <Icon className="h-8 w-8 text-highlight" />
                <h3 className="mt-5 text-xl font-semibold text-primary-deep">{title}</h3>
                <p className="mt-2 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Talk to us about sponsorship
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
