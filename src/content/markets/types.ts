import type { Direction } from '@/lib/direction';
import type { Locale } from '@/lib/i18n';

export type LinkAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavLink = LinkAction;

export type ContactAction = LinkAction & {
  iconSrc?: string;
  platform: 'telegram' | 'whatsapp';
};

export type StatItem = {
  value: string;
  label: string;
  note: string;
};

export type GridCard = {
  eyebrow?: string;
  title: string;
  description: string;
  metric?: string;
  footnote?: string;
  bullets?: string[];
};

export type SectionBlock<TCard = GridCard> = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cards: TCard[];
};

export type HeroStageMetric = {
  label: string;
  value: string;
};

export type HeroShowcaseItem = {
  title: string;
  note?: string;
  imageSrc?: string;
  imageAlt?: string;
  gameIcon: string;
  gameName: string;
  ratingValue: number;
  ratingLabel: string;
  freeSpinsLabel: string;
  promoCodeLabel: string;
  validTillLabel: string;
};

export type HeroContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: LinkAction;
  secondaryCta?: LinkAction;
  highlights?: string[];
  stats: StatItem[];
  stageBadge?: string;
  stageChips: string[];
  stageTitle: string;
  stageNote: string;
  stageMetrics: HeroStageMetric[];
  stageCards: GridCard[];
  stageShowcase?: HeroShowcaseItem[];
};

export type StepItem = {
  step: string;
  title: string;
  description: string;
};

export type StepsBlock = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: StepItem[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
};

export type FinalCtaContent = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: LinkAction;
  secondaryCta?: LinkAction;
};

export type PartnershipContactCtaContent = FinalCtaContent & {
  channels: ContactAction[];
  helperText?: string;
};

export type MarketContent = {
  market: string;
  locale: Locale;
  direction: Direction;
  seo: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tag: string;
  };
  ui: {
    languageLabel: string;
  };
  navigation: {
    global: NavLink[];
    home: NavLink[];
    partnership: NavLink[];
    faq: NavLink[];
  };
  footer: {
    description: string;
    links: NavLink[];
    note: string;
    actionLinks?: LinkAction[];
  };
  home: {
    seo: {
      title: string;
      description: string;
    };
    hero: HeroContent;
    sports: SectionBlock;
    casino: SectionBlock;
    promos: SectionBlock;
    trust: SectionBlock;
    finalCta: FinalCtaContent;
  };
  partnership: {
    seo: {
      title: string;
      description: string;
    };
    hero: HeroContent;
    benefits: SectionBlock;
    routes: SectionBlock;
    tools: SectionBlock;
    steps: StepsBlock;
    finalCta: PartnershipContactCtaContent;
  };
  faq: {
    seo: {
      title: string;
      description: string;
    };
    intro: FinalCtaContent;
    player: FaqGroup;
    partnership: FaqGroup;
    support: FinalCtaContent;
  };
};
