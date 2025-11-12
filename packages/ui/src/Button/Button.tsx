import React from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@yeirin/tokens';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const variantStyles = {
  primary: {
    backgroundColor: colors.primary[600],
    color: colors.white,
    border: 'none',
    hover: {
      backgroundColor: colors.primary[700],
    },
  },
  secondary: {
    backgroundColor: colors.secondary[600],
    color: colors.white,
    border: 'none',
    hover: {
      backgroundColor: colors.secondary[700],
    },
  },
  outline: {
    backgroundColor: 'transparent',
    color: colors.primary[600],
    border: `2px solid ${colors.primary[600]}`,
    hover: {
      backgroundColor: colors.primary[50],
    },
  },
};

const sizeStyles = {
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
    borderRadius: borderRadius.md,
    fontWeight: fontWeight.medium,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.2s ease',
    fontFamily: 'inherit',
    ...style,
  };

  return (
    <button
      style={baseStyle}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = variantStyle.hover.backgroundColor;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = variantStyle.backgroundColor;
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
