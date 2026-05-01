import type { Metadata } from 'next';

import { MarketPageShell } from '@/components/layout/MarketPageShell';
import { PartnershipContactCtaSection } from '@/components/sections/partnership/PartnershipContactCtaSection';
import { PartnershipHeroSection } from '@/components/sections/partnership/PartnershipHeroSection';
import { FeatureGridSection } from '@/components/sections/shared/FeatureGridSection';
import { StepsSection } from '@/components/sections/shared/StepsSection';
import { getIraqContent } from '@/content/markets/iraq';
import { getRequestLocale } from '@/lib/request-locale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const { partnership } = getIraqContent(locale);

  return {
    title: partnership.seo.title,
    description: partnership.seo.description,
  };
}

export default async function PartnershipPage() {
  const locale = await getRequestLocale();
  const content = getIraqContent(locale);
  const { partnership } = content;

  return (
    <MarketPageShell content={content} page="partnership">
      <PartnershipHeroSection hero={partnership.hero} />
      <FeatureGridSection section={partnership.benefits} tone="opportunity" variant="accent" />
      <FeatureGridSection section={partnership.routes} tone="routes" />
      <FeatureGridSection section={partnership.tools} tone="tools" variant="accent" />
      <StepsSection section={partnership.steps} tone="onboarding" />
      <PartnershipContactCtaSection content={partnership.finalCta} />
    </MarketPageShell>
  );
}
