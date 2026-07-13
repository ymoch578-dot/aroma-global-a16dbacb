import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { CtaSection } from "@/components/site/CtaSection";
import { PRODUCTS } from "@/lib/site-data";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Premium Indonesian Spices for Export" },
      {
        name: "description",
        content:
          "Explore export-grade Indonesian cinnamon, clove, nutmeg, black pepper, and white pepper from Spices Export Premium Indonesia.",
      },
      { property: "og:title", content: "Products — Premium Indonesian Spices for Export" },
      {
        property: "og:description",
        content: "Export-grade cinnamon, clove, nutmeg, black pepper, and white pepper from Indonesia.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const FILTERS = ["All Products", "Whole Spices", "Ground Spices", "Popular Products"] as const;
type Filter = (typeof FILTERS)[number];

function ProductsPage() {
  const [filter, setFilter] = useState<Filter>("All Products");

  const filtered = PRODUCTS.filter((p) => {
    if (filter === "All Products") return true;
    if (filter === "Popular Products") return p.popular;
    if (filter === "Ground Spices")
      return p.specifications.some((s) => s.value.toLowerCase().includes("powder"));
    return p.category === filter;
  });

  return (
    <main>
      <PageHero
        eyebrow="Our Products"
        title="Premium Indonesian Spices, Export Ready"
        subtitle="Every product is sourced at origin, graded to international standards, and prepared to your specification."
      />

      <section className="py-16 lg:py-24">
        <div className="container-site">
          <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-gold-soft"
                }`}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-16 text-center text-muted-foreground">
              No products in this category yet — contact us for custom requirements.
            </p>
          )}
        </div>
      </section>

      <CtaSection />
    </main>
  );
}
