import React from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius, transitions } from '@yeirin/tokens';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gray' | 'delete';
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
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, VariantStyle> = {
  primary: {
    backgroundColor: colors.primary[300], // Soul main100 - 메인 브랜드 컬러
    color: colors.white,
    border: 'none',
    hover: {
      backgroundColor: colors.primary[400],
    },
    disabled: {
      backgroundColor: colors.gray[300],
    },
  },
  secondary: {
    backgroundColor: colors.primary[50], // Soul main400 - 서브 버튼
    color: colors.primary[300],
    border: `1px solid ${colors.primary[300]}`,
    hover: {
      backgroundColor: colors.primary[100],
      borderColor: colors.primary[400],
    },
    disabled: {
      backgroundColor: colors.gray[200],
      color: colors.gray[400],
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.primary[300],
    border: `1px solid ${colors.primary[300]}`,
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
    backgroundColor: colors.gray[300], // Soul gray400
    color: colors.white,
    border: 'none',
    hover: {
      backgroundColor: colors.gray[400],
    },
  },
  delete: {
    backgroundColor: colors.white,
    color: colors.secondary[500], // Soul sub100
    border: `1px solid ${colors.gray[200]}`,
    hover: {
      backgroundColor: colors.gray[100],
      borderColor: colors.gray[300],
    },
  },
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, SizeStyle> = {
  sm: {
    height: '40px',
    padding: `0 ${spacing[4]}`,
    fontSize: fontSize.base, // 14px (Soul 기준)
    fontWeight: fontWeight.semibold,
  },
  md: {
    height: '48px',
    padding: `0 ${spacing[6]}`,
    fontSize: fontSize.lg, // 18px
    fontWeight: fontWeight.bold,
  },
  lg: {
    height: '56px',
    padding: `0 ${spacing[8]}`,
    fontSize: fontSize.xl, // 20px
    fontWeight: fontWeight.bold,
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
    backgroundColor: isDisabled && variantStyle.disabled
      ? variantStyle.disabled.backgroundColor
      : variantStyle.backgroundColor,
    color: isDisabled && variantStyle.disabled?.color
      ? variantStyle.disabled.color
      : variantStyle.color,
    border: variantStyle.border,
    borderRadius: borderRadius['2xl'], // Soul: 1rem (16px)
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: transitions.base, // 0.2s ease
    fontFamily: 'inherit',
    userSelect: 'none',
    WebkitUserSelect: 'none',
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
