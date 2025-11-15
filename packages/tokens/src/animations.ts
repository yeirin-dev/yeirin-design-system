/**
 * Soul Design System Animations
 * 다양한 애니메이션 효과와 transition 설정
 */

export const animations = {
  // Fade animations
  fadeIn: {
    name: 'fadeIn',
    keyframes: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    duration: '0.3s',
    timingFunction: 'ease-in-out',
  },

  fadeOut: {
    name: 'fadeOut',
    keyframes: {
      '0%': { opacity: 1 },
      '100%': { opacity: 0 },
    },
    duration: '0.3s',
    timingFunction: 'ease-in-out',
  },

  // Slide animations
  slideUp: {
    name: 'slideUp',
    keyframes: {
      from: { transform: 'translateY(100%)' },
      to: { transform: 'translateY(0)' },
    },
    duration: '0.3s',
    timingFunction: 'ease-out',
  },

  slideDown: {
    name: 'slideDown',
    keyframes: {
      from: { transform: 'translateY(0)' },
      to: { transform: 'translateY(100%)' },
    },
    duration: '0.3s',
    timingFunction: 'ease-in',
  },

  slideIn: {
    name: 'slideIn',
    keyframes: {
      from: { transform: 'translateX(-240px)' },
      to: { transform: 'translateX(0)' },
    },
    duration: '0.3s',
    timingFunction: 'ease-out',
  },

  // Scale animations
  expand: {
    name: 'expand',
    keyframes: {
      '0%': { transform: 'scale(0)' },
      '100%': { transform: 'scale(1)' },
    },
    duration: '0.2s',
    timingFunction: 'ease-out',
  },

  shrink: {
    name: 'shrink',
    keyframes: {
      '0%': { transform: 'scale(1)' },
      '100%': { transform: 'scale(0)' },
    },
    duration: '0.2s',
    timingFunction: 'ease-in',
  },

  // Bounce animation
  bounceIn: {
    name: 'bounceIn',
    keyframes: {
      '0%': {
        opacity: 0,
        transform: 'scale3d(0.8, 0.8, 0.8)',
      },
      '60%': {
        transform: 'scale3d(1.02, 1.02, 1.02)',
      },
      '80%': {
        transform: 'scale3d(0.95, 0.95, 0.95)',
      },
      '100%': {
        opacity: 1,
        transform: 'scale(1)',
      },
    },
    duration: '0.5s',
    timingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
} as const;

export const transitions = {
  // Common transitions
  fast: '0.15s ease',
  base: '0.2s ease',
  slow: '0.3s ease',
  slower: '0.5s ease',

  // Specific property transitions
  colors: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
  transform: 'transform 0.2s ease',
  all: 'all 0.2s ease',
} as const;

export const easings = {
  linear: 'linear',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
} as const;
