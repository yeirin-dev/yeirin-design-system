import React from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@yeirin/tokens';

export interface StepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Stepper: React.FC<StepperProps> = ({
  value,
  onChange,
  min = 0,
  max = Infinity,
  step = 1,
  disabled = false,
  style,
}) => {
  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!disabled && value + step <= max) {
      onChange(value + step);
    }
  };

  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!disabled && value - step >= min) {
      onChange(value - step);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const newValue = parseInt(event.target.value, 10);
    if (!Number.isNaN(newValue)) {
      // Clamp value between min and max
      const clampedValue = Math.max(min, Math.min(max, newValue));
      onChange(clampedValue);
    } else {
      onChange(min);
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '88px',
    height: '40px',
    gap: '2px',
    border: `1px solid ${colors.gray[200]}`,
    borderRadius: borderRadius.full,
    overflow: 'hidden',
    backgroundColor: colors.white,
    opacity: disabled ? 0.6 : 1,
    ...style,
  };

  const buttonStyle = (isDisabled: boolean): React.CSSProperties => ({
    width: '24px',
    height: '24px',
    padding: 0,
    border: 'none',
    borderRadius: borderRadius.full,
    backgroundColor: isDisabled ? colors.gray[200] : colors.primary[50],
    color: isDisabled ? colors.gray[400] : colors.primary[300],
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    cursor: isDisabled || disabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.2s ease',
  });

  const inputStyle: React.CSSProperties = {
    width: '32px',
    height: '100%',
    padding: 0,
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: fontSize.base,
    fontWeight: fontWeight.regular,
    color: colors.gray[700],
    textAlign: 'center',
    outline: 'none',
    appearance: 'textfield',
    MozAppearance: 'textfield',
    WebkitAppearance: 'none',
  };

  const isDecrementDisabled = value <= min;
  const isIncrementDisabled = value >= max;

  return (
    <div style={containerStyle}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={disabled || isDecrementDisabled}
        style={buttonStyle(isDecrementDisabled)}
        aria-label="감소"
        onMouseEnter={(e) => {
          if (!disabled && !isDecrementDisabled) {
            e.currentTarget.style.backgroundColor = colors.primary[100];
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !isDecrementDisabled) {
            e.currentTarget.style.backgroundColor = colors.primary[50];
          }
        }}
      >
        −
      </button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        style={inputStyle}
        aria-label="수량"
      />
      <button
        type="button"
        onClick={handleIncrement}
        disabled={disabled || isIncrementDisabled}
        style={buttonStyle(isIncrementDisabled)}
        aria-label="증가"
        onMouseEnter={(e) => {
          if (!disabled && !isIncrementDisabled) {
            e.currentTarget.style.backgroundColor = colors.primary[100];
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled && !isIncrementDisabled) {
            e.currentTarget.style.backgroundColor = colors.primary[50];
          }
        }}
      >
        +
      </button>

      <style>
        {`
          input[type='number']::-webkit-inner-spin-button,
          input[type='number']::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};
