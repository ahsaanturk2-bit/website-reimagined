import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { galleryPhotos as photos } from "@/lib/photos";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside WSPC's Dialysis Centre | WSPC" },
      {
        name: "description",
        content:
          "Photos from the Welfare Society for Patient Care: our dialysis unit, patients, staff and community events in Karachi.",
      },
      { property: "og:title", content: "Gallery | WSPC" },
      {
        property: "og:description",
        content: "A look inside our dialysis centre, our team and our community work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const tags = ["All", "Patients", "Team", "Events"] as const;

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof tags)[number]>("All");
  const [active, setActive] = useState<(typeof photos)[number] | null>(null);
  const shown = filter === "All" ? photos : photos.filter((p) => p.tag === filter);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments from our centre and community">
        We're proud to serve our community in Karachi and help people who otherwise could not
        access life-saving treatment. Here is a selection of images of our work over the years.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter photos">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={filter === t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === t
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground hover:bg-secondary"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {shown.map((p) => (
            <button
              key={p.caption}
              type="button"
              onClick={() => setActive(p)}
              className="group relative block w-full overflow-hidden rounded-2xl text-left"
            >
              <img
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 to-transparent p-5 text-sm font-medium text-primary-foreground">
                {p.caption}
              </span>
            </button>
          ))}
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-deep/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground text-primary-deep"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <figure className="max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} className="max-h-[80vh] w-auto rounded-2xl" />
            <figcaption className="mt-3 text-center text-primary-foreground">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
