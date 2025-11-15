export const colors = {
  // Soul Main Colors - 따뜻한 오렌지/노랑 계열 (희망과 활력)
  primary: {
    50: '#FFF5D1',   // main400 - lightest
    100: '#FFE49E',  // main300
    200: '#FFD653',  // main200
    300: '#FFA600',  // main100 - 메인 브랜드 컬러
    400: '#E69500',  // main100 darker
    500: '#CC8400',
    600: '#B37300',
    700: '#996200',
    800: '#805200',
    900: '#664100',
  },

  // Soul Orange - 활력과 에너지
  secondary: {
    50: '#FFF7ED',
    100: '#FFEDD5',
    200: '#FFCFA8',
    300: '#FFB17A',
    400: '#FF8F4D',
    500: '#FF6300', // sub100 - 메인 오렌지
    600: '#E65900',
    700: '#CC4F00',
    800: '#B34500',
    900: '#993B00',
  },

  // Soul Accent Colors
  accent: {
    mint: '#5FE39C',   // sub200 - 민트 그린
    purple: '#7F7BFF', // sub300 - 퍼플
    red: '#FF6300',    // sub100과 동일
  },

  // Semantic colors
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    500: '#5FE39C', // Soul mint 활용
    700: '#4BC986',
    900: '#14532D',
  },

  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    500: '#FF6300', // Soul orange 활용
    700: '#CC4F00',
    900: '#7F1D1D',
  },

  warning: {
    50: '#FFF5D1',
    100: '#FFE49E',
    500: '#FFA600', // Soul main100 활용
    700: '#CC8400',
    900: '#664100',
  },

  info: {
    50: '#F5F3FF',
    100: '#EDE9FE',
    500: '#7F7BFF', // Soul purple 활용
    700: '#6563CC',
    900: '#4C1D95',
  },

  // Soul Gray Scale - 세밀한 7단계 그레이
  gray: {
    50: '#FFFFFF',   // gray100
    100: '#F8F8F8',  // gray200
    200: '#EAEAEA',  // gray300
    300: '#CCCCCC',  // gray400
    400: '#999999',  // gray500
    500: '#666666',  // gray600
    600: '#444444',  // gray600 darker
    700: '#222222',  // gray700
    800: '#1A1A1A',
    900: '#111111',
  },

  // Base colors
  white: '#FFFFFF',
  black: '#000000',
} as const;
