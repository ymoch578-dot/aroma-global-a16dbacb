import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Truck, BadgeDollarSign, Gem, FileCheck, MessageSquare, Package, Zap, Handshake, Globe2, ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-spices.jpg";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaSection } from "@/components/site/CtaSection";
import { PRODUCTS, PROCESS_STEPS, WHY_US, GALLERY, FAQS } from "@/lib/site-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const WHY_ICONS = [Truck, Gem, BadgeDollarSign, FileCheck, Package, MessageSquare, Zap, Handshake];

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Premium Indonesian Spice Exporter</title>
        <meta name="description" content="Premium Indonesian spices for the global market. Trusted B2B exporter of cinnamon, clove, nutmeg, black pepper, and white pepper." />
        <meta property="og:title" content="Premium Indonesian Spice Exporter" />
        <meta property="og:description" content="Premium Indonesian spices for the global market. Trusted B2B exporter of cinnamon, clove, nutmeg, black pepper, and white pepper." />
      </Helmet>

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Premium Indonesian spices — cinnamon, clove, nutmeg, and pepper" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="container-site relative z-10 py-40 text-center text-primary-foreground">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="eyebrow">
            PT Sukses Ekspor Mandiri
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mx-auto mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-7xl">
            Premium Indonesian Spices
            <span className="mt-2 block text-2xl font-medium italic text-gold-soft sm:text-3xl lg:text-4xl">
              Trusted Export Partner for Global Markets
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 lg:text-lg">
            Supplying premium-quality Indonesian spices to importers and food industries worldwide with consistent quality, competitive pricing, and reliable export services.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65 }} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105">
              Request a Free Quote
            </Link>
            <Link to="/products" className="rounded-full border border-primary-foreground/40 px-8 py-4 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10">
              Explore Our Products
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow">Who We Are</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground lg:text-4xl">
              A Trusted Partner for Premium Indonesian Spices
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              PT Sukses Ekspor Mandiri is an Indonesian spice export company dedicated to bringing the world closer to the rich flavors and aromas of Indonesia's finest spices. We specialize in supplying high-quality cinnamon, clove, nutmeg, and black and white pepper to importers, food manufacturers, distributors, and retailers around the world who value consistency, authenticity, and professional service.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our strength lies in building transparent, long-term relationships with both local partners and international buyers. From careful sourcing and strict quality control to professional packaging and complete export documentation, every step of our process is designed to give our customers confidence and peace of mind.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We understand that every market has different needs and standards. That is why we take a flexible, customer-focused approach — offering tailored packaging, reliable shipment schedules, and responsive communication throughout every order. With a commitment to integrity and continuous improvement, we aim to be more than just a supplier: we strive to be a dependable export partner that helps your business grow with spices you can trust.
            </p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">
              Learn more about us <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-28">
        <div className="container-site">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow">Our Products</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-4xl">Signature Indonesian Spices</h2>
          </Reveal>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}><ProductCard product={p} /></Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              View All Products <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-4xl">Why Buyers Choose PT Sukses Ekspor Mandiri</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((item, i) => {
              const Icon = WHY_ICONS[i % WHY_ICONS.length];
              return (
                <Reveal key={item.title} delay={(i % 4) * 0.08}>
                  <div className="h-full rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-[var(--shadow-soft)]">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[image:var(--gradient-forest)] py-20 text-primary-foreground lg:py-28">
        <div className="container-site">
          <Reveal className="mb-14 text-center">
            <p className="eyebrow">How It Works</p>
            <h2 className="mt-4 font-display text-3xl font-bold lg:text-4xl">Our Export Process</h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={(i % 4) * 0.08}>
                <div className="h-full rounded-3xl bg-primary-foreground/5 p-7 backdrop-blur-sm">
                  <span className="font-display text-3xl font-bold text-gold">{String(s.step).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link to="/export-process" className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline">
              See the full process in detail <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site text-center">
          <Reveal>
            <p className="eyebrow">Global Reach</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-4xl">Serving Buyers Across Continents</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Our spices ship from Indonesian ports to markets in Asia, the Middle East, Europe, Africa, and America — supported by reliable logistics coordination and complete export documentation.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-12">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {["Asia Pacific", "Middle East", "Europe", "Africa", "America"].map((region) => (
                <div key={region} className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <Globe2 className="mx-auto text-gold" size={28} />
                  <p className="mt-3 font-display text-lg font-bold text-foreground">{region}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-28">
        <div className="container-site">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-4xl">From Plantation to Port</h2>
          </Reveal>
          <div className="columns-2 gap-5 space-y-5 lg:columns-3">
            {GALLERY.slice(0, 9).map((g, i) => (
              <Reveal key={g.label + i} delay={(i % 3) * 0.08}>
                <Link to="/gallery" className="group relative block overflow-hidden rounded-3xl">
                  <img src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-charcoal/60 px-4 py-1.5 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                    {g.label}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site max-w-3xl">
          <Reveal className="mb-10 text-center">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-4xl">Frequently Asked Questions</h2>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.slice(0, 4).map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 text-center">
              <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold">
                View all questions <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
