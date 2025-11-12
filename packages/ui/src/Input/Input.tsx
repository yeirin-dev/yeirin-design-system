import React from 'react';
import { colors, spacing, fontSize, borderRadius } from '@yeirin/tokens';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  disabled = false,
  style,
  ...props
}) => {
  const hasError = !!error;

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: `${spacing[3]} ${spacing[4]}`,
    fontSize: fontSize.base,
    border: `2px solid ${hasError ? colors.error[500] : colors.gray[200]}`,
    borderRadius: borderRadius.lg, // 부드러운 모서리
    backgroundColor: disabled ? colors.gray[50] : colors.white,
    color: colors.gray[900],
    outline: 'none',
    transition: 'all 0.3s ease', // 부드러운 전환
    cursor: disabled ? 'not-allowed' : 'text',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)', // 미묘한 그림자
    ...style,
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: spacing[2],
    fontSize: fontSize.sm,
    color: colors.gray[700],
    fontWeight: 500,
  };

  const errorStyle: React.CSSProperties = {
    marginTop: spacing[1],
    fontSize: fontSize.sm,
    color: colors.error[500],
  };

  const helperStyle: React.CSSProperties = {
    marginTop: spacing[1],
    fontSize: fontSize.sm,
    color: colors.gray[500],
  };

  return (
    <div style={{ width: '100%' }}>
      {label && <label style={labelStyle}>{label}</label>}
      <input
        style={inputStyle}
        disabled={disabled}
        onFocus={(e) => {
          if (!disabled && !hasError) {
            e.currentTarget.style.borderColor = colors.primary[500];
            e.currentTarget.style.boxShadow = `0 0 0 4px ${colors.primary[100]}`; // 따뜻한 포커스 링
          }
        }}
        onBlur={(e) => {
          if (!disabled) {
            e.currentTarget.style.borderColor = hasError ? colors.error[500] : colors.gray[200];
            e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
          }
        }}
        {...props}
      />
      {error && <div style={errorStyle}>{error}</div>}
      {!error && helperText && <div style={helperStyle}>{helperText}</div>}
    </div>
  );
};
