import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { FAQS } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Spices Export Premium Indonesia" },
      {
        name: "description",
        content:
          "Answers about MOQ, lead time, packaging, private label, shipping terms, and payment for Indonesian spice export orders.",
      },
      { property: "og:title", content: "FAQ — Spices Export Premium Indonesia" },
      {
        property: "og:description",
        content: "MOQ, lead time, packaging, private label, shipping, and payment — answered.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Everything international buyers usually ask before their first order."
      />

      <section className="py-16 lg:py-24">
        <div className="container-site max-w-3xl">
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
          <Reveal className="mt-12 rounded-3xl bg-secondary p-8 text-center">
            <h2 className="font-display text-xl font-bold text-foreground">
              Still have questions?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our export team is happy to help — usually within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
