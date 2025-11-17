import React, { useEffect } from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@yeirin/tokens';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  closeOnOverlayClick?: boolean;
  style?: React.CSSProperties;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
  style,
}) => {
  const [isClosing, setIsClosing] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleTransitionEnd = () => {
    if (isClosing) {
      setIsClosing(false);
      onClose();
    }
  };

  if (!isOpen && !isClosing) return null;

  const sizeStyles = {
    sm: {
      width: '328px', // Soul: admin modal
      padding: spacing[6], // Soul: 3rem = 24px
      borderRadius: borderRadius['4xl'], // Soul: 2rem = 32px
    },
    md: {
      width: '480px', // Soul: default modal
      padding: spacing[8], // Soul: 4rem = 32px
      borderRadius: spacing[16], // Soul: 4rem = 64px
    },
    lg: {
      width: '640px',
      padding: spacing[10],
      borderRadius: spacing[16], // 4rem
    },
  };

  const overlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: isClosing ? 0 : 1,
    transition: 'opacity 0.5s ease',
    animation: isClosing ? 'none' : 'fadeIn 0.5s ease',
  };

  const contentStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing[8], // Soul: 4rem = 32px gap between elements
    width: sizeStyles[size].width,
    padding: sizeStyles[size].padding,
    borderRadius: sizeStyles[size].borderRadius,
    backgroundColor: colors.gray[100],
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    animation: isClosing ? 'shrink 0.3s ease-in-out forwards' : 'expand 0.3s ease-in-out forwards',
    ...style,
  };

  const headerStyle: React.CSSProperties = {
    width: '100%',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.bold,
    color: colors.gray[700],
    textAlign: 'center',
    margin: 0,
  };

  const bodyStyle: React.CSSProperties = {
    width: '100%',
    flex: 1,
  };

  const contentTextStyle: React.CSSProperties = {
    fontSize: '4.5rem', // Soul: pb(36) = 36px (36px / 8px base = 4.5rem)
    fontWeight: fontWeight.bold, // Soul: pb (Pretendard Bold)
    color: colors.gray[700],
    textAlign: 'center',
    lineHeight: 1.6,
  };

  const footerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    gap: spacing[6], // Soul: 2rem = 16px gap between buttons
    justifyContent: 'center',
  };

  return (
    <div
      style={overlayStyle}
      onClick={handleOverlayClick}
      onTransitionEnd={handleTransitionEnd}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div style={contentStyle}>
        {title && (
          <div style={headerStyle}>
            <h2 id="modal-title" style={titleStyle}>
              {title}
            </h2>
          </div>
        )}
        <div style={bodyStyle}>
          {typeof children === 'string' ? (
            <p style={contentTextStyle}>{children}</p>
          ) : (
            children
          )}
        </div>
        {footer && <div style={footerStyle}>{footer}</div>}
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes expand {
            from {
              transform: scale(0.8);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes shrink {
            from {
              transform: scale(1);
              opacity: 1;
            }
            to {
              transform: scale(0.8);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};
