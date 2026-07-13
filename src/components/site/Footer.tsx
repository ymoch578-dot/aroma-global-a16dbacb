import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, PRODUCTS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-bold">Spices Premium Indonesia</p>
          <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
            {COMPANY.tagline}. Supplying premium Indonesian spices to importers, food
            manufacturers, and distributors worldwide.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Quick Links</p>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/why-choose-us", label: "Why Choose Us" },
              { to: "/export-process", label: "Export Process" },
              { to: "/sustainability", label: "Sustainability" },
              { to: "/gallery", label: "Gallery" },
              { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/80 transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Products</p>
          <ul className="space-y-2.5 text-sm">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="text-primary-foreground/80 transition-colors hover:text-gold"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
              <div className="flex flex-col gap-1">
                <a href={`mailto:${COMPANY.email}`} className="hover:text-gold">
                  {COMPANY.email}
                </a>
                <a href={`mailto:${COMPANY.emailAlt}`} className="hover:text-gold">
                  {COMPANY.emailAlt}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-gold">
                {COMPANY.whatsapp} (WhatsApp)
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              {COMPANY.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-xs text-primary-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Premium Indonesian Spice Exporter</p>
        </div>
      </div>
    </footer>
  );
}
