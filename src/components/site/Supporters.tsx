import { SectionHeading } from "@/components/site/PageHero";
import { supporters } from "@/lib/site";

export function Supporters() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeading center eyebrow="Our supporters" title="Organisations that stand with our patients">
        We are grateful to the companies, banks and foundations who help fund free dialysis.
      </SectionHeading>
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
        {supporters.map((s) => (
          <li
            key={s.name}
            className="flex h-28 items-center justify-center rounded-2xl border border-border bg-card p-4"
          >
            <img
              src={s.logo}
              alt={s.name}
              loading="lazy"
              className="max-h-20 w-auto max-w-full object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
