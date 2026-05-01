import type { GridCard } from '@/content/markets/types';

import { CardMedia } from '@/components/ui/CardMedia';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type PartnerStageProps = {
  badge?: string;
  title: string;
  note: string;
  chips: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
  cards: GridCard[];
};

export function PartnerStage({ badge, title, note, chips, metrics, cards }: PartnerStageProps) {
  const heroStageImages = [
    '/partnership/hero/partner.png',
    '/partnership/hero/agent.png',
    '/partnership/hero/manager.png',
  ];

  return (
    <SurfaceCard className="stage-shell stage-shell--partner mesh-frame h-full" data-hover="tilt" padding="lg" variant="stage">
      <div className="grid gap-4">
        <div className="stage-chip-row flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span className="stage-chip" key={chip}>
              {chip}
            </span>
          ))}
        </div>
        <div className="stage-focus-panel rounded-[1.6rem] border border-[var(--color-border-soft)] p-4 sm:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="stage-badge">
                {badge ?? cards[0]?.eyebrow}
              </div>
              <h3 className="font-heading-face mt-2 text-2xl text-[var(--color-foreground)]">{title}</h3>
            </div>
            {cards[0]?.metric ? (
              <div
                className="rounded-full border border-[var(--color-border-soft)] px-3 py-1 text-xs text-[var(--color-primary-strong)]"
                dir="auto"
              >
                {cards[0].metric}
              </div>
            ) : null}
          </div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-foreground-soft)]">{note}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {metrics.slice(0, 3).map((item) => (
              <div className="stage-metric-card rounded-[1.2rem] p-3" key={`${item.label}-${item.value}`}>
                <div className="text-xs text-[var(--color-foreground-soft)]">{item.label}</div>
                <div className="font-display-face mt-2 text-2xl text-[var(--color-foreground)]" dir="auto">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-3">
            <div className="signal-bar">
              <span style={{ width: '88%' }} />
            </div>
            <div className="signal-bar">
              <span style={{ width: '54%' }} />
            </div>
            <div className="signal-bar">
              <span style={{ width: '71%' }} />
            </div>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {cards.map((card, index) => (
            <div
              className="stage-support-card rounded-[1.4rem] border border-[var(--color-border-soft)] p-4"
              data-float
              key={card.title}
            >
              <CardMedia
                imageAlt={card.title}
                imageSrc={heroStageImages[index]}
                tone="stage"
                variant="compact"
              />
              <h4 className="font-heading-face text-lg text-[var(--color-foreground)]">{card.title}</h4>
              <p className="mt-3 text-sm leading-7 text-[var(--color-foreground-soft)]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SurfaceCard>
  );
}
