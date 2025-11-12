import React from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@yeirin/tokens';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'warm' | 'gentle';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

interface VariantStyle {
  backgroundColor: string;
  color: string;
  border: string;
  hover: {
    backgroundColor: string;
    borderColor?: string;
  };
}

interface SizeStyle {
  padding: string;
  fontSize: string;
  fontWeight?: string;
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, VariantStyle> = {
  primary: {
    backgroundColor: colors.primary[500], // 메인 옐로우 - 태양의 빛
    color: colors.gray[900],
    border: 'none',
    hover: {
      backgroundColor: colors.primary[600],
    },
  },
  secondary: {
    backgroundColor: colors.secondary[500], // 오렌지 - 활력과 에너지
    color: colors.white,
    border: 'none',
    hover: {
      backgroundColor: colors.secondary[600],
    },
  },
  warm: {
    backgroundColor: colors.accent[500], // 레드 - 열정과 사랑
    color: colors.white,
    border: 'none',
    hover: {
      backgroundColor: colors.accent[600],
    },
  },
  gentle: {
    backgroundColor: colors.primary[50], // 부드러운 노란빛 배경
    color: colors.gray[800],
    border: `2px solid ${colors.primary[200]}`,
    hover: {
      backgroundColor: colors.primary[100],
      borderColor: colors.primary[300],
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.primary[600],
    border: `2px solid ${colors.primary[500]}`,
    hover: {
      backgroundColor: colors.primary[50],
      borderColor: colors.primary[600],
    },
  },
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, SizeStyle> = {
  sm: {
    padding: `${spacing[2]} ${spacing[4]}`,
    fontSize: fontSize.sm,
  },
  md: {
    padding: `${spacing[3]} ${spacing[6]}`,
    fontSize: fontSize.base,
  },
  lg: {
    padding: `${spacing[4]} ${spacing[8]}`,
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold, // 큰 버튼은 더 강조
  },
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  style,
  ...props
}) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const baseStyle: React.CSSProperties = {
    ...sizeStyle,
    backgroundColor: variantStyle.backgroundColor,
    color: variantStyle.color,
    border: variantStyle.border,
    borderRadius: borderRadius.lg, // 더 부드러운 모서리로 아동 친화적
    fontWeight: sizeStyle.fontWeight || fontWeight.medium,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.3s ease', // 부드러운 전환
    fontFamily: 'inherit',
    boxShadow: disabled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.1)', // 미묘한 그림자
    ...style,
  };

  return (
    <button
      style={baseStyle}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = variantStyle.hover.backgroundColor;
          if (variantStyle.hover.borderColor) {
            e.currentTarget.style.borderColor = variantStyle.hover.borderColor;
          }
          e.currentTarget.style.transform = 'translateY(-1px)'; // 미묘한 들림 효과
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = variantStyle.backgroundColor;
          if (variant === 'outline' || variant === 'gentle') {
            e.currentTarget.style.borderColor = variantStyle.border.split(' ')[2];
          }
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
