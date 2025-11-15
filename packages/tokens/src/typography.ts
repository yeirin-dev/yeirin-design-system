/**
 * Soul Design System Typography
 * Base: 8px (html font-size: 50%)
 * Fonts: Pretendard (400, 600, 700), Tmoney (special)
 */

export const fontFamily = {
  sans: 'Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  tmoney: 'Tmoney, Pretendard, sans-serif', // 특수 폰트
  mono: 'Menlo, Monaco, "Courier New", monospace',
} as const;

export const fontSize = {
  xs: '1rem',      // 8px  (8 * 1)
  sm: '1.25rem',   // 10px (8 * 1.25)
  base: '1.75rem', // 14px (8 * 1.75)
  md: '2rem',      // 16px (8 * 2)
  lg: '2.25rem',   // 18px (8 * 2.25)
  xl: '2.5rem',    // 20px (8 * 2.5)
  '2xl': '3rem',   // 24px (8 * 3)
  '3xl': '3.5rem', // 28px (8 * 3.5)
  '4xl': '4.5rem', // 36px (8 * 4.5)
  '5xl': '6rem',   // 48px (8 * 6)
} as const;

export const fontWeight = {
  regular: '400',   // pr - Pretendard Regular
  semibold: '600',  // ps - Pretendard SemiBold
  bold: '700',      // pb - Pretendard Bold
  normal: '400',    // tb - Tmoney normal
} as const;

export const lineHeight = {
  none: '1',
  tight: '1.3',     // Soul: 대형 텍스트 (≥28px)
  normal: '1.4',    // Soul: 기본 line-height
  relaxed: '1.5',
  loose: '2',
} as const;

export const letterSpacing = {
  tight: '-0.03em',  // Soul: 기본 letter-spacing
  normal: '0',
  wide: '0.025em',
} as const;
