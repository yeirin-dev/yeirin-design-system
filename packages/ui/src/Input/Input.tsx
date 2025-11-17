import React, { useState } from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius, transitions, fontFamily } from '@yeirin/tokens';

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
  fontWeight: string;
}

const sizeStyles: Record<NonNullable<InputProps['inputSize']>, SizeStyle> = {
  sm: {
    height: '64px',
    padding: `0 ${spacing[6]}`, // 0 24px
    fontSize: fontSize['2xl'], // 24px
    fontWeight: fontWeight.bold,
  },
  md: {
    height: '80px', // Soul InputField 기본 높이
    padding: `0 ${spacing[8]}`, // 0 32px (Soul: 4rem)
    fontSize: fontSize['3xl'], // 28px (Soul: pb(28))
    fontWeight: fontWeight.bold,
  },
  lg: {
    height: '96px',
    padding: `0 ${spacing[10]}`, // 0 40px
    fontSize: fontSize['4xl'], // 36px
    fontWeight: fontWeight.bold,
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
    borderRadius: borderRadius['4xl'], // Soul: 2rem (32px)
    border: 'none', // Soul: border 없음
    backgroundColor: readOnly
      ? colors.gray[100]
      : isFocused
      ? colors.primary[50] // Soul: focus시 main400
      : colors.white,
    boxShadow: '0px 0px 8px 0px rgba(0, 0, 0, 0.02)', // Soul: subtle shadow
    transition: `background-color ${transitions.base}, box-shadow ${transitions.base}`, // Soul: 0.2s ease
  };

  const inputStyle: React.CSSProperties = {
    flex: '1 1',
    height: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: sizeStyle.fontSize,
    fontWeight: sizeStyle.fontWeight, // Soul: pb (Pretendard Bold)
    fontFamily: fontFamily.sans, // Pretendard
    color: hasError ? colors.secondary[500] : colors.gray[700],
    verticalAlign: 'middle',
    transition: transitions.colors,
    ...style,
  };

  const labelStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing[4], // Soul: 2rem gap
    fontSize: fontSize.xl, // Soul: pr(20) = 20px
    fontWeight: fontWeight.regular,
    color: colors.gray[500], // Soul: gray600
  };

  const errorStyle: React.CSSProperties = {
    marginTop: 0,
    fontSize: fontSize.xl, // Soul: pr(20) = 20px
    fontWeight: fontWeight.regular,
    color: colors.secondary[500], // Soul: sub100
  };

  const helperStyle: React.CSSProperties = {
    marginTop: spacing[1],
    fontSize: fontSize.base, // 14px
    color: colors.gray[400],
  };

  const placeholderStyle = `
    ::placeholder {
      color: ${colors.gray[300]}; // Soul: gray400
      transition: color ${transitions.base};
    }
    :focus::placeholder {
      color: ${colors.primary[100]}; // Soul: main300 when focused
    }
    ::selection {
      background-color: ${colors.primary[200]}; // Soul: main200
    }
  `;

  return (
    <div style={containerStyle}>
      {(label || error) && (
        <div style={labelStyle}>
          {label && <span>{label}</span>}
          {error && <span style={errorStyle}>{error}</span>}
        </div>
      )}
      <div style={inputContainerStyle}>
        <input
          style={inputStyle}
          disabled={disabled}
          readOnly={readOnly}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          spellCheck={false}
          autoComplete="off"
          {...props}
        />
        {endIcon && <div style={{ flexShrink: 0 }}>{endIcon}</div>}
      </div>
      <style>{placeholderStyle}</style>
      {!error && helperText && <div style={helperStyle}>{helperText}</div>}
    </div>
  );
};
