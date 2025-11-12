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
    border: `1px solid ${hasError ? colors.error[500] : colors.gray[300]}`,
    borderRadius: borderRadius.md,
    backgroundColor: disabled ? colors.gray[50] : colors.white,
    color: colors.gray[900],
    outline: 'none',
    transition: 'all 0.2s ease',
    cursor: disabled ? 'not-allowed' : 'text',
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
            e.currentTarget.style.boxShadow = `0 0 0 3px ${colors.primary[100]}`;
          }
        }}
        onBlur={(e) => {
          if (!disabled) {
            e.currentTarget.style.borderColor = hasError ? colors.error[500] : colors.gray[300];
            e.currentTarget.style.boxShadow = 'none';
          }
        }}
        {...props}
      />
      {error && <div style={errorStyle}>{error}</div>}
      {!error && helperText && <div style={helperStyle}>{helperText}</div>}
    </div>
  );
};
