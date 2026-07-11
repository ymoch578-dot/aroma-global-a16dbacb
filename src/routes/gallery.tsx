import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { GALLERY } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — PT Sukses Ekspor Mandiri" },
      {
        name: "description",
        content:
          "See our spices from plantation to port: harvest, processing, warehouse, packaging, and container loading in Indonesia.",
      },
      { property: "og:title", content: "Gallery — PT Sukses Ekspor Mandiri" },
      {
        property: "og:description",
        content: "From Indonesian plantations to export containers — see how we work.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="From Plantation to Port"
        subtitle="A visual journey through our sourcing regions, facilities, and export operations."
      />

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
            {GALLERY.map((g, i) => (
              <Reveal key={g.label} delay={(i % 3) * 0.08}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-3xl"
                  aria-label={`View ${g.label} photo`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-charcoal/60 px-4 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                    {g.label}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-6 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute right-6 top-6 text-primary-foreground/80 hover:text-primary-foreground"
              aria-label="Close lightbox"
            >
              <X size={30} />
            </button>
            <motion.img
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].alt}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CtaSection />
    </main>
  );
}
