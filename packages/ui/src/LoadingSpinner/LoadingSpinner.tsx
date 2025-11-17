import React from 'react';
import { colors, fontSize, fontWeight, fontFamily } from '@yeirin/tokens';

export interface LoadingSpinnerProps {
  content?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  content,
  size = 'md',
}) => {
  const sizeMap = {
    sm: { width: 32, height: 24, dotSize: 6 },
    md: { width: 48, height: 34, dotSize: 10 }, // Soul default
    lg: { width: 64, height: 48, dotSize: 14 },
  };

  const { width, height, dotSize } = sizeMap[size];

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4px',
  };

  const loaderStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    background: `
      radial-gradient(circle closest-side, ${colors.secondary[500]} 75%, #fff) 0% 50%,
      radial-gradient(circle closest-side, ${colors.secondary[500]} 75%, #fff) 50% 50%,
      radial-gradient(circle closest-side, ${colors.secondary[500]} 75%, #fff) 100% 50%
    `, // Soul: sub100 color
    backgroundSize: `calc(100% / 3) ${dotSize}px`,
    backgroundRepeat: 'no-repeat',
    animation: 'dotsAnimation 1s infinite linear',
  };

  const textStyle: React.CSSProperties = {
    fontSize: fontSize['2xl'], // Soul: pr(24)
    fontWeight: fontWeight.regular,
    fontFamily: fontFamily.sans,
    color: colors.gray[500], // Soul: gray600
  };

  return (
    <div style={containerStyle}>
      <div style={loaderStyle} />
      {content && <span style={textStyle}>{content}</span>}
      <style>
        {`
          @keyframes dotsAnimation {
            20% {
              background-position: 0% 0%, 50% 50%, 100% 50%;
            }
            40% {
              background-position: 0% 100%, 50% 0%, 100% 50%;
            }
            60% {
              background-position: 0% 50%, 50% 100%, 100% 0%;
            }
            80% {
              background-position: 0% 50%, 50% 50%, 100% 100%;
            }
          }
        `}
      </style>
    </div>
  );
};
