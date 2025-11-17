import React, { useState } from 'react';
import { colors, spacing, fontSize, fontWeight, fontFamily, borderRadius } from '@yeirin/tokens';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'> {
  value?: string;
  placeholder?: string;
  onSearch?: (value: string) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
  size?: 'md' | 'lg';
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value: controlledValue,
  placeholder = '검색어 입력',
  onSearch,
  onChange,
  onClear,
  size = 'md',
  disabled = false,
  style,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(controlledValue || '');

  const inputValue = controlledValue !== undefined ? controlledValue : internalValue;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue.trim());
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleClearClick = () => {
    if (controlledValue === undefined) {
      setInternalValue('');
    }
    if (onClear) {
      onClear();
    }
    if (onChange) {
      onChange('');
    }
  };

  const sizeStyles = {
    md: {
      width: '184px',
      height: '40px', // Soul: 40px
      padding: `0 ${spacing[4]}`, // Soul: 1rem = 16px
      fontSize: fontSize.sm, // Soul: pr(14) = 14px
      iconSize: '16px',
    },
    lg: {
      width: '100%',
      height: '48px', // Soul: big_search 48px
      padding: `0 ${spacing[6]}`, // Soul: 2rem = 32px
      fontSize: fontSize.lg, // Soul: 20px
      iconSize: '20px',
    },
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: sizeStyles[size].width,
    height: sizeStyles[size].height,
    padding: sizeStyles[size].padding,
    borderRadius: borderRadius.lg, // Soul: 1rem = 16px
    border: `1px solid ${colors.gray[200]}`, // Soul: gray300
    backgroundColor: colors.gray[100],
    overflow: 'hidden',
    ...style,
  };

  const sectionStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing[4], // Soul: 1rem = 16px
    flex: 1,
  };

  const inputStyle: React.CSSProperties = {
    height: '100%',
    width: size === 'md' ? '112px' : '100%',
    fontSize: sizeStyles[size].fontSize,
    fontWeight: fontWeight.regular,
    fontFamily: fontFamily.sans,
    color: colors.gray[700],
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
  };

  const buttonStyle: React.CSSProperties = {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    padding: 0,
    opacity: disabled ? 0.5 : 1,
  };

  const iconStyle: React.CSSProperties = {
    width: sizeStyles[size].iconSize,
    height: sizeStyles[size].iconSize,
  };

  // Search Icon SVG
  const SearchIcon = () => (
    <svg
      style={iconStyle}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke={colors.gray[400]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // Clear X Icon SVG
  const ClearIcon = () => (
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
  );

  return (
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <button
          type="button"
          onClick={handleSearch}
          aria-label="검색"
          disabled={disabled}
          style={buttonStyle}
        >
          <SearchIcon />
        </button>
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          disabled={disabled}
          spellCheck={false}
          autoComplete="off"
          style={inputStyle}
          {...props}
        />
      </section>
      {inputValue && (
        <button
          type="button"
          onClick={handleClearClick}
          aria-label="검색어 삭제"
          disabled={disabled}
          style={buttonStyle}
        >
          <ClearIcon />
        </button>
      )}
      <style>
        {`
          input::placeholder {
            color: ${colors.gray[300]};
            transition: color 0.2s ease;
          }
        `}
      </style>
    </div>
  );
};
