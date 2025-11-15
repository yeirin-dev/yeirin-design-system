import React from 'react';
import { colors, spacing, borderRadius } from '@yeirin/tokens';

export interface CardProps {
  variant?: 'default' | 'bordered' | 'elevated' | 'warm' | 'gentle';
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

interface VariantStyle {
  border: string;
  boxShadow: string;
  backgroundColor: string;
}

const variantStyles: Record<NonNullable<CardProps['variant']>, VariantStyle> = {
  default: {
    border: 'none',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)', // 미묘한 그림자
    backgroundColor: colors.white,
  },
  bordered: {
    border: `2px solid ${colors.gray[200]}`, // 더 명확한 보더
    boxShadow: 'none',
    backgroundColor: colors.white,
  },
  elevated: {
    border: 'none',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)', // 부드러운 그림자
    backgroundColor: colors.white,
  },
  warm: {
    border: 'none',
    boxShadow: '0 4px 12px rgba(250, 190, 0, 0.15)', // 따뜻한 노란빛 그림자
    backgroundColor: colors.primary[50],
  },
  gentle: {
    border: `2px solid ${colors.primary[200]}`,
    boxShadow: '0 2px 8px rgba(250, 190, 0, 0.1)',
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
    padding: `${spacing[5]} ${spacing[6]}`,
    borderBottom: `1px solid ${variant === 'warm' ? colors.primary[200] : colors.gray[200]}`,
    backgroundColor: variant === 'warm' ? colors.primary[100] : 'transparent',
  };

  const bodyStyle: React.CSSProperties = {
    padding: `${spacing[6]}`,
  };

  const footerStyle: React.CSSProperties = {
    padding: `${spacing[4]} ${spacing[6]}`,
    borderTop: `1px solid ${variant === 'warm' ? colors.primary[200] : colors.gray[200]}`,
    backgroundColor: variant === 'warm' ? colors.primary[100] : colors.gray[50],
  };

  return (
    <div style={cardStyle}>
      {header && <div style={headerStyle}>{header}</div>}
      <div style={bodyStyle}>{children}</div>
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
};
