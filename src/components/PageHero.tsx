interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 border-b border-border noise-texture">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {eyebrow && (
          <p className="text-xs tracking-[0.4em] text-gold mb-4">{eyebrow}</p>
        )}
        <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wider">
          <span className="gradient-gold-text">{title}</span>
        </h1>
        {subtitle && (
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-8 mx-auto w-24 h-px gradient-gold-bg" />
      </div>
    </section>
  );
}
