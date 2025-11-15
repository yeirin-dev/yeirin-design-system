import React from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@yeirin/tokens';

export interface StatsCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: number; // percentage change
  changeLabel?: string;
  trend?: 'up' | 'down' | 'neutral';
  variant?: 'primary' | 'success' | 'warm' | 'accent';
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

interface VariantStyle {
  background: string;
  iconColor: string;
  valueColor: string;
  trendUp: string;
  trendDown: string;
}

const variantStyles: Record<NonNullable<StatsCardProps['variant']>, VariantStyle> = {
  primary: {
    background: colors.primary[50],
    iconColor: colors.primary[600],
    valueColor: colors.primary[900],
    trendUp: colors.success[700],
    trendDown: colors.error[700],
  },
  success: {
    background: colors.success[50],
    iconColor: colors.success[700],
    valueColor: colors.success[900],
    trendUp: colors.success[700],
    trendDown: colors.error[700],
  },
  warm: {
    background: colors.secondary[50],
    iconColor: colors.secondary[600],
    valueColor: colors.secondary[900],
    trendUp: colors.success[700],
    trendDown: colors.error[700],
  },
  accent: {
    background: colors.accent[50],
    iconColor: colors.accent[600],
    valueColor: colors.accent[900],
    trendUp: colors.success[700],
    trendDown: colors.error[700],
  },
};

const sizeStyles = {
  sm: {
    padding: spacing[4],
    iconSize: fontSize['2xl'],
    valueSize: fontSize.xl,
    labelSize: fontSize.sm,
  },
  md: {
    padding: spacing[5],
    iconSize: fontSize['3xl'],
    valueSize: fontSize['2xl'],
    labelSize: fontSize.base,
  },
  lg: {
    padding: spacing[6],
    iconSize: fontSize['4xl'],
    valueSize: fontSize['3xl'],
    labelSize: fontSize.lg,
  },
};

export const StatsCard: React.FC<StatsCardProps> = ({
  label,
  value,
  icon,
  change,
  changeLabel,
  trend,
  variant = 'primary',
  description,
  size = 'md',
  style,
}) => {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  // Determine trend automatically if not provided
  const actualTrend = trend || (change && change > 0 ? 'up' : change && change < 0 ? 'down' : 'neutral');

  const cardStyle: React.CSSProperties = {
    backgroundColor: colors.white,
    border: `2px solid ${variantStyle.background}`,
    borderRadius: borderRadius.xl,
    padding: sizeStyle.padding,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s ease',
    ...style,
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing[3],
  };

  const labelStyle: React.CSSProperties = {
    fontSize: sizeStyle.labelSize,
    color: colors.gray[600],
    fontWeight: fontWeight.medium,
    lineHeight: 1.4,
  };

  const iconContainerStyle: React.CSSProperties = {
    width: sizeStyle.iconSize === fontSize['4xl'] ? '56px' : sizeStyle.iconSize === fontSize['3xl'] ? '48px' : '40px',
    height:
      sizeStyle.iconSize === fontSize['4xl'] ? '56px' : sizeStyle.iconSize === fontSize['3xl'] ? '48px' : '40px',
    backgroundColor: variantStyle.background,
    borderRadius: borderRadius.lg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: sizeStyle.iconSize,
    color: variantStyle.iconColor,
    flexShrink: 0,
  };

  const valueStyle: React.CSSProperties = {
    fontSize: sizeStyle.valueSize,
    fontWeight: fontWeight.bold,
    color: variantStyle.valueColor,
    lineHeight: 1.2,
    marginBottom: change !== undefined ? spacing[2] : description ? spacing[2] : 0,
  };

  const changeContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing[1],
    marginBottom: description ? spacing[2] : 0,
  };

  const changeStyle: React.CSSProperties = {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color:
      actualTrend === 'up'
        ? variantStyle.trendUp
        : actualTrend === 'down'
          ? variantStyle.trendDown
          : colors.gray[600],
  };

  const changeLabelStyle: React.CSSProperties = {
    fontSize: fontSize.sm,
    color: colors.gray[500],
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: fontSize.sm,
    color: colors.gray[500],
    lineHeight: 1.5,
  };

  const getTrendIcon = () => {
    if (actualTrend === 'up') return '↗';
    if (actualTrend === 'down') return '↘';
    return '→';
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
      }}
    >
      <div style={headerStyle}>
        <div style={{ flex: 1 }}>
          <div style={labelStyle}>{label}</div>
        </div>
        {icon && <div style={iconContainerStyle}>{icon}</div>}
      </div>
      <div style={valueStyle}>
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      {change !== undefined && (
        <div style={changeContainerStyle}>
          <span style={changeStyle}>
            {getTrendIcon()} {Math.abs(change)}%
          </span>
          {changeLabel && <span style={changeLabelStyle}>{changeLabel}</span>}
        </div>
      )}
      {description && <div style={descriptionStyle}>{description}</div>}
    </div>
  );
};
