import React from 'react';
import { colors, spacing, fontSize, borderRadius } from '@yeirin/tokens';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'warm';
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClose?: () => void;
  style?: React.CSSProperties;
}

interface VariantStyle {
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
  titleColor: string;
  textColor: string;
}

const variantStyles: Record<NonNullable<AlertProps['variant']>, VariantStyle> = {
  info: {
    backgroundColor: colors.primary[50],
    borderColor: colors.primary[300],
    iconColor: colors.primary[600],
    titleColor: colors.primary[800],
    textColor: colors.primary[900],
  },
  success: {
    backgroundColor: colors.success[50],
    borderColor: colors.success[500],
    iconColor: colors.success[700],
    titleColor: colors.success[900],
    textColor: colors.success[900],
  },
  warning: {
    backgroundColor: colors.warning[50],
    borderColor: colors.warning[500],
    iconColor: colors.warning[700],
    titleColor: colors.warning[900],
    textColor: colors.warning[900],
  },
  error: {
    backgroundColor: colors.error[50],
    borderColor: colors.error[500],
    iconColor: colors.error[700],
    titleColor: colors.error[900],
    textColor: colors.error[900],
  },
  warm: {
    backgroundColor: colors.secondary[50],
    borderColor: colors.secondary[300],
    iconColor: colors.secondary[600],
    titleColor: colors.secondary[900],
    textColor: colors.secondary[900],
  },
};

const defaultIcons = {
  info: '💡',
  success: '✅',
  warning: '⚠️',
  error: '❌',
  warm: '💛',
};

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  icon,
  onClose,
  style,
}) => {
  const variantStyle = variantStyles[variant];
  const displayIcon = icon !== undefined ? icon : defaultIcons[variant];

  const alertStyle: React.CSSProperties = {
    backgroundColor: variantStyle.backgroundColor,
    border: `2px solid ${variantStyle.borderColor}`,
    borderRadius: borderRadius.lg,
    padding: spacing[4],
    display: 'flex',
    gap: spacing[3],
    alignItems: 'flex-start',
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    ...style,
  };

  const iconStyle: React.CSSProperties = {
    fontSize: fontSize.xl,
    color: variantStyle.iconColor,
    flexShrink: 0,
    lineHeight: 1,
  };

  const contentStyle: React.CSSProperties = {
    flex: 1,
    minWidth: 0,
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    marginBottom: title && children ? spacing[1] : 0,
    fontSize: fontSize.base,
    fontWeight: 600,
    color: variantStyle.titleColor,
    lineHeight: 1.5,
  };

  const textStyle: React.CSSProperties = {
    margin: 0,
    fontSize: fontSize.sm,
    color: variantStyle.textColor,
    lineHeight: 1.6,
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: spacing[3],
    right: spacing[3],
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: spacing[1],
    fontSize: fontSize.lg,
    color: variantStyle.iconColor,
    opacity: 0.7,
    transition: 'opacity 0.2s ease',
    lineHeight: 1,
  };

  return (
    <div style={alertStyle} role="alert">
      {displayIcon && (
        <span style={iconStyle} aria-hidden="true">
          {displayIcon}
        </span>
      )}
      <div style={contentStyle}>
        {title && <h4 style={titleStyle}>{title}</h4>}
        <div style={textStyle}>{children}</div>
      </div>
      {onClose && (
        <button
          style={closeButtonStyle}
          onClick={onClose}
          aria-label="닫기"
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
        >
          ×
        </button>
      )}
    </div>
  );
};
