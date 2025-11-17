import React from 'react';
import { colors } from '@yeirin/tokens';

export interface ChevronButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  ariaLabelOpen?: string;
  ariaLabelClose?: string;
  size?: number;
  style?: React.CSSProperties;
}

export const ChevronButton: React.FC<ChevronButtonProps> = ({
  isOpen,
  ariaLabelOpen = '옵션 닫기',
  ariaLabelClose = '옵션 열기',
  size = 16,
  disabled = false,
  style,
  ...props
}) => {
  const buttonStyle: React.CSSProperties = {
    height: `${size}px`,
    width: 'fit-content',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    rotate: isOpen ? '180deg' : '0deg', // Soul: rotate 180deg
    transition: 'rotate 250ms ease-in-out', // Soul: 250ms ease-in-out
    willChange: 'transform, opacity',
    opacity: disabled ? 0.5 : 1,
    ...style,
  };

  const iconStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
  };

  return (
    <button
      type="button"
      style={buttonStyle}
      aria-label={isOpen ? ariaLabelOpen : ariaLabelClose}
      disabled={disabled}
      {...props}
    >
      <svg
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke={colors.gray[400]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
