import Link from 'next/link';

import type { NavLink } from '@/content/markets/types';
import type { Locale } from '@/lib/i18n';

import { BrandLogo } from '@/components/brand/BrandLogo';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { joinClasses } from '@/lib/classes';

type HeaderProps = {
  brand: {
    name: string;
    tag: string;
  };
  globalLinks: NavLink[];
  contextLinks: NavLink[];
  locale: Locale;
  pathname: string;
  ui: {
    languageLabel: string;
  };
};

const globalNavOrder: Record<string, number> = {
  '/': 0,
  '/partnership': 1,
  '/faq': 2,
};

function isActiveRoute(pathname: string, href: string) {
  const route = href.split('#')[0] || '/';

  return route === pathname;
}

export function Header({ brand, globalLinks, contextLinks, locale, pathname, ui }: HeaderProps) {
  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  const orderedGlobalLinks = [...globalLinks].sort(
    (left, right) => (globalNavOrder[left.href] ?? Number.MAX_SAFE_INTEGER) - (globalNavOrder[right.href] ?? Number.MAX_SAFE_INTEGER),
  );
  const brandLink = (
    <Link aria-label={brand.name} className="header-brand" href="/">
      <BrandLogo decorative size="nav" />
    </Link>
  );
  const navBlock = (
    <div className="header-top__nav" dir={direction}>
      <nav aria-label="Primary navigation" className="header-scroll">
        <div className="header-scroll__inner" dir={direction}>
          {orderedGlobalLinks.map((link) => (
            <Link
              className={joinClasses('nav-chip', 'nav-chip--primary')}
              data-active={isActiveRoute(pathname, link.href)}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
      <LanguageSwitcher label={ui.languageLabel} locale={locale} />
    </div>
  );

  return (
    <header className="header-shell">
      <div className="shell-container">
        <div className="header-panel">
          <div className="header-top" dir={direction}>
            {navBlock}
            {brandLink}
          </div>

          <nav aria-label="Section navigation" className="header-scroll header-scroll--context">
            <div className="header-scroll__inner" dir={direction}>
              {contextLinks.map((link) => (
                <Link className={joinClasses('nav-chip', 'nav-chip--secondary')} href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
