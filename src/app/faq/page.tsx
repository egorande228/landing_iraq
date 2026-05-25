import type { Metadata } from 'next';

import { MarketPageShell } from '@/components/layout/MarketPageShell';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { FinalCtaSection } from '@/components/sections/shared/FinalCtaSection';
import { CardMedia } from '@/components/ui/CardMedia';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { HighlightedText } from '@/components/ui/HighlightedText';
import { SurfaceCard } from '@/components/ui/SurfaceCard';
import { getIraqContent } from '@/content/markets/iraq';
import { getRequestLocale } from '@/lib/request-locale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { faq } = getIraqContent(locale);

  return {
    title: faq.seo.title,
    description: faq.seo.description,
  };
}

export default async function FaqPage() {
  const locale = await getRequestLocale();
  const content = getIraqContent(locale);
  const { faq } = content;

  return (
    <MarketPageShell content={content} page="faq">
      <section className="faq-intro section-pad" id={faq.intro.id}>
        <div className="shell-container">
          <RevealGroup className="faq-intro__layout">
            <div className="faq-intro__copy text-start">
              <div data-reveal>
                <Eyebrow>{faq.intro.eyebrow}</Eyebrow>
              </div>
              <h1 className="section-heading faq-intro__title mt-4 text-start" data-reveal>
                <HighlightedText phrases={faq.intro.highlightPhrases} text={faq.intro.title} />
              </h1>
              <p className="body-lead mt-4 max-w-2xl text-start" data-reveal>
                {faq.intro.description}
              </p>
            </div>
          </RevealGroup>
        </div>
      </section>
      <section className="story-section story-section--faq section-pad pt-0">
        <div aria-hidden="true" className="story-section__scene">
          <span className="story-section__glow story-section__glow--amber" />
          <span className="story-section__glow story-section__glow--emerald" />
          <span className="story-section__plate story-section__plate--one" />
          <span className="story-section__plate story-section__plate--two" />
          <span className="story-section__pattern" />
        </div>
        <div className="shell-container story-section__content">
          <RevealGroup className="faq-board grid gap-5 lg:grid-cols-2">
            <div className="faq-column" data-reveal="scale" id={faq.player.id}>
              <div className="faq-column__intro text-start">
                <Eyebrow>{faq.player.eyebrow}</Eyebrow>
                <h2 className="section-heading mt-4 text-start">
                  <HighlightedText phrases={faq.player.highlightPhrases} text={faq.player.title} />
                </h2>
                <p className="body-lead mt-4 text-start">{faq.player.description}</p>
              </div>
              <SurfaceCard className="faq-group-card p-5 sm:p-6" data-hover="lift">
                <CardMedia imageAlt={faq.player.title} imageSrc="/faq/players.png" priority tone="faq" variant="banner" />
                <div className="space-y-3">
                  {faq.player.items.map((item) => (
                    <FaqAccordion item={item} key={item.question} />
                  ))}
                </div>
              </SurfaceCard>
            </div>
            <div className="faq-column" data-reveal="scale" id={faq.partnership.id}>
              <div className="faq-column__intro text-start">
                <Eyebrow>{faq.partnership.eyebrow}</Eyebrow>
                <h2 className="section-heading mt-4 text-start">
                  <HighlightedText phrases={faq.partnership.highlightPhrases} text={faq.partnership.title} />
                </h2>
                <p className="body-lead mt-4 text-start">{faq.partnership.description}</p>
              </div>
              <SurfaceCard className="faq-group-card faq-group-card--accent p-5 sm:p-6" data-hover="lift" variant="accent">
                <CardMedia
                  imageAlt={faq.partnership.title}
                  imageSrc="/faq/partners.png"
                  tone="faq"
                  variant="banner"
                />
                <div className="space-y-3">
                  {faq.partnership.items.map((item) => (
                    <FaqAccordion item={item} key={item.question} />
                  ))}
                </div>
              </SurfaceCard>
            </div>
          </RevealGroup>
        </div>
      </section>
      <FinalCtaSection content={faq.support} tone="faq" />
    </MarketPageShell>
  );
}
