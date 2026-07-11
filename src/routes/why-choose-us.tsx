import { createFileRoute } from "@tanstack/react-router";
import {
  Truck,
  Gem,
  BadgeDollarSign,
  FileCheck,
  Package,
  MessageSquare,
  Zap,
  Handshake,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { WHY_US } from "@/lib/site-data";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — PT Sukses Ekspor Mandiri" },
      {
        name: "description",
        content:
          "Reliable supply chain, premium quality selection, export documentation support, and responsive service — why global buyers choose us.",
      },
      { property: "og:title", content: "Why Choose Us — PT Sukses Ekspor Mandiri" },
      {
        property: "og:description",
        content: "Reliable supply, premium quality, and responsive export service for global buyers.",
      },
      { property: "og:url", content: "/why-choose-us" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUsPage,
});

const ICONS = [Truck, Gem, BadgeDollarSign, FileCheck, Package, MessageSquare, Zap, Handshake];

function WhyChooseUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Why Choose Us"
        title="Built for Buyers Who Value Reliability"
        subtitle="International trade runs on trust. Here is how we earn it — shipment after shipment."
      />

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)]">
                  <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-secondary p-3 text-primary">
                    <Icon size={24} />
                  </span>
                  <h2 className="mt-5 font-display text-xl font-bold text-foreground">{item.title}</h2>
                  <p className="mt-2.5 leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="container-site max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Our Promise</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground">
              Transparent From First Inquiry to Final Delivery
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              We don't hide behind vague claims. You get honest specifications, clear
              pricing, real photos and samples of the actual lot, and proactive updates
              throughout production and shipping.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
