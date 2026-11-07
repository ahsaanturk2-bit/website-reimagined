import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { socialIcons } from "@/components/site/SiteFooter";
import { org, socialLinks } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact WSPC — Clifton, Karachi | Welfare Society for Patient Care" },
      {
        name: "description",
        content:
          "Contact the Welfare Society for Patient Care at F-17/2 Rojhan Street, Block 5, Clifton, Karachi. Call 021-35837986 or email connect.wspc@gmail.com.",
      },
      { property: "og:title", content: "Contact WSPC — Clifton, Karachi" },
      {
        property: "og:description",
        content: "Reach our team for treatment help, donations, sponsorship or volunteering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const topics = ["Treatment help", "Donation", "Sponsor a patient", "Volunteering", "Other"];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `[${data.get("topic")}] Message from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n— ${data.get("name")}\nPhone: ${data.get("phone") || "-"}\nEmail: ${data.get("email")}`;
    window.location.href = `mailto:${org.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const input =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

  return (
    <>
      <PageHero eyebrow="Contact" title="We're here to help">
        Whether you need treatment, want to donate or would like to volunteer — reach out.
      </PageHero>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-5">
          {[
            { Icon: MapPin, label: "Visit us", value: org.address, href: undefined },
            { Icon: Phone, label: "Call us", value: org.phone, href: org.phoneHref },
            { Icon: Mail, label: "Email us", value: org.email, href: `mailto:${org.email}` },
          ].map(({ Icon, label, value, href }) => (
            <div key={label} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
                {href ? (
                  <a href={href} className="mt-1 block font-medium text-primary-deep hover:underline">
                    {value}
                  </a>
                ) : (
                  <p className="mt-1 font-medium text-primary-deep">{value}</p>
                )}
              </div>
            </div>
          ))}
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Follow us</p>
            <ul className="mt-4 space-y-3">
              {socialLinks.map(({ network, handle, href }) => {
                const Icon = socialIcons[network];
                return (
                  <li key={network}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 font-medium text-primary-deep"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm text-muted-foreground">{network}</span>
                        <span className="group-hover:underline">{handle}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="WSPC location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent("Rojhan Street, Block 5, Clifton, Karachi")}&z=15&output=embed`}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10"
        >
          <h2 className="text-2xl font-semibold text-primary-deep">Send us a message</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Your name
              <input name="name" required maxLength={100} className={`${input} mt-2`} />
            </label>
            <label className="block text-sm font-medium">
              Phone (optional)
              <input name="phone" type="tel" maxLength={30} className={`${input} mt-2`} />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Email
              <input name="email" type="email" required maxLength={255} className={`${input} mt-2`} />
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              I'm getting in touch about
              <select name="topic" className={`${input} mt-2`} defaultValue={topics[0]}>
                {topics.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium sm:col-span-2">
              Message
              <textarea
                name="message"
                required
                rows={5}
                maxLength={2000}
                className={`${input} mt-2 resize-y`}
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-highlight px-7 py-3.5 font-semibold text-highlight-foreground transition-transform hover:-translate-y-0.5"
          >
            Send message <Send className="h-4 w-4" />
          </button>
          {sent && (
            <p className="mt-4 text-sm text-muted-foreground" role="status">
              Your email app should open with the message ready to send. If it doesn't, email us
              directly at {org.email}.
            </p>
          )}
        </form>
      </section>
    </>
  );
}
