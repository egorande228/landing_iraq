import type { CSSProperties } from 'react';

import type { ThemeTokens } from '@/themes/base';

export function themeToCssVariables(theme: ThemeTokens): CSSProperties {
  const variables: CSSProperties & Record<`--${string}`, string> = {
    '--color-bg': theme.color.bg,
    '--color-bg-top': theme.color.bgTop,
    '--color-foreground': theme.color.foreground,
    '--color-foreground-soft': theme.color.foregroundSoft,
    '--color-primary': theme.color.primary,
    '--color-primary-soft': theme.color.primarySoft,
    '--color-primary-strong': theme.color.primaryStrong,
    '--color-highlight': theme.color.highlight ?? theme.color.secondary ?? theme.color.primaryStrong,
    '--color-secondary': theme.color.secondary ?? theme.color.primarySoft,
    '--color-surface': theme.color.surface,
    '--color-surface-strong': theme.color.surfaceStrong,
    '--color-surface-accent': theme.color.surfaceAccent,
    '--color-border-soft': theme.color.borderSoft,
    '--color-border-strong': theme.color.borderStrong,
    '--color-grid-line': theme.color.gridLine,
    '--color-glow': theme.color.glow,
    '--font-display': theme.type.display,
    '--font-heading': theme.type.heading,
    '--font-subheading': theme.type.subheading,
    '--font-body': theme.type.body,
    '--font-label': theme.type.label,
    '--radius-sm': theme.radius.sm,
    '--radius-md': theme.radius.md,
    '--radius-lg': theme.radius.lg,
    '--radius-xl': theme.radius.xl,
    '--radius-pill': theme.radius.pill,
    '--shadow-soft': theme.shadow.soft,
    '--shadow-card': theme.shadow.card,
    '--shadow-hero': theme.shadow.hero,
    '--shadow-glow': theme.shadow.glow,
    '--space-section-mobile': theme.space.sectionYMobile,
    '--space-section': theme.space.sectionY,
    '--space-card-padding': theme.space.cardPadding,
    '--space-grid-gap': theme.space.gridGap,
    '--motion-duration-fast': `${theme.motion.durationFast}ms`,
    '--motion-duration-base': `${theme.motion.durationBase}ms`,
    '--motion-duration-slow': `${theme.motion.durationSlow}ms`,
    '--motion-ease-standard': theme.motion.easingStandard,
    '--motion-ease-entrance': theme.motion.easingEntrance,
    '--motion-ease-emphasis': theme.motion.easingEmphasis,
  };

  return variables;
}
