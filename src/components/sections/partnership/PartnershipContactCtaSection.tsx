import Image from 'next/image';

import type { PartnershipContactCtaContent } from '@/content/markets/types';

import { RevealGroup } from '@/components/motion/RevealGroup';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { HighlightedText } from '@/components/ui/HighlightedText';
import { SurfaceCard } from '@/components/ui/SurfaceCard';

type PartnershipContactCtaSectionProps = {
  content: PartnershipContactCtaContent;
};

function isExternalLink(href: string) {
  return href.startsWith('http') || href.startsWith('mailto:');
}

export function PartnershipContactCtaSection({ content }: PartnershipContactCtaSectionProps) {
  return (
    <section className="partner-cta-section section-pad" id={content.id}>
      <div aria-hidden="true" className="partner-cta-section__scene">
        <span className="partner-cta-section__glow partner-cta-section__glow--amber" />
        <span className="partner-cta-section__glow partner-cta-section__glow--emerald" />
        <span className="partner-cta-section__plate" />
      </div>
      <div className="shell-container partner-cta-section__content">
        <RevealGroup>
          <SurfaceCard
            className="partner-cta-surface mesh-frame overflow-hidden p-5 sm:p-6 lg:p-8"
            data-hover="tilt"
            data-reveal="scale"
            variant="stage"
          >
            <div className="partner-contact">
              <div className="text-start">
                <div data-reveal>
                  <Eyebrow>{content.eyebrow}</Eyebrow>
                </div>
                <h2 className="section-heading mt-4 text-start" data-reveal>
                  <HighlightedText
                    phrases={['Partner', 'partner', 'Agent', 'agent', 'الشراكة', 'شريك', 'وكيل']}
                    text={content.title}
                  />
                </h2>
                <p className="body-lead mt-4 max-w-2xl text-start" data-reveal>
                  {content.description}
                </p>
              </div>

              <div className="partner-contact__actions" data-reveal>
                {content.channels.map((channel) => {
                  const href = channel.href === '#' ? '#final-cta' : channel.href;

                  return (
                    <a
                      className="messaging-button"
                      href={href}
                      key={`${channel.platform}-${channel.label}`}
                      rel={isExternalLink(channel.href) ? 'noreferrer' : undefined}
                      target={isExternalLink(channel.href) ? '_blank' : undefined}
                    >
                      {channel.iconSrc ? (
                        <Image
                          alt={channel.label}
                          className="messaging-button__icon"
                          height={22}
                          src={channel.iconSrc}
                          width={22}
                        />
                      ) : null}
                      <span>{channel.label}</span>
                    </a>
                  );
                })}
              </div>

              <div className="partner-contact__meta" data-reveal>
                {content.helperText ? (
                  <p className="text-sm leading-7 text-[var(--color-foreground-soft)]">{content.helperText}</p>
                ) : null}
                <a className="partner-contact__faq-link" href={content.primaryCta.href}>
                  {content.primaryCta.label}
                </a>
              </div>
            </div>
          </SurfaceCard>
        </RevealGroup>
      </div>
    </section>
  );
}
