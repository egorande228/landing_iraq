'use client';

import { useEffect, useState } from 'react';

import type { GridCard, HeroShowcaseItem } from '@/content/markets/types';

import { CardMedia } from '@/components/ui/CardMedia';
import { SurfaceCard } from '@/components/ui/SurfaceCard';
import { joinClasses } from '@/lib/classes';

type PlayerStageProps = {
  badge?: string;
  title: string;
  note: string;
  chips: string[];
  cards: GridCard[];
  showcase?: HeroShowcaseItem[];
};

function renderStars(ratingValue: number) {
  const activeStars = Math.max(0, Math.min(5, Math.round(ratingValue)));

  return Array.from({ length: 5 }, (_, index) => (
    <span className={joinClasses('stage-showcase-card__star', index < activeStars && 'is-active')} key={`star-${index}`}>
      {'\u2605'}
    </span>
  ));
}

type ShowcasePromoCardProps = {
  item: HeroShowcaseItem;
  fallbackImage: string;
};

function ShowcasePromoCard({ item, fallbackImage }: ShowcasePromoCardProps) {
  return (
    <div className="stage-showcase-card stage-showcase-card--embedded stage-showcase-card--standalone">
      <CardMedia
        className="stage-showcase-card__media"
        imageAlt={item.imageAlt ?? item.title}
        imageSrc={item.imageSrc ?? fallbackImage}
        tone="stage"
        variant="banner"
      />
      <div className="stage-showcase-card__body">
        <div className="stage-showcase-card__heading">
          <div className="stage-showcase-card__title">{item.title}</div>
          {item.note ? <p className="stage-showcase-card__note">{item.note}</p> : null}
        </div>

        <div className="stage-showcase-card__game">
          <div className="stage-showcase-card__icon">{item.gameIcon}</div>
          <div className="stage-showcase-card__game-name" dir="auto">
            {item.gameName}
          </div>
        </div>

        <div className="stage-showcase-card__rating" dir="auto">
          <div aria-hidden="true" className="stage-showcase-card__stars">
            {renderStars(item.ratingValue)}
          </div>
          <div className="stage-showcase-card__rating-label">{item.ratingLabel}</div>
        </div>

        <ul className="stage-showcase-card__facts">
          <li className="stage-showcase-card__fact" dir="auto">
            {item.freeSpinsLabel}
          </li>
          <li className="stage-showcase-card__fact" dir="auto">
            {item.promoCodeLabel}
          </li>
          <li className="stage-showcase-card__fact" dir="auto">
            {item.validTillLabel}
          </li>
        </ul>
      </div>
    </div>
  );
}

export function PlayerStage({ badge, title, note, chips, cards, showcase }: PlayerStageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [leadCard, ...supportCards] = cards;
  const stageShowcase = showcase ?? [];
  const primaryShowcase = stageShowcase[0];
  const showcaseSlides = stageShowcase.length > 1 ? stageShowcase.slice(1) : stageShowcase;
  const showcaseSupportCards = supportCards.slice(0, 2);
  const hasFourCardShowcase = Boolean(primaryShowcase && showcaseSlides.length && showcaseSupportCards.length === 2);
  const currentShowcaseIndex = showcaseSlides.length ? activeIndex % showcaseSlides.length : 0;
  const heroStageImages = [
    '/home/hero/football.png',
    '/home/hero/casino.png',
    '/home/hero/promo.png',
  ];

  useEffect(() => {
    if (showcaseSlides.length <= 1) {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcaseSlides.length);
    }, 5200);

    return () => {
      window.clearInterval(timer);
    };
  }, [showcaseSlides.length]);

  return (
    <SurfaceCard className="stage-shell stage-shell--player mesh-frame h-full" data-hover="tilt" padding="lg" variant="stage">
      <div className="stage-grid h-full">
        <div className="stage-chip-row flex flex-wrap gap-2" data-reveal="scale">
          {chips.map((chip) => (
            <span className="stage-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <div className="stage-card-grid">
          {hasFourCardShowcase ? (
            <>
              <div
                className="stage-support-card stage-support-card--player stage-support-card--showcase rounded-[1.5rem] border border-[var(--color-border-soft)] p-4"
                data-float
              >
                <ShowcasePromoCard fallbackImage={heroStageImages[0]} item={primaryShowcase} />
              </div>
              <div className="stage-support-card stage-support-card--player stage-support-card--showcase rounded-[1.5rem] border border-[var(--color-border-soft)] p-4">
                <div className="stage-showcase stage-showcase--card">
                  <div className="stage-showcase__viewport">
                    <div className="stage-showcase__track" style={{ transform: `translateX(-${currentShowcaseIndex * 100}%)` }}>
                      {showcaseSlides.map((item) => (
                        <article className="stage-showcase__slide" key={`${item.title}-${item.gameName}`}>
                          <ShowcasePromoCard fallbackImage={heroStageImages[1]} item={item} />
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {showcaseSupportCards.map((card, index) => (
                <div
                  className="stage-support-card stage-support-card--player rounded-[1.5rem] border border-[var(--color-border-soft)] p-4"
                  data-float
                  key={card.title}
                >
                  <CardMedia
                    imageAlt={card.title}
                    imageSrc={heroStageImages[index + 1]}
                    tone="stage"
                    variant="compact"
                  />
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="stage-support-card__eyebrow">
                        {card.eyebrow}
                      </div>
                      <h4 className="stage-support-card__title">
                        {card.title}
                      </h4>
                    </div>
                    {card.metric ? (
                      <span
                        className="stage-support-card__metric"
                        dir="auto"
                      >
                        {card.metric}
                      </span>
                    ) : null}
                  </div>
                  <p className="stage-support-card__description">{card.description}</p>
                  {card.footnote ? (
                    <p className="mt-3 text-xs leading-6 text-[var(--color-primary-strong)]">{card.footnote}</p>
                  ) : null}
                </div>
              ))}
            </>
          ) : (
            <div className="surface-card surface-card--accent stage-focus-panel p-4 sm:p-5 lg:col-span-2" data-pulse>
                {badge || leadCard?.eyebrow ? (
                  <div className="stage-badge">
                    {badge ?? leadCard?.eyebrow}
                  </div>
                ) : null}
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="font-heading-face text-2xl text-[var(--color-foreground)]">{title}</h3>
                    <p className="mt-2 max-w-sm text-sm leading-7 text-[var(--color-foreground-soft)]">{note}</p>
                  </div>
                </div>
                {leadCard ? (
                  <div className="stage-lead-card mt-5 rounded-[1.2rem] border border-[var(--color-border-soft)] p-3">
                    <CardMedia imageAlt={leadCard.title} imageSrc={heroStageImages[0]} tone="stage" variant="compact" />
                    <div className="text-xs text-[var(--color-foreground-soft)]">{leadCard.eyebrow}</div>
                    <div className="font-heading-face mt-2 text-lg text-[var(--color-foreground)]">{leadCard.title}</div>
                    <p className="mt-2 text-sm leading-7 text-[var(--color-foreground-soft)]">{leadCard.description}</p>
                  </div>
                ) : null}
            </div>
          )}
        </div>
      </div>
    </SurfaceCard>
  );
}
