import React from 'react';
import { colors, fontSize, fontWeight, fontFamily } from '@yeirin/tokens';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label?: string;
  variant?: 'default' | 'active';
  size?: 'sm' | 'md' | 'lg';
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  variant = 'default',
  size = 'md',
  disabled = false,
  style,
  ...props
}) => {
  const sizeStyles = {
    sm: {
      width: '80px',
      height: '36px',
      fontSize: fontSize.base,
    },
    md: {
      width: '112px', // Soul: 112px x 48px
      height: '48px',
      fontSize: fontSize.xl, // Soul: tb(20) = 20px
    },
    lg: {
      width: '140px',
      height: '56px',
      fontSize: fontSize['2xl'],
    },
  };

  const sizeStyle = sizeStyles[size];

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: sizeStyle.width,
    height: sizeStyle.height,
    padding: '0 12px',
    backgroundColor: 'transparent',
    border: 'none',
    color: variant === 'active' ? colors.secondary[500] : colors.gray[400], // Soul: sub100 (active), gray500 (default)
    fontSize: sizeStyle.fontSize,
    fontWeight: fontWeight.normal, // Soul: tb (Tmoney)
    fontFamily: fontFamily.tmoney,
    lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'color 0.2s ease',
    ...style,
  };

  const iconStyle: React.CSSProperties = {
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <button style={buttonStyle} disabled={disabled} {...props}>
      {icon && <span style={iconStyle}>{icon}</span>}
      {label}
    </button>
  );
};
