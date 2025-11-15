/**
 * Soul Design System Utilities
 * Layout helpers, mixins, and utility functions
 */

export const breakpoints = {
  mobile: '480px',   // max-width
  tablet: '1024px',  // max-width
  desktop: '1280px',
} as const;

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const;

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

/**
 * CSS-in-JS 헬퍼 함수들
 */
export const cssHelpers = {
  // Flexbox helpers
  flexRow: {
    display: 'flex',
    alignItems: 'center',
  },

  flexCol: {
    display: 'flex',
    flexDirection: 'column' as const,
  },

  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Position helpers
  floatCenter: {
    position: 'absolute' as const,
    left: '50%',
    transform: 'translateX(-50%)',
  },

  absoluteCenter: {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },

  // Scroll helpers
  scroll: {
    overflowX: 'hidden' as const,
    overflowY: 'auto' as const,
    overscrollBehavior: 'none' as const,
  },

  hiddenScroll: {
    scrollbarWidth: 'none' as const,
    msOverflowStyle: 'none' as const,
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  // Accessibility helper
  visuallyHidden: {
    position: 'absolute' as const,
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap' as const,
    border: 0,
  },

  // User interaction
  stopDrag: {
    userSelect: 'none' as const,
    WebkitUserSelect: 'none' as const,
    MozUserSelect: 'none' as const,
    msUserSelect: 'none' as const,
  },

  // Text helpers
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as const,
  },

  lineClamp: (lines: number) => ({
    display: '-webkit-box',
    WebkitLineClamp: lines,
    WebkitBoxOrient: 'vertical' as const,
    overflow: 'hidden',
  }),
} as const;

/**
 * Media query 헬퍼
 */
export const mediaQueries = {
  mobile: `@media only screen and (max-width: ${breakpoints.mobile})`,
  tablet: `@media only screen and (max-width: ${breakpoints.tablet})`,
  desktop: `@media only screen and (min-width: ${breakpoints.desktop})`,
} as const;
