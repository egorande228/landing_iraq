import type { StepsBlock } from '@/content/markets/types';

import { RevealGroup } from '@/components/motion/RevealGroup';
import { SectionShell, type SectionTone } from '@/components/layout/SectionShell';
import { CardMedia } from '@/components/ui/CardMedia';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type StepsSectionProps = {
  section: StepsBlock;
  tone?: SectionTone;
};

export function StepsSection({ section, tone = 'onboarding' }: StepsSectionProps) {
  return (
    <RevealGroup>
      <SectionShell
        description={section.description}
        eyebrow={section.eyebrow}
        id={section.id}
        tone={tone}
        title={section.title}
      >
        <div className="steps-grid">
          {section.items.map((item, index) => (
            <SurfaceCard
              className="step-card min-h-[18rem]"
              data-hover="lift"
              data-reveal="scale"
              key={item.step}
              variant="accent"
            >
              <CardMedia
                imageAlt={item.title}
                imageSrc={section.id === 'onboarding' ? `/partnership/onboarding/${index + 1}.png` : undefined}
                tone={tone}
                variant="compact"
              />
              <div className="flex items-center justify-between gap-3">
                <span className="step-card__dot" />
                <span className="font-display-face text-2xl text-[var(--color-foreground)]" dir="auto">
                  {item.step}
                </span>
              </div>
              <h3 className="font-heading-face mt-5 text-xl text-[var(--color-foreground)]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-foreground-soft)]">{item.description}</p>
            </SurfaceCard>
          ))}
        </div>
      </SectionShell>
    </RevealGroup>
  );
}
