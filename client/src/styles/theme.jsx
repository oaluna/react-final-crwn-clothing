// ============================================================================
// Global style file
// ----------------------------------------------------------------------------
// Single source of truth for design tokens (colors, fonts, breakpoints) and
// reusable style snippets shared across every styled-components file in the
// app. Import from here instead of re-declaring colors, media queries, or
// flex/shadow patterns in individual `*.styles.jsx` files.
// ============================================================================
import { css } from 'styled-components';

// ----------------------------------------------------------------------------
// Colors
// ----------------------------------------------------------------------------
// Mirrors the CSS custom properties defined in `src/App.css` (`:root`) so the
// same palette is usable both in plain CSS and inside styled-components
// template literals / JS logic.
export const colors = {
  bgDark: 'var(--bg-dark)', // #d4ac79
  bgLight: 'var(--bg-light)', // #c97d7e
  bgMuted: 'var(--bg-muted)', // #9CA790
  primary: 'var(--color-primary)', // #f8d2d3
  secondary: 'var(--color-secondary)', // #ffe5b4
  highlight: 'var(--color-highlight)', // #f19591
  warning: 'var(--color-warning)', // #8A5A65
  success: 'var(--color-success)', // #6b9e78
  textDark: 'var(--text-dark)', // #6f686d
  textMedium: 'var(--text-medium)', // #7a7a7a
  textLight: 'var(--text-light)', // #F9F4EE

  // Brand accents used across product/collection cards and buttons.
  tan: '#c7ac92',
  rust: '#a44a3f',
  teal: '#2f8e89',

  // Neutral grayscale used for borders, muted text, and surfaces.
  black: '#000',
  white: '#fff',
  gray: 'grey',
  grayDark: '#333',
  grayMedium: '#636767',
  grayBorder: '#ddd',
  grayBorderLight: '#eee',
  graySubtle: '#aaa',
  graySurface: '#f9f9f9',

  googleBlue: '#4285f4',
  googleBlueHover: '#357ae8',

  // One-off accents used by a single component; kept here (rather than as
  // inline literals) so every color in the app still resolves to one place.
  link: 'blue',
  gold: 'goldenrod'
};

export const fonts = {
  body: 'var(--font-body)', // 'Arial', sans-serif
  header: 'var(--font-header)' // 'Roboto', serif
};

// ----------------------------------------------------------------------------
// Breakpoints
// ----------------------------------------------------------------------------
// Named breakpoints cover the values reused three or more times across the
// app. One-off breakpoints stay inline via `media.down(px)` / `media.up(px)`
// so component-specific layouts aren't forced onto a shared value.
export const breakpoints = {
  small: 360,
  mobile: 540,
  tablet: 768,
  tabletLarge: 800,
  laptop: 900
};

const buildQuery = (query, args) => css`
  @media ${query} {
    ${css(...args)}
  }
`;

export const media = {
  small: (...args) => buildQuery(`(max-width: ${breakpoints.small}px)`, args),
  mobile: (...args) => buildQuery(`(max-width: ${breakpoints.mobile}px)`, args),
  tablet: (...args) => buildQuery(`(max-width: ${breakpoints.tablet}px)`, args),
  tabletUp: (...args) => buildQuery(`(min-width: ${breakpoints.tablet}px)`, args),
  tabletLarge: (...args) => buildQuery(`(max-width: ${breakpoints.tabletLarge}px)`, args),
  laptop: (...args) => buildQuery(`(max-width: ${breakpoints.laptop}px)`, args),
  down: (px) => (...args) => buildQuery(`(max-width: ${px}px)`, args),
  up: (px) => (...args) => buildQuery(`(min-width: ${px}px)`, args)
};

// ----------------------------------------------------------------------------
// Shared style snippets
// ----------------------------------------------------------------------------
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumnCenter = css`
  ${flexColumn}
  align-items: center;
  justify-content: center;
`;

// Soft drop shadow reused on cards/dropdowns (`0px 1.5px Npx rgba(0,0,0,0.3)`).
export const softShadow = (blur = '5px') => css`
  box-shadow: 0px 1.5px ${blur} rgba(0, 0, 0, 0.3);
`;

export const transitionDefault = css`
  transition: all 0.2s ease;
`;
