import React, { useState, forwardRef } from 'react';
import { colors, spacing, fontSize, fontWeight, fontFamily, borderRadius } from '@yeirin/tokens';

export interface AdminInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  id: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  size?: 'md' | 'lg';
  width?: 'sm' | 'md' | 'full';
  error?: boolean;
  onValidityChange?: (isValid: boolean) => void;
  validationPattern?: RegExp;
  minLength?: number;
  style?: React.CSSProperties;
}

export const AdminInput = forwardRef<HTMLInputElement, AdminInputProps>(
  function AdminInput(
    {
      id,
      type = 'text',
      placeholder,
      value: controlledValue,
      onChange,
      onBlur,
      size = 'md',
      width = 'full',
      error = false,
      readOnly = false,
      disabled = false,
      validationPattern,
      minLength,
      onValidityChange,
      style,
      ...props
    },
    ref
  ) {
    const [internalValue, setInternalValue] = useState(controlledValue || '');
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const inputValue = controlledValue !== undefined ? controlledValue : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (controlledValue === undefined) {
        setInternalValue(newValue);
      }
      if (onChange) {
        onChange(e);
      }
      if (onValidityChange) {
        let isValid = true;
        if (minLength && newValue.length < minLength) {
          isValid = false;
        }
        if (validationPattern && !validationPattern.test(newValue)) {
          isValid = false;
        }
        onValidityChange(isValid);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleFocus = () => {
      if (!readOnly) {
        setIsFocused(true);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (type === 'number' && e.key === '-') {
        e.preventDefault();
      }
      if (props.onKeyDown) {
        props.onKeyDown(e);
      }
    };

    const togglePasswordVisibility = (e: React.MouseEvent) => {
      e.stopPropagation();
      setShowPassword(!showPassword);
    };

    const sizeStyles = {
      md: {
        height: '40px', // Soul: 40px
        padding: `0 12px`, // Soul: 0 12px
        fontSize: fontSize.sm, // Soul: pr(14) = 14px
      },
      lg: {
        height: '48px', // Soul: isBig 48px
        padding: `0 ${spacing[6]}`, // Soul: 0 2rem (16px)
        fontSize: fontSize.base, // Soul: 16px
      },
    };

    const widthStyles = {
      sm: {
        flexGrow: 0,
        inputWidth: '78px', // Soul: sm width
      },
      md: {
        flexGrow: 0,
        inputWidth: '102px', // Soul: md width
      },
      full: {
        flexGrow: 1,
        inputWidth: '100%',
      },
    };

    const containerStyle: React.CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: spacing[4], // Soul: 1rem = 8px
      flex: `${widthStyles[width].flexGrow} 1`,
      width: width === 'full' ? '100%' : 'auto',
      height: sizeStyles[size].height,
      padding: sizeStyles[size].padding,
      borderRadius: borderRadius.lg, // Soul: 1rem = 8px (실제로 16px)
      border: `1px solid ${error ? colors.secondary[500] : (isFocused ? colors.primary[300] : colors.gray[200])}`, // Soul: sub100 (error), main100 (focus), gray300 (default)
      backgroundColor: readOnly ? colors.gray[50] : colors.gray[100], // Soul: gray200 (readonly), gray100 (default)
      transition: 'border-color 0.2s ease, background-color 0.2s ease',
      ...style,
    };

    const inputStyle: React.CSSProperties = {
      flex: widthStyles[width].flexGrow,
      width: widthStyles[width].inputWidth,
      height: '100%',
      border: 'none',
      backgroundColor: 'transparent',
      fontSize: sizeStyles[size].fontSize,
      fontWeight: fontWeight.regular,
      fontFamily: fontFamily.sans,
      color: error ? colors.secondary[500] : colors.gray[700],
      outline: 'none',
      verticalAlign: 'middle',
      transition: 'color 0.2s ease',
    };

    const buttonStyle: React.CSSProperties = {
      flexShrink: 0,
      width: '24px',
      height: '24px',
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    // Eye Icon for password toggle
    const EyeIcon = ({ show }: { show: boolean }) => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {show ? (
          // Eye Off Icon
          <>
            <path
              d="M3 3L21 21M10.5 10.677C10.0357 11.1714 9.75 11.8435 9.75 12.5714C9.75 13.9999 10.9074 15.1429 12.3529 15.1429C13.0906 15.1429 13.7713 14.8571 14.2706 14.3926M17.5765 17.4286C15.9647 18.5714 14.1176 19.1429 12 19.1429C8.47059 19.1429 5.29412 17.0714 2 12.5714C3.41176 10.2857 4.82353 8.71429 6.42353 7.85714M10.5882 6.28571C11.0588 6.14286 11.5294 6 12 6C15.5294 6 18.7059 8.07143 22 12.5714C21.2941 13.7143 20.5882 14.7143 19.8824 15.5714"
              stroke={error ? colors.secondary[500] : colors.gray[400]}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        ) : (
          // Eye On Icon
          <path
            d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke={error ? colors.secondary[500] : colors.gray[400]}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    );

    return (
      <div style={containerStyle}>
        <input
          ref={ref}
          type={type === 'password' && showPassword ? 'text' : type}
          id={id}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          readOnly={readOnly}
          disabled={disabled}
          spellCheck={false}
          autoComplete="off"
          style={inputStyle}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={buttonStyle}
            tabIndex={-1}
            aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
          >
            <EyeIcon show={showPassword} />
          </button>
        )}
        <style>
          {`
            input::placeholder {
              color: ${colors.gray[300]};
              transition: color 0.2s ease;
            }
            input:focus::selection {
              background-color: ${colors.primary[200]};
            }
          `}
        </style>
      </div>
    );
  }
);
