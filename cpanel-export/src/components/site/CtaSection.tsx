import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { COMPANY } from "@/lib/site-data";

export function CtaSection() {
  return (
    <section className="bg-[image:var(--gradient-forest)] py-20 text-primary-foreground lg:py-28">
      <div className="container-site text-center">
        <Reveal>
          <p className="eyebrow">Start Your Import Journey</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-bold leading-tight lg:text-5xl">
            Ready to Import Premium Indonesian Spices?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
            Tell us what you need — our export team responds within 24 hours with grades,
            pricing, and availability.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
            >
              Request Quotation
            </Link>
            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary-foreground/30 px-8 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Contact Our Export Team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
