import { createFileRoute } from "@tanstack/react-router";
import { Leaf, ShieldCheck, HeartHandshake, Route as RouteIcon, TrendingUp, Utensils } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import harvestImg from "@/assets/gallery-harvest.jpg";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — PT Sukses Ekspor Mandiri" },
      {
        name: "description",
        content:
          "Responsible sourcing, long-term farmer partnerships, product traceability, and continuous quality improvement in Indonesian spice export.",
      },
      { property: "og:title", content: "Sustainability — PT Sukses Ekspor Mandiri" },
      {
        property: "og:description",
        content: "Responsible sourcing and honest quality commitment at every step.",
      },
      { property: "og:url", content: "/sustainability" },
    ],
    links: [{ rel: "canonical", href: "/sustainability" }],
  }),
  component: SustainabilityPage,
});

const PILLARS = [
  {
    icon: Leaf,
    title: "Responsible Sourcing",
    desc: "We buy directly from farmer groups at fair prices, prioritizing regions where spice cultivation supports local livelihoods.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Commitment",
    desc: "Every lot is inspected for moisture, purity, and grade before packing — quality is checked, not assumed.",
  },
  {
    icon: HeartHandshake,
    title: "Long-term Farmer Partnership",
    desc: "Stable purchasing relationships give our farmer partners predictable income and give buyers consistent supply.",
  },
  {
    icon: RouteIcon,
    title: "Product Traceability",
    desc: "We document each lot's growing region and processing path, so you know where your spices come from.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Quality Improvement",
    desc: "We invest in better drying, sorting, and storage practices season after season.",
  },
  {
    icon: Utensils,
    title: "Food Safety Awareness",
    desc: "Clean handling, hygienic storage, and careful packing practices protect product integrity from origin to port.",
  },
];

function SustainabilityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Sustainability"
        title="Honest Practices, From Farm to Container"
        subtitle="We believe sustainable trade is built on fairness to farmers, honesty with buyers, and care for the product at every step."
      />

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)]">
                <p.icon className="text-olive" size={28} />
                <h2 className="mt-4 font-display text-xl font-bold text-foreground">{p.title}</h2>
                <p className="mt-2.5 leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={harvestImg}
              alt="Farmer partner hand-harvesting cloves in Indonesia"
              width={900}
              height={1200}
              loading="lazy"
              className="mx-auto max-w-md rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-4xl">
              Progress Over Promises
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We prefer to show real practices rather than make claims we cannot back. Our
              sustainability work focuses on what we can control today: fair farmer
              relationships, clean handling, traceable lots, and steady improvement in how
              our spices are grown, dried, and prepared for export.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              As we grow, we continue to raise our standards — openly and honestly.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
