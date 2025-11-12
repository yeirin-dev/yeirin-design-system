import React from 'react';
import { colors, spacing, borderRadius } from '@yeirin/tokens';

export interface CardProps {
  variant?: 'default' | 'bordered' | 'elevated';
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

const variantStyles = {
  default: {
    border: 'none',
    boxShadow: 'none',
    backgroundColor: colors.gray[50],
  },
  bordered: {
    border: `1px solid ${colors.gray[200]}`,
    boxShadow: 'none',
    backgroundColor: colors.white,
  },
  elevated: {
    border: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: colors.white,
  },
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  header,
  children,
  footer,
  style,
}) => {
  const variantStyle = variantStyles[variant];

  const cardStyle: React.CSSProperties = {
    ...variantStyle,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...style,
  };

  const headerStyle: React.CSSProperties = {
    padding: `${spacing[4]} ${spacing[6]}`,
    borderBottom: `1px solid ${colors.gray[200]}`,
    backgroundColor: variant === 'default' ? colors.gray[100] : colors.white,
  };

  const bodyStyle: React.CSSProperties = {
    padding: `${spacing[6]}`,
  };

  const footerStyle: React.CSSProperties = {
    padding: `${spacing[4]} ${spacing[6]}`,
    borderTop: `1px solid ${colors.gray[200]}`,
    backgroundColor: variant === 'default' ? colors.gray[100] : colors.gray[50],
  };

  return (
    <div style={cardStyle}>
      {header && <div style={headerStyle}>{header}</div>}
      <div style={bodyStyle}>{children}</div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
};
