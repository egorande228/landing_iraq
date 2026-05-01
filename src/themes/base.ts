export type ThemeTokens = {
  color: {
    bg: string;
    bgTop: string;
    foreground: string;
    foregroundSoft: string;
    primary: string;
    primarySoft: string;
    primaryStrong: string;
    highlight?: string;
    secondary?: string;
    surface: string;
    surfaceStrong: string;
    surfaceAccent: string;
    borderSoft: string;
    borderStrong: string;
    gridLine: string;
    glow: string;
    success?: string;
    danger?: string;
  };
  type: {
    display: string;
    heading: string;
    subheading: string;
    cardTitle: string;
    bodyLg: string;
    body: string;
    label: string;
    meta: string;
    metric: string;
    metricSecondary: string;
    stat: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    pill: string;
  };
  space: {
    sectionY: string;
    sectionYMobile: string;
    containerX: string;
    cardPadding: string;
    gridGap: string;
  };
  shadow: {
    soft: string;
    card: string;
    hero: string;
    glow: string;
  };
  motion: {
    durationFast: number;
    durationBase: number;
    durationSlow: number;
    durationLoop: number;
    easingStandard: string;
    easingEntrance: string;
    easingEmphasis: string;
  };
};

export const baseTheme: ThemeTokens = {
  color: {
    bg: '#080808',
    bgTop: '#121212',
    foreground: '#f4ead7',
    foregroundSoft: '#d0c4b2',
    primary: '#d8a131',
    primarySoft: 'rgba(216, 161, 49, 0.12)',
    primaryStrong: '#f0c25b',
    highlight: '#9ed6d0',
    secondary: '#f4ead7',
    surface: '#151312',
    surfaceStrong: '#1b1816',
    surfaceAccent: '#191614',
    borderSoft: 'rgba(240, 194, 91, 0.14)',
    borderStrong: 'rgba(240, 194, 91, 0.3)',
    gridLine: 'rgba(255, 255, 255, 0.05)',
    glow: 'rgba(216, 161, 49, 0.22)',
    success: '#f0c25b',
    danger: '#d46b4c',
  },
  type: {
    display: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
    heading: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
    subheading: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
    cardTitle: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
    bodyLg: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
    body: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
    label: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
    meta: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
    metric: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
    metricSecondary: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
    stat: 'var(--font-main), "Segoe UI", Tahoma, sans-serif',
  },
  radius: {
    sm: '0.8rem',
    md: '1.1rem',
    lg: '1.5rem',
    xl: '2rem',
    pill: '999px',
  },
  space: {
    sectionY: '4.5rem',
    sectionYMobile: '3rem',
    containerX: '1rem',
    cardPadding: '1.1rem',
    gridGap: '1rem',
  },
  shadow: {
    soft: '0 18px 48px rgba(0, 0, 0, 0.16)',
    card: '0 28px 70px rgba(0, 0, 0, 0.28)',
    hero: '0 36px 110px rgba(0, 0, 0, 0.38)',
    glow: '0 0 90px rgba(232, 173, 70, 0.2)',
  },
  motion: {
    durationFast: 220,
    durationBase: 420,
    durationSlow: 760,
    durationLoop: 5200,
    easingStandard: 'easeOutCubic',
    easingEntrance: 'cubicBezier(0.22, 1, 0.36, 1)',
    easingEmphasis: 'easeOutExpo',
  },
};
