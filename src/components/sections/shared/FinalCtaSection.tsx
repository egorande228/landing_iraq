import type { FinalCtaContent } from '@/content/markets/types';

import { RevealGroup } from '@/components/motion/RevealGroup';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { HighlightedText } from '@/components/ui/HighlightedText';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type FinalCtaSectionProps = {
  content: FinalCtaContent;
  tone?: 'player' | 'partner' | 'faq';
};

export function FinalCtaSection({ content, tone = 'player' }: FinalCtaSectionProps) {
  const glowPhrases =
    tone === 'partner'
      ? ['Partner', 'partner', 'Agent', 'agent', 'الشراكة', 'شريك', 'وكيل']
      : tone === 'player'
        ? ['Start', 'start', 'Rewards', 'Bonus', 'ابدأ', 'مكافآت']
        : ['FAQ', 'Players', 'Partnership', 'اللاعبين', 'الشراكة'];

  return (
    <section className={`cta-section cta-section--${tone} section-pad`} id={content.id}>
      <div aria-hidden="true" className="cta-section__scene">
        <span className="cta-section__glow cta-section__glow--amber" />
        <span className="cta-section__glow cta-section__glow--emerald" />
        <span className="cta-section__plate" />
      </div>
      <div className="shell-container cta-section__content">
        <RevealGroup>
          <SurfaceCard
            className={`cta-surface cta-surface--${tone} mesh-frame overflow-hidden p-5 sm:p-6 lg:p-8`}
            data-reveal="scale"
            variant={tone === 'partner' ? 'accent' : 'stage'}
          >
            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div className="text-start">
                <div data-reveal>
                  <Eyebrow>{content.eyebrow}</Eyebrow>
                </div>
                <h2 className="section-heading mt-4 text-start" data-reveal>
                  <HighlightedText phrases={glowPhrases} text={content.title} />
                </h2>
                <p className="body-lead mt-4 max-w-2xl text-start" data-reveal>
                  {content.description}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2" data-reveal>
                <Button className="w-full" href={content.primaryCta.href} size="lg">
                  {content.primaryCta.label}
                </Button>
                {content.secondaryCta ? (
                  <Button className="w-full" href={content.secondaryCta.href} size="lg" variant="secondary">
                    {content.secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            </div>
          </SurfaceCard>
        </RevealGroup>
      </div>
    </section>
  );
}
