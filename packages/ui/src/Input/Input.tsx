import React, { useState } from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius, transitions } from '@yeirin/tokens';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
  endIcon?: React.ReactNode;
}

interface SizeStyle {
  height: string;
  padding: string;
  fontSize: string;
}

const sizeStyles: Record<NonNullable<InputProps['inputSize']>, SizeStyle> = {
  sm: {
    height: '40px',
    padding: `0 ${spacing[3]}`,
    fontSize: fontSize.base, // 14px
  },
  md: {
    height: '48px',
    padding: `0 ${spacing[4]}`,
    fontSize: fontSize.md, // 16px
  },
  lg: {
    height: '56px',
    padding: `0 ${spacing[5]}`,
    fontSize: fontSize.lg, // 18px
  },
};

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  fullWidth = true,
  inputSize = 'md',
  endIcon,
  disabled = false,
  readOnly = false,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = !!error;
  const sizeStyle = sizeStyles[inputSize];

  const containerStyle: React.CSSProperties = {
    width: fullWidth ? '100%' : 'auto',
  };

  const inputContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing[2],
    flex: '1 1',
    width: '100%',
    height: sizeStyle.height,
    padding: sizeStyle.padding,
    borderRadius: borderRadius['2xl'], // Soul: 1rem
    border: `1px solid ${
      hasError
        ? colors.secondary[500]
        : isFocused
        ? colors.primary[300]
        : colors.gray[200]
    }`,
    backgroundColor: readOnly ? colors.gray[100] : colors.white,
    transition: transitions.colors,
  };

  const inputStyle: React.CSSProperties = {
    flex: '1 1',
    height: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: sizeStyle.fontSize,
    fontWeight: fontWeight.regular,
    color: hasError ? colors.secondary[500] : colors.gray[700],
    verticalAlign: 'middle',
    transition: transitions.colors,
    ...style,
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: spacing[2],
    fontSize: fontSize.sm,
    fontWeight: fontWeight.semibold,
    color: colors.gray[700],
  };

  const errorStyle: React.CSSProperties = {
    marginTop: spacing[1],
    fontSize: fontSize.sm,
    color: colors.secondary[500],
  };

  const helperStyle: React.CSSProperties = {
    marginTop: spacing[1],
    fontSize: fontSize.sm,
    color: colors.gray[400],
  };

  const placeholderStyle = `
    ::placeholder {
      color: ${colors.gray[300]};
      transition: ${transitions.colors};
    }
    :focus::selection {
      background-color: ${colors.primary[100]};
    }
  `;

  return (
    <div style={containerStyle}>
      {label && <label style={labelStyle}>{label}</label>}
      <div style={inputContainerStyle}>
        <input
          style={inputStyle}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {endIcon && <div style={{ flexShrink: 0 }}>{endIcon}</div>}
      </div>
      <style>{placeholderStyle}</style>
      {error && <div style={errorStyle}>{error}</div>}
      {!error && helperText && <div style={helperStyle}>{helperText}</div>}
    </div>
  );
};
