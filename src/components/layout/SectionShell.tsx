import type { ReactNode } from 'react';

import { HighlightedText } from '@/components/ui/HighlightedText';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { joinClasses } from '@/lib/classes';

export type SectionTone =
  | 'default'
  | 'sports'
  | 'casino'
  | 'offers'
  | 'trust'
  | 'opportunity'
  | 'routes'
  | 'tools'
  | 'onboarding'
  | 'faq';

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  highlightPhrases?: string[];
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = 'default',
  highlightPhrases,
}: SectionShellProps) {
  return (
    <section className={joinClasses('story-section', `story-section--${tone}`, 'section-pad', className)} id={id}>
      <div aria-hidden="true" className="story-section__scene">
        <span className="story-section__glow story-section__glow--amber" />
        <span className="story-section__glow story-section__glow--emerald" />
        <span className="story-section__plate story-section__plate--one" />
        <span className="story-section__plate story-section__plate--two" />
        <span className="story-section__pattern" />
      </div>
      <div className="shell-container story-section__content">
        <div className="section-intro text-start">
          <div data-reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 className="section-heading mt-4 text-start" data-reveal>
            <HighlightedText phrases={highlightPhrases} text={title} />
          </h2>
          <p className="body-lead mt-4 text-start" data-reveal>
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}
