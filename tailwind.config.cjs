import defaultTheme from 'tailwindcss/defaultTheme';
import typographyPlugin from '@tailwindcss/typography';

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        callout: {
          bg: 'var(--aw-color-callout-bg)',
          bgDark: 'var(--aw-color-callout-bgDark)',
        },
        borderLight: 'var(--aw-color-border-light)',
        focusRing: 'var(--aw-color-focus-ring)',
        focusRingOffset: 'var(--aw-color-focus-ring-offset)',
        btnHover: 'var(--aw-color-btn-hover)',
        btnHoverBorder: 'var(--aw-color-btn-hover-border)',
        btnHoverDark: 'var(--aw-color-btn-hover-dark)',
        textHover: 'var(--aw-color-text-hover)',
        headerScroll: 'var(--aw-color-header-scroll)',
        headerScrollDark: 'var(--aw-color-header-scroll-dark)',
        headerBorderDark: 'var(--aw-color-header-border-dark)',
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typographyPlugin],
  darkMode: 'class',
};