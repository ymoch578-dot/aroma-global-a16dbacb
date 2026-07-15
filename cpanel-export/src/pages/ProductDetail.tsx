import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { CheckCircle2, Package, Scale } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaSection } from "@/components/site/CtaSection";
import { PRODUCTS } from "@/lib/site-data";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center pt-24">
        <Helmet>
          <title>Product Not Found</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground">Product not found</h1>
          <Link to="/products" className="mt-4 inline-block font-semibold text-primary hover:text-gold">
            Browse all products →
          </Link>
        </div>
      </main>
    );
  }

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <main>
      <Helmet>
        <title>{`${product.name} — Indonesian ${product.name} Exporter`}</title>
        <meta name="description" content={product.short} />
        <meta property="og:title" content={`${product.name} — PT Sukses Ekspor Mandiri`} />
        <meta property="og:description" content={product.short} />
        <meta property="og:type" content="product" />
      </Helmet>

      <section className="bg-[image:var(--gradient-forest)] pb-20 pt-36 text-primary-foreground lg:pt-44">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{product.category}</p>
            <h1 className="mt-4 font-display text-4xl font-bold lg:text-5xl">{product.name}</h1>
            <p className="mt-2 italic text-primary-foreground/70">{product.latin}</p>
            <p className="mt-6 leading-relaxed text-primary-foreground/85">{product.overview}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={`/contact?product=${encodeURIComponent(product.name)}`}
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
              >
                Send Inquiry
              </Link>
              <Link to="/products" className="rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10">
                All Products
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <img src={product.image} alt={`${product.name} — premium export grade Indonesian spice`} width={800} height={800} className="mx-auto w-full max-w-md rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-site grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl border border-border p-8 lg:p-10">
              <h2 className="font-display text-2xl font-bold text-foreground">About This Product</h2>
              <div className="mt-6 space-y-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </div>

              <h2 className="mt-10 font-display text-2xl font-bold text-foreground">Applications</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.applications.map((a) => (
                  <li key={a} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 size={17} className="shrink-0 text-olive" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="space-y-5">
              <div className="rounded-3xl bg-secondary p-7">
                <Package className="text-gold" size={24} />
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">Packaging Options</h3>
                <ul className="mt-4 space-y-2">
                  {product.packaging.map((pkg) => (
                    <li key={pkg} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={17} className="shrink-0 text-olive" />
                      {pkg}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">
                  Custom packaging is available on request to match your market and brand requirements.
                </p>
              </div>
              <div className="rounded-3xl bg-secondary p-7">
                <Scale className="text-gold" size={24} />
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">MOQ</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{product.moq}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-24">
        <div className="container-site">
          <Reveal className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold text-foreground">Related Products</h2>
          </Reveal>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}><ProductCard product={p} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
