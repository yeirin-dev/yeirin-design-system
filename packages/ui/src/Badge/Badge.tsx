import React from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@yeirin/tokens';

export interface BadgeProps {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral' | 'warm';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  dot?: boolean;
  outline?: boolean;
  style?: React.CSSProperties;
}

interface VariantStyle {
  background: string;
  color: string;
  border: string;
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, VariantStyle> = {
  primary: {
    background: colors.primary[100],
    color: colors.primary[800],
    border: colors.primary[300],
  },
  success: {
    background: colors.success[50],
    color: colors.success[700],
    border: colors.success[500],
  },
  warning: {
    background: colors.warning[50],
    color: colors.warning[700],
    border: colors.warning[500],
  },
  error: {
    background: colors.error[50],
    color: colors.error[700],
    border: colors.error[500],
  },
  neutral: {
    background: colors.gray[100],
    color: colors.gray[700],
    border: colors.gray[300],
  },
  warm: {
    background: colors.secondary[50],
    color: colors.secondary[800],
    border: colors.secondary[300],
  },
};

const sizeStyles = {
  sm: {
    padding: `${spacing[1]} ${spacing[2]}`,
    fontSize: fontSize.xs,
    iconSize: fontSize.xs,
    dotSize: '6px',
  },
  md: {
    padding: `${spacing[1]} ${spacing[3]}`,
    fontSize: fontSize.sm,
    iconSize: fontSize.sm,
    dotSize: '8px',
  },
  lg: {
    padding: `${spacing[2]} ${spacing[4]}`,
    fontSize: fontSize.base,
    iconSize: fontSize.base,
    dotSize: '10px',
  },
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  dot = false,
  outline = false,
  style,
}) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing[1],
    padding: sizeStyle.padding,
    backgroundColor: outline ? 'transparent' : variantStyle.background,
    color: variantStyle.color,
    border: `1px solid ${outline ? variantStyle.border : 'transparent'}`,
    borderRadius: borderRadius.full,
    fontSize: sizeStyle.fontSize,
    fontWeight: fontWeight.medium,
    lineHeight: 1,
    whiteSpace: 'nowrap',
    ...style,
  };

  const iconStyle: React.CSSProperties = {
    fontSize: sizeStyle.iconSize,
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
  };

  const dotStyle: React.CSSProperties = {
    width: sizeStyle.dotSize,
    height: sizeStyle.dotSize,
    backgroundColor: variantStyle.color,
    borderRadius: borderRadius.full,
    flexShrink: 0,
  };

  return (
    <span style={badgeStyle}>
      {dot && <span style={dotStyle} />}
      {icon && <span style={iconStyle}>{icon}</span>}
      {children}
    </span>
  );
};
