import React from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius, transitions, fontFamily } from '@yeirin/tokens';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gray' | 'sub';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
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
  disabled?: {
    backgroundColor: string;
    color?: string;
  };
}

interface SizeStyle {
  height: string;
  padding: string;
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, VariantStyle> = {
  primary: {
    backgroundColor: colors.primary[300], // Soul main100 (#ffa600)
    color: colors.white,
    border: 'none',
    hover: {
      backgroundColor: colors.primary[400],
    },
    disabled: {
      backgroundColor: colors.gray[300], // Soul gray400
    },
  },
  secondary: {
    backgroundColor: colors.primary[50], // Soul main400 - 연한 노랑
    color: colors.primary[300],
    border: `2px solid ${colors.primary[300]}`,
    hover: {
      backgroundColor: colors.primary[100],
      borderColor: colors.primary[400],
    },
    disabled: {
      backgroundColor: colors.gray[100],
      color: colors.gray[400],
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.primary[300],
    border: `2px solid ${colors.primary[300]}`,
    hover: {
      backgroundColor: colors.primary[50],
      borderColor: colors.primary[400],
    },
    disabled: {
      backgroundColor: 'transparent',
      color: colors.gray[400],
    },
  },
  gray: {
    backgroundColor: colors.gray[300], // Soul gray400 (#cccccc)
    color: colors.white,
    border: 'none',
    hover: {
      backgroundColor: colors.gray[400],
    },
  },
  sub: {
    backgroundColor: colors.primary[300], // Soul main100
    color: colors.white,
    border: 'none',
    hover: {
      backgroundColor: colors.primary[400],
    },
    disabled: {
      backgroundColor: colors.gray[300],
    },
  },
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, SizeStyle> = {
  sm: {
    height: '56px',
    padding: `0 ${spacing[8]}`,
    fontSize: fontSize['2xl'], // 24px
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.sans, // Pretendard
  },
  md: {
    height: '80px', // Soul 기본 버튼 높이
    padding: `0 ${spacing[8]}`,
    fontSize: fontSize['3xl'], // 28px
    fontWeight: fontWeight.normal, // Tmoney는 normal weight 사용
    fontFamily: fontFamily.tmoney, // Tmoney 폰트
  },
  lg: {
    height: '72px', // Soul 서브 버튼 높이
    padding: `0 ${spacing[8]}`,
    fontSize: fontSize['2xl'], // 24px
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.sans, // Pretendard Bold
  },
};

// Loading spinner component
const LoadingSpinner: React.FC = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      position: 'relative',
      height: '2em',
    }}
  >
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        style={{
          width: '0.5em',
          height: '0.5em',
          borderRadius: '50%',
          backgroundColor: 'currentColor',
          animation: `bblFadInOut 1.8s infinite ease-in-out`,
          animationDelay: `${-0.32 + i * 0.16}s`,
        }}
      />
    ))}
    <style>
      {`
        @keyframes bblFadInOut {
          0%, 80%, 100% {
            box-shadow: 0 2.5em 0 -1.3em;
          }
          40% {
            box-shadow: 0 2.5em 0 0;
          }
        }
      `}
    </style>
  </div>
);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  children,
  disabled = false,
  style,
  ...props
}) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];
  const isDisabled = disabled || loading;

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1,
    width: fullWidth ? '100%' : 'fit-content',
    height: sizeStyle.height,
    padding: sizeStyle.padding,
    fontSize: sizeStyle.fontSize,
    fontWeight: sizeStyle.fontWeight,
    fontFamily: sizeStyle.fontFamily, // Soul: Tmoney for md, Pretendard for others
    backgroundColor: isDisabled && variantStyle.disabled
      ? variantStyle.disabled.backgroundColor
      : variantStyle.backgroundColor,
    color: isDisabled && variantStyle.disabled?.color
      ? variantStyle.disabled.color
      : variantStyle.color,
    border: variantStyle.border,
    borderRadius: borderRadius['4xl'], // Soul: 2rem (32px) - 큰 곡선
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: `background-color ${transitions.slow}, border-color ${transitions.slow}`, // Soul: 0.5s transition
    userSelect: 'none',
    WebkitUserSelect: 'none',
    lineHeight: 1, // Soul: line-height 1 for buttons
    ...style,
  };

  return (
    <button
      style={baseStyle}
      disabled={isDisabled}
      onMouseEnter={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.backgroundColor = variantStyle.hover.backgroundColor;
          if (variantStyle.hover.borderColor) {
            e.currentTarget.style.borderColor = variantStyle.hover.borderColor;
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!isDisabled) {
          e.currentTarget.style.backgroundColor = variantStyle.backgroundColor;
          if (variant !== 'primary' && variant !== 'gray') {
            e.currentTarget.style.borderColor = variantStyle.border.split(' ')[2] || '';
          }
        }
      }}
      {...props}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};
