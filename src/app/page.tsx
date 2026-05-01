import type { Metadata } from 'next';

import { MarketPageShell } from '@/components/layout/MarketPageShell';
import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection';
import { FeatureGridSection } from '@/components/sections/shared/FeatureGridSection';
import { FinalCtaSection } from '@/components/sections/shared/FinalCtaSection';
import { getIraqContent } from '@/content/markets/iraq';
import { getRequestLocale } from '@/lib/request-locale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { home } = getIraqContent(locale);

  return {
    title: home.seo.title,
    description: home.seo.description,
  };
}

export default async function HomePage() {
  const locale = await getRequestLocale();
  const content = getIraqContent(locale);
  const { home } = content;

  return (
    <MarketPageShell content={content} page="home">
      <HomeHeroSection hero={home.hero} />
      <FeatureGridSection section={home.sports} tone="sports" variant="media" />
      <FeatureGridSection section={home.casino} tone="casino" variant="media" />
      <FeatureGridSection section={home.promos} tone="offers" variant="accent" />
      <FeatureGridSection section={home.trust} tone="trust" />
      <FinalCtaSection content={home.finalCta} tone="player" />
    </MarketPageShell>
  );
}
