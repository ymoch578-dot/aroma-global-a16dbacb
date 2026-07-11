import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[image:var(--gradient-forest)] pb-16 pt-36 text-primary-foreground lg:pb-24 lg:pt-44">
      <div className="container-site max-w-3xl">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight lg:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">{subtitle}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
