import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/site-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-card)]"
    >
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={`${product.name} — premium Indonesian ${product.name.toLowerCase()} for export`}
            width={800}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {product.popular && (
            <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
              Popular
            </span>
          )}
        </div>
        <div className="p-6">
          <p className="text-xs italic text-muted-foreground">{product.latin}</p>
          <h3 className="mt-1 font-display text-xl font-bold text-foreground">{product.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {product.short}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-gold">
            Learn More <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
