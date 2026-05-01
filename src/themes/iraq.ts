import { baseTheme, type ThemeTokens } from '@/themes/base';

export const iraqTheme: ThemeTokens = {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    bg: '#070707',
    bgTop: '#111111',
    foreground: '#f4ead7',
    foregroundSoft: '#cec2b0',
    primary: '#d9a43a',
    primarySoft: 'rgba(217, 164, 58, 0.12)',
    primaryStrong: '#f0c25b',
    highlight: '#a7ddd7',
    secondary: '#f4ead7',
    surface: '#151312',
    surfaceStrong: '#1a1715',
    surfaceAccent: '#181513',
    borderSoft: 'rgba(240, 194, 91, 0.14)',
    borderStrong: 'rgba(240, 194, 91, 0.32)',
    glow: 'rgba(217, 164, 58, 0.2)',
  },
  space: {
    ...baseTheme.space,
    sectionY: '4.8rem',
    sectionYMobile: '3.2rem',
  },
  shadow: {
    ...baseTheme.shadow,
    soft: '0 22px 60px rgba(0, 0, 0, 0.2)',
    card: '0 34px 90px rgba(0, 0, 0, 0.34)',
    hero: '0 42px 130px rgba(0, 0, 0, 0.42)',
    glow: '0 0 120px rgba(255, 182, 66, 0.18)',
  },
};
