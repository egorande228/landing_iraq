import type { GridCard, SectionBlock } from '@/content/markets/types';

import { RevealGroup } from '@/components/motion/RevealGroup';
import { SectionShell, type SectionTone } from '@/components/layout/SectionShell';
import { CardMedia } from '@/components/ui/CardMedia';
import { SurfaceCard } from '@/components/ui/SurfaceCard';
import { joinClasses } from '@/lib/classes';

type FeatureGridSectionProps = {
  section: SectionBlock;
  variant?: 'media' | 'accent' | 'default';
  tone?: SectionTone;
};

function getSectionImage(sectionId: string, index: number) {
  if (sectionId === 'sports') {
    return [
      '/home/sports/foot.png',
      '/home/sports/live.png',
      '/home/sports/gift.png',
      '/home/sports/access.png',
    ][index];
  }

  if (sectionId === 'casino') {
    return [
      '/home/casino/slots.png',
      '/home/casino/live.png',
      '/home/casino/tables.png',
      '/home/casino/providers.png',
    ][index];
  }

  if (sectionId === 'offers') {
    return [
      '/home/promos/welcome.png',
      '/home/promos/gifts.png',
      '/home/promos/spins.png',
      '/home/promos/bets.png',
    ][index];
  }

  if (sectionId === 'benefits') {
    return [
      '/home/benefits/signup.png',
      '/home/benefits/support.png',
      '/home/benefits/mobile.png',
      '/home/benefits/providers.png',
    ][index];
  }

  if (sectionId === 'why-partner') {
    return [
      '/partnership/whyus/local.png',
      '/partnership/whyus/models.png',
      '/partnership/whyus/manager.png',
      '/partnership/whyus/visibilty.png',
    ][index];
  }

  if (sectionId === 'routes') {
    return ['/partnership/routes/partner.png', '/partnership/routes/agent.png'][index];
  }

  if (sectionId === 'tools') {
    return [
      '/partnership/tools/marketing.png',
      '/partnership/tools/tracking.png',
      '/partnership/tools/operations.png',
      '/partnership/tools/payments.png',
    ][index];
  }

  return undefined;
}

function getCardVariant(
  variant: FeatureGridSectionProps['variant'],
): 'default' | 'accent' | 'media' {
  if (variant === 'media') {
    return 'media';
  }

  if (variant === 'accent') {
    return 'accent';
  }

  return 'default';
}

function getGridColumns(cards: GridCard[]) {
  if (cards.length >= 4) {
    return 'grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-4';
  }

  if (cards.length === 3) {
    return 'grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-3';
  }

  return 'grid auto-rows-fr gap-4 sm:grid-cols-2';
}

function getGridImageSizes(cards: GridCard[]) {
  if (cards.length >= 4) {
    return '(min-width: 1280px) 21vw, (min-width: 640px) 42vw, 100vw';
  }

  if (cards.length === 3) {
    return '(min-width: 1280px) 29vw, (min-width: 640px) 42vw, 100vw';
  }

  return '(min-width: 1280px) 44vw, (min-width: 640px) 42vw, 100vw';
}

function getSectionGlowPhrases(tone: SectionTone) {
  if (tone === 'offers') {
    return ['مكافآت', 'Rewards', 'Bonus', 'Offers'];
  }

  if (tone === 'opportunity' || tone === 'routes' || tone === 'tools') {
    return ['Partner', 'partner', 'Agent', 'agent', 'شريك', 'وكيل', 'الشراكة'];
  }

  return undefined;
}

export function FeatureGridSection({
  section,
  variant = 'default',
  tone = 'default',
}: FeatureGridSectionProps) {
  const isWhyPartnerSection = section.id === 'why-partner';
  const isRouteSection = section.id === 'routes';
  const showFootnote = !isWhyPartnerSection;
  const imageSizes = getGridImageSizes(section.cards);
  const fixedCardClass =
    isRouteSection
      ? 'min-h-[24rem] xl:min-h-[25rem]'
      : 'min-h-[21.5rem] xl:min-h-[22.5rem]';

  return (
    <RevealGroup>
      <SectionShell
        className="pb-2"
        description={section.description}
        eyebrow={section.eyebrow}
        highlightPhrases={getSectionGlowPhrases(tone)}
        id={section.id}
        tone={tone}
        title={section.title}
      >
        <div className={getGridColumns(section.cards)}>
          {section.cards.map((card, index) => (
            <SurfaceCard
              className={joinClasses(
                'feature-card group min-w-0',
                fixedCardClass,
                `feature-card--${tone}`,
              )}
              data-hover="lift"
              data-reveal="scale"
              key={card.title}
              variant={getCardVariant(variant)}
            >
              <CardMedia
                className={joinClasses('feature-card__media', variant === 'media' && 'card-media--washed')}
                imageAlt={card.title}
                imageSrc={getSectionImage(section.id, index)}
                sizes={imageSizes}
                tone={tone}
              />
              <div className="relative feature-card__body">
                {card.eyebrow ? (
                  <div className={joinClasses('feature-card__eyebrow', isWhyPartnerSection && 'text-[0.64rem] tracking-[0.14em]')}>
                    {card.eyebrow}
                  </div>
                ) : null}
                <div className={joinClasses('feature-card__header-row', isWhyPartnerSection && 'mt-2 gap-2')}>
                  <h3 className={joinClasses(
                    'feature-card__title',
                    isWhyPartnerSection && 'text-[1.02rem] leading-7',
                  )}>
                    {card.title}
                  </h3>
                  {card.metric ? (
                    <span className={joinClasses('feature-card__metric', isWhyPartnerSection && 'px-3 py-1 text-[0.68rem]')} dir="auto">
                      {card.metric}
                    </span>
                  ) : null}
                </div>
                <p className={joinClasses(
                  'feature-card__description',
                  isWhyPartnerSection && 'mt-3 text-[0.8rem] leading-6',
                )}>
                  {card.description}
                </p>
                {card.bullets?.length ? (
                  <div className="section-bullets feature-card__bullets">
                    {card.bullets.map((bullet) => (
                      <div className="section-bullets__item" key={bullet}>
                        {bullet}
                      </div>
                    ))}
                  </div>
                ) : null}
                <div className="feature-card__spacer" />
                {showFootnote && card.footnote ? (
                  <p className="feature-card__footnote">{card.footnote}</p>
                ) : null}
              </div>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>
    </RevealGroup>
  );
}
