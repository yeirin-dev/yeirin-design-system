import React from 'react';
import { colors, spacing, fontSize, fontWeight, fontFamily, borderRadius } from '@yeirin/tokens';

export interface AdminButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'gray' | 'delete';
  size?: 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export const AdminButton: React.FC<AdminButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  icon,
  disabled = false,
  style,
  ...props
}) => {
  const sizeStyles = {
    md: {
      height: '40px', // Soul: 40px
      padding: `0 ${spacing[6]}`, // Soul: 0 2rem (16px)
      fontSize: fontSize.sm, // Soul: ps(14) = 14px
      fontWeight: fontWeight.semibold,
    },
    lg: {
      height: '48px', // Soul: isBig 48px
      padding: `0 ${spacing[6]}`, // Soul: 0 2rem
      fontSize: fontSize.lg, // Soul: pb(18) = 18px
      fontWeight: fontWeight.bold,
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: colors.primary[300], // Soul: main100
      color: colors.gray[100],
      border: 'none',
    },
    secondary: {
      backgroundColor: colors.primary[50], // Soul: main400
      color: colors.primary[300], // Soul: main100
      border: `1px solid ${colors.primary[300]}`, // Soul: border main100
    },
    gray: {
      backgroundColor: colors.gray[300], // Soul: gray400
      color: colors.gray[100],
      border: 'none',
    },
    delete: {
      backgroundColor: colors.gray[100],
      color: colors.secondary[500], // Soul: sub100
      border: `1px solid ${colors.gray[200]}`, // Soul: gray300
      width: '64px', // Soul: fixed width for delete
      padding: 0,
      fontWeight: fontWeight.regular,
    },
  };

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 1,
    width: fullWidth ? '100%' : (variant === 'delete' ? '64px' : 'fit-content'),
    height: sizeStyles[size].height,
    padding: variant === 'delete' ? 0 : sizeStyles[size].padding,
    borderRadius: borderRadius.lg, // Soul: 1rem = 8px (실제로는 16px)
    fontSize: sizeStyles[size].fontSize,
    fontWeight: variant === 'delete' ? fontWeight.regular : sizeStyles[size].fontWeight,
    fontFamily: fontFamily.sans,
    lineHeight: 1,
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'background-color 0.5s', // Soul: 0.5s transition
    border: variantStyles[variant].border,
    backgroundColor: disabled ? colors.gray[300] : variantStyles[variant].backgroundColor,
    color: variantStyles[variant].color,
    zIndex: 1,
    ...style,
  };

  const iconContainerStyle: React.CSSProperties = {
    marginRight: icon && children ? '2px' : 0,
    display: 'flex',
    alignItems: 'center',
  };

  // Soul's loading animation
  const LoadingDots = () => (
    <>
      <div className="admin-button-loader" />
      <style>
        {`
          .admin-button-loader,
          .admin-button-loader:before,
          .admin-button-loader:after {
            border-radius: 50%;
            width: 2em;
            height: 2em;
            animation-fill-mode: both;
            animation: adminButtonFadeInOut 1.8s infinite ease-in-out;
          }
          .admin-button-loader {
            color: #fff;
            font-size: 4px;
            position: relative;
            top: -1rem;
            animation-delay: -0.16s;
          }
          .admin-button-loader:before,
          .admin-button-loader:after {
            content: '';
            position: absolute;
            top: 0;
          }
          .admin-button-loader:before {
            left: -4em;
            animation-delay: -0.32s;
          }
          .admin-button-loader:after {
            left: 4em;
          }

          @keyframes adminButtonFadeInOut {
            0%, 80%, 100% {
              box-shadow: 0 2.5em 0 -1.3em;
            }
            40% {
              box-shadow: 0 2.5em 0 0;
            }
          }
        `}
      </style>
    </>
  );

  return (
    <button
      type={props.type || 'button'}
      style={buttonStyle}
      disabled={disabled || isLoading}
      {...props}
      onClick={(e) => {
        e.stopPropagation();
        if (props.onClick) {
          props.onClick(e);
        }
      }}
    >
      {icon && !isLoading && <span style={iconContainerStyle}>{icon}</span>}
      {isLoading ? <LoadingDots /> : children}
    </button>
  );
};
