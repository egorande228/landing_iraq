import Link from 'next/link';

import type { LinkAction, NavLink } from '@/content/markets/types';
import type { Locale } from '@/lib/i18n';

import { BrandLogo } from '@/components/brand/BrandLogo';
import { joinClasses } from '@/lib/classes';

type FooterProps = {
  brand: {
    name: string;
    tag: string;
  };
  description: string;
  links: NavLink[];
  note: string;
  locale: Locale;
  actionLinks?: LinkAction[];
};

function isExternalLink(link: LinkAction) {
  return link.external === true || link.href.startsWith('http') || link.href.startsWith('mailto:');
}

export function Footer({ brand, description, links, note, locale, actionLinks }: FooterProps) {
  return (
    <footer className="footer-shell">
      <div className="shell-container">
        <div className="footer-panel">
          <div
            className={joinClasses(
              'footer-main',
              'footer-main--brand-right',
            )}
          >
            <div
              className={joinClasses(
                'footer-brand',
                'footer-brand--brand-right',
              )}
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
            >
              <Link
                aria-label={brand.name}
                className={joinClasses(
                  'header-brand',
                  'footer-brand__logo--right',
                )}
                href="/"
              >
                <BrandLogo decorative size="footer" />
              </Link>
              <div className="footer-brand__copy">
                <p className="footer-tag text-sm font-semibold text-[var(--color-primary-strong)]">{brand.tag}</p>
                <p className="footer-description body-lead max-w-xl text-start">{description}</p>
              </div>
            </div>

            <div className="footer-links" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              {links.map((link) => (
                <Link className="nav-chip nav-chip--secondary" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-note text-sm leading-7 text-[var(--color-foreground-soft)]">{note}</p>

            {actionLinks?.length ? (
              <div className="footer-actions">
                {actionLinks.map((link) => (
                  isExternalLink(link) ? (
                    <a
                      className="nav-chip nav-chip--secondary"
                      href={link.href}
                      key={`${link.href}-${link.label}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link className="nav-chip nav-chip--secondary" href={link.href} key={`${link.href}-${link.label}`}>
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
