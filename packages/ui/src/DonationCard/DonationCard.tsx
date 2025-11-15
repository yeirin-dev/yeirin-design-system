import React from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@yeirin/tokens';

export interface DonationCardProps {
  title: string;
  description: string;
  amount?: number;
  goalAmount?: number;
  progress?: number; // 0-100
  supporters?: number;
  imageUrl?: string;
  urgent?: boolean;
  daysLeft?: number;
  benefits?: string[];
  onDonate?: () => void;
  style?: React.CSSProperties;
}

export const DonationCard: React.FC<DonationCardProps> = ({
  title,
  description,
  amount,
  goalAmount,
  progress,
  supporters,
  imageUrl,
  urgent = false,
  daysLeft,
  benefits,
  onDonate,
  style,
}) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: colors.white,
    border: `2px solid ${urgent ? colors.secondary[300] : colors.primary[200]}`,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    boxShadow: urgent
      ? '0 8px 16px rgba(255, 99, 0, 0.15)'
      : '0 4px 12px rgba(255, 166, 0, 0.15)',
    transition: 'all 0.3s ease',
    ...style,
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    backgroundColor: colors.gray[100],
  };

  const contentStyle: React.CSSProperties = {
    padding: spacing[6],
  };

  const urgentBadgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: spacing[4],
    right: spacing[4],
    backgroundColor: colors.secondary[500],
    color: colors.white,
    padding: `${spacing[2]} ${spacing[3]}`,
    borderRadius: borderRadius.full,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.bold,
    boxShadow: '0 2px 8px rgba(255, 99, 0, 0.3)',
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    marginBottom: spacing[2],
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.gray[900],
    lineHeight: 1.4,
  };

  const descriptionStyle: React.CSSProperties = {
    margin: 0,
    marginBottom: spacing[4],
    fontSize: fontSize.sm,
    color: colors.gray[600],
    lineHeight: 1.6,
  };

  const progressBarContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '12px',
    backgroundColor: colors.gray[100],
    borderRadius: borderRadius.full,
    overflow: 'hidden',
    marginBottom: spacing[3],
  };

  const progressBarFillStyle: React.CSSProperties = {
    height: '100%',
    backgroundColor: urgent ? colors.secondary[500] : colors.primary[300],
    borderRadius: borderRadius.full,
    transition: 'width 0.5s ease',
    width: `${Math.min(progress || 0, 100)}%`,
  };

  const statsRowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: spacing[4],
    gap: spacing[4],
  };

  const statItemStyle: React.CSSProperties = {
    flex: 1,
  };

  const statLabelStyle: React.CSSProperties = {
    fontSize: fontSize.xs,
    color: colors.gray[500],
    marginBottom: spacing[1],
  };

  const statValueStyle: React.CSSProperties = {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: urgent ? colors.secondary[600] : colors.primary[600],
  };

  const benefitsStyle: React.CSSProperties = {
    margin: 0,
    marginBottom: spacing[4],
    paddingLeft: spacing[5],
    fontSize: fontSize.sm,
    color: colors.gray[700],
    lineHeight: 1.8,
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: `${spacing[4]} ${spacing[6]}`,
    backgroundColor: urgent ? colors.secondary[500] : colors.primary[300],
    color: colors.white,
    border: 'none',
    borderRadius: borderRadius.lg,
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const daysLeftStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing[1],
    padding: `${spacing[1]} ${spacing[3]}`,
    backgroundColor: urgent ? colors.secondary[100] : colors.primary[50],
    color: urgent ? colors.secondary[700] : colors.primary[700],
    borderRadius: borderRadius.md,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    marginBottom: spacing[3],
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = urgent
          ? '0 12px 24px rgba(255, 99, 0, 0.2)'
          : '0 8px 20px rgba(255, 166, 0, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = urgent
          ? '0 8px 16px rgba(255, 99, 0, 0.15)'
          : '0 4px 12px rgba(255, 166, 0, 0.15)';
      }}
    >
      {imageUrl && (
        <div style={{ position: 'relative' }}>
          <img src={imageUrl} alt={title} style={imageStyle} />
          {urgent && daysLeft !== undefined && (
            <div style={urgentBadgeStyle}>🚨 {daysLeft}일 남음</div>
          )}
        </div>
      )}
      <div style={contentStyle}>
        {!imageUrl && daysLeft !== undefined && (
          <div style={daysLeftStyle}>
            ⏰ <span>{daysLeft}일 남음</span>
          </div>
        )}
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>

        {progress !== undefined && (
          <>
            <div style={progressBarContainerStyle}>
              <div style={progressBarFillStyle} />
            </div>
            <div style={statsRowStyle}>
              {amount !== undefined && goalAmount !== undefined && (
                <div style={statItemStyle}>
                  <div style={statLabelStyle}>모인 금액</div>
                  <div style={statValueStyle}>
                    {amount.toLocaleString()}원
                    <span style={{ fontSize: fontSize.sm, color: colors.gray[500] }}>
                      {' '}
                      / {goalAmount.toLocaleString()}원
                    </span>
                  </div>
                </div>
              )}
              {supporters !== undefined && (
                <div style={statItemStyle}>
                  <div style={statLabelStyle}>참여자</div>
                  <div style={statValueStyle}>{supporters.toLocaleString()}명</div>
                </div>
              )}
              <div style={statItemStyle}>
                <div style={statLabelStyle}>달성률</div>
                <div style={statValueStyle}>{progress}%</div>
              </div>
            </div>
          </>
        )}

        {benefits && benefits.length > 0 && (
          <ul style={benefitsStyle}>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        )}

        {onDonate && (
          <button
            style={buttonStyle}
            onClick={onDonate}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = urgent
                ? colors.secondary[600]
                : colors.primary[400];
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = urgent
                ? colors.secondary[500]
                : colors.primary[300];
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            💝 지금 후원하기
          </button>
        )}
      </div>
    </div>
  );
};
