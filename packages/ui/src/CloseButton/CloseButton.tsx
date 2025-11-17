import React from 'react';
import { colors } from '@yeirin/tokens';

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export const CloseButton: React.FC<CloseButtonProps> = ({
  onClose,
  size = 'md',
  disabled = false,
  style,
  ...props
}) => {
  const sizeMap = {
    sm: 24, // Soul: 3rem = 24px
    md: 32,
    lg: 40,
  };

  const iconSize = sizeMap[size];

  const buttonStyle: React.CSSProperties = {
    width: 'fit-content',
    height: 'fit-content',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.5 : 1,
    transition: 'opacity 0.2s ease',
    ...style,
  };

  const iconStyle: React.CSSProperties = {
    width: `${iconSize}px`,
    height: `${iconSize}px`,
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClose) {
      onClose();
    }
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button
      type="button"
      style={buttonStyle}
      aria-label="닫기"
      disabled={disabled}
      {...props}
      onClick={handleClick}
    >
      <svg
        style={iconStyle}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke={colors.gray[400]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
