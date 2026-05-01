import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import type { ReactNode } from 'react';

import { getIraqContent } from '@/content/markets/iraq';
import { getRequestLocale } from '@/lib/request-locale';
import { themeToCssVariables } from '@/lib/theme';
import { iraqTheme } from '@/themes/iraq';

import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-main',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MELBET Iraq',
  description: 'Sports, casino, promos, and partnership routes inside one premium Iraq landing system.',
};

type RootLayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getRequestLocale();
  const content = getIraqContent(locale);
  const themeVariables = themeToCssVariables(iraqTheme);
  const criticalStyles = `
    a{color:inherit;text-decoration:none}
    button,a,summary{-webkit-tap-highlight-color:transparent}
    .shell-container{width:100%;max-width:74rem;margin-inline:auto;padding-inline:1rem}
    .brand-logo{display:inline-flex;max-width:100%}
    .brand-logo__svg{display:block;max-width:100%;height:auto}
    @media (min-width:640px){.shell-container{padding-inline:1.5rem}}
  `;

  return (
    <html dir={content.direction} lang={content.locale}>
      <body
        className={cairo.variable}
        style={{
          ...themeVariables,
          margin: 0,
          minHeight: '100vh',
          background: '#050505',
          color: iraqTheme.color.foreground,
          fontFamily: iraqTheme.type.body,
          overflowX: 'clip',
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />
        {children}
      </body>
    </html>
  );
}
