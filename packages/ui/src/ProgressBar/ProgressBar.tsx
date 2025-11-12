import React from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@yeirin/tokens';

export interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  label?: string;
  showPercentage?: boolean;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warm' | 'gradient';
  animated?: boolean;
  style?: React.CSSProperties;
}

const sizeStyles = {
  sm: {
    height: '8px',
    fontSize: fontSize.xs,
  },
  md: {
    height: '12px',
    fontSize: fontSize.sm,
  },
  lg: {
    height: '16px',
    fontSize: fontSize.base,
  },
};

const variantColors = {
  primary: {
    background: colors.primary[500],
    gradient: `linear-gradient(90deg, ${colors.primary[400]} 0%, ${colors.primary[600]} 100%)`,
  },
  success: {
    background: colors.success[500],
    gradient: `linear-gradient(90deg, ${colors.success[100]} 0%, ${colors.success[700]} 100%)`,
  },
  warm: {
    background: colors.secondary[500],
    gradient: `linear-gradient(90deg, ${colors.secondary[400]} 0%, ${colors.accent[500]} 100%)`,
  },
  gradient: {
    background: colors.primary[500],
    gradient: `linear-gradient(90deg, ${colors.primary[500]} 0%, ${colors.secondary[500]} 50%, ${colors.accent[500]} 100%)`,
  },
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  label,
  showPercentage = false,
  showValue = false,
  size = 'md',
  variant = 'primary',
  animated = false,
  style,
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const sizeStyle = sizeStyles[size];
  const colorStyle = variantColors[variant];

  const containerStyle: React.CSSProperties = {
    width: '100%',
    ...style,
  };

  const labelRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing[2],
  };

  const labelStyle: React.CSSProperties = {
    fontSize: sizeStyle.fontSize,
    fontWeight: fontWeight.medium,
    color: colors.gray[700],
  };

  const valueStyle: React.CSSProperties = {
    fontSize: sizeStyle.fontSize,
    fontWeight: fontWeight.semibold,
    color: colors.gray[900],
  };

  const trackStyle: React.CSSProperties = {
    width: '100%',
    height: sizeStyle.height,
    backgroundColor: colors.gray[100],
    borderRadius: borderRadius.full,
    overflow: 'hidden',
    position: 'relative',
  };

  const fillStyle: React.CSSProperties = {
    height: '100%',
    width: `${percentage}%`,
    background: variant === 'gradient' || variant === 'warm' ? colorStyle.gradient : colorStyle.background,
    borderRadius: borderRadius.full,
    transition: animated ? 'width 0.8s ease-in-out' : 'width 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const animatedShineStyle: React.CSSProperties = animated
    ? {
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
        animation: 'shine 2s infinite',
      }
    : {};

  return (
    <div style={containerStyle}>
      {(label || showPercentage || showValue) && (
        <div style={labelRowStyle}>
          {label && <span style={labelStyle}>{label}</span>}
          {(showPercentage || showValue) && (
            <span style={valueStyle}>
              {showValue && `${value.toLocaleString()}${max !== 100 ? ` / ${max.toLocaleString()}` : ''}`}
              {showValue && showPercentage && ' '}
              {showPercentage && `(${percentage.toFixed(0)}%)`}
            </span>
          )}
        </div>
      )}
      <div style={trackStyle}>
        <div style={fillStyle}>
          {animated && <div style={animatedShineStyle} />}
        </div>
      </div>
      {animated && (
        <style>
          {`
            @keyframes shine {
              0% { left: -100%; }
              100% { left: 100%; }
            }
          `}
        </style>
      )}
    </div>
  );
};
