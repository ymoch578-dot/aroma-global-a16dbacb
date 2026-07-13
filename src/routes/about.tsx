import { createFileRoute } from "@tanstack/react-router";
import { Compass, Eye, HeartHandshake, Leaf, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import plantationImg from "@/assets/gallery-plantation.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — PT Sukses Ekspor Mandiri" },
      {
        name: "description",
        content:
          "Learn about PT Sukses Ekspor Mandiri, an Indonesian spice exporter connecting origin farmers with global buyers through quality and transparency.",
      },
      { property: "og:title", content: "About Us — PT Sukses Ekspor Mandiri" },
      {
        property: "og:description",
        content: "Indonesian spice exporter built on quality, transparency, and long-term partnership.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: ShieldCheck, title: "Integrity", desc: "Honest specifications, transparent pricing, and commitments we keep." },
  { icon: Leaf, title: "Quality at Origin", desc: "Quality starts at the farm — we select, sort, and verify before anything ships." },
  { icon: HeartHandshake, title: "Partnership", desc: "We build long-term relationships with farmers and buyers alike." },
  { icon: Compass, title: "Reliability", desc: "Consistent grades, on-time shipments, and responsive communication." },
];

function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="A Trusted Bridge Between Indonesian Farms and Global Markets"
        subtitle="PT Sukses Ekspor Mandiri exists to make sourcing Indonesian spices simple, transparent, and dependable for buyers worldwide."
      />

      <section className="py-20 lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={plantationImg}
              alt="Indonesian spice plantation — the origin of our products"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-4xl">
              Rooted in the Spice Islands
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Indonesia has supplied the world's spices for centuries. PT Sukses Ekspor
              Mandiri continues that heritage with a modern approach: direct sourcing from
              farmer partners in Sumatra, Sulawesi, Bangka, and the Maluku Islands,
              disciplined quality control, and professional export handling.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From our base in Jakarta, we serve importers, food manufacturers, spice
              wholesalers, retail chains, and hospitality suppliers — delivering the
              consistency that international trade demands.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-28">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-card p-10 shadow-[var(--shadow-card)]">
              <Eye className="text-gold" size={30} />
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To become a trusted and globally competitive Indonesian international
                export company in providing spices, while delivering added value to
                business partners worldwide.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="h-full rounded-3xl bg-card p-10 shadow-[var(--shadow-card)]">
              <Compass className="text-gold" size={30} />
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Our Mission</h2>
              <ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed text-muted-foreground marker:font-semibold marker:text-primary">
                <li>
                  Build long-term relationships with international buyers through
                  professional service and consistent product quality.
                </li>
                <li>
                  Strengthen partnerships with local producers to create a stable and
                  transparent supply chain.
                </li>
                <li>
                  Provide products that meet international quality standards with on-time
                  delivery.
                </li>
                <li>
                  Serve as a bridge between Indonesian producers and global markets, with
                  a commitment to maintaining integrity in every transaction.
                </li>
                <li>
                  Continuously expand our product portfolio in response to global market
                  demands.
                </li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow">Company Values</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-4xl">
              What Guides Every Shipment
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border p-8 text-center">
                  <v.icon className="mx-auto text-primary" size={28} />
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-14 max-w-3xl rounded-3xl bg-secondary p-10 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground">Our Commitment</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Every inquiry is answered promptly. Every specification is stated honestly.
              Every container is prepared as agreed. That is our commitment to buyers who
              place their trust in us.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
