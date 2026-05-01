import type { HeroContent } from '@/content/markets/types';

import { RevealGroup } from '@/components/motion/RevealGroup';
import { PartnerStage } from '@/components/sections/partnership/PartnerStage';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { HighlightedText } from '@/components/ui/HighlightedText';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type PartnershipHeroSectionProps = {
  hero: HeroContent;
};

export function PartnershipHeroSection({ hero }: PartnershipHeroSectionProps) {
  return (
    <section className="hero-section hero-section--partner section-pad pt-8 sm:pt-10" id={hero.id}>
      <div aria-hidden="true" className="hero-section__scene">
        <span className="hero-section__glow hero-section__glow--amber" />
        <span className="hero-section__glow hero-section__glow--emerald" />
        <span className="hero-section__plate hero-section__plate--primary" />
        <span className="hero-section__plate hero-section__plate--secondary" />
        <span className="hero-section__grid" />
      </div>
      <div className="shell-container hero-section__content">
        <RevealGroup className="hero-layout grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="hero-copy text-start">
            <div data-reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </div>
            <h1 className="hero-display mt-5 max-w-2xl text-start" data-reveal>
              <HighlightedText
                phrases={['Partner', 'partner', 'Agent', 'agent', 'الشراكة', 'شريك', 'وكيل']}
                text={hero.title}
              />
            </h1>
            <p className="body-lead mt-5 max-w-2xl text-start" data-reveal>
              {hero.description}
            </p>
            {hero.highlights?.length ? (
              <div className="hero-highlights" data-reveal>
                {hero.highlights.map((item) => (
                  <span className="stage-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
            <div className="hero-actions mt-6 flex flex-wrap gap-3" data-reveal>
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </Button>
              {hero.secondaryCta ? (
                <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
                  {hero.secondaryCta.label}
                </Button>
              ) : null}
            </div>
            <div className="hero-stats mt-6 grid gap-3 sm:grid-cols-3">
              {hero.stats.map((stat) => (
                <SurfaceCard className="hero-stat-card" data-hover="lift" data-reveal="scale" key={stat.label}>
                  <div className="metric-value" dir="auto">
                    {stat.value}
                  </div>
                  <div className="font-heading-face mt-3 text-base text-[var(--color-foreground)]">
                    {stat.label}
                  </div>
                </SurfaceCard>
              ))}
            </div>
          </div>
          <div className="hero-stage-wrap" data-reveal="left">
            <PartnerStage
              badge={hero.stageBadge}
              cards={hero.stageCards}
              chips={hero.stageChips}
              metrics={hero.stageMetrics}
              note={hero.stageNote}
              title={hero.stageTitle}
            />
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
