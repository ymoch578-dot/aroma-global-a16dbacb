import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { PROCESS_STEPS } from "@/lib/site-data";

export const Route = createFileRoute("/export-process")({
  head: () => ({
    meta: [
      { title: "Export Process — PT Sukses Ekspor Mandiri" },
      {
        name: "description",
        content:
          "Our transparent 8-step export process: inquiry, sampling, negotiation, production, quality checking, packing, and shipping.",
      },
      { property: "og:title", content: "Export Process — PT Sukses Ekspor Mandiri" },
      {
        property: "og:description",
        content: "A transparent 8-step journey from your inquiry to container delivery.",
      },
      { property: "og:url", content: "/export-process" },
    ],
    links: [{ rel: "canonical", href: "/export-process" }],
  }),
  component: ExportProcessPage,
});

function ExportProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="Export Process"
        title="A Transparent Journey From Inquiry to Delivery"
        subtitle="Eight clear steps. No surprises. You always know where your order stands."
      />

      <section className="py-20 lg:py-28">
        <div className="container-site max-w-3xl">
          <ol className="relative border-l-2 border-gold-soft pl-8 lg:pl-12">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <li className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[3.35rem] flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground lg:-left-[4.35rem]">
                    {s.step}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-foreground">{s.title}</h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
