import React from 'react';
import { colors, spacing, fontSize, fontWeight, fontFamily } from '@yeirin/tokens';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean; // Soul: sub prop for "필수" indicator
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  required = false,
  style,
  ...props
}) => {
  const stopPropagation = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing[8], // Soul: 4rem (32px)
    height: '100%',
    flex: '1 1',
    userSelect: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...style,
  };

  const checkboxContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: spacing[8], // Soul: 4rem (32px)
    height: spacing[8], // Soul: 4rem (32px)
    flexShrink: 0,
  };

  const inputStyle: React.CSSProperties = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0,
  };

  const labelStyle: React.CSSProperties = {
    position: 'relative',
    display: 'block',
    width: spacing[8], // Soul: 4rem (32px)
    height: spacing[8], // Soul: 4rem (32px)
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  // Soul: SVG checkmark icon that changes stroke color
  const CheckIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
      }}
    >
      <path
        d="M8 16L14 22L24 10"
        stroke={checked ? colors.primary[300] : colors.gray[300]} // Soul: main100 when checked
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'stroke 0.2s ease',
        }}
      />
    </svg>
  );

  const textLabelStyle: React.CSSProperties = {
    fontSize: fontSize['3xl'], // Soul: pb(28) = 28px
    fontWeight: fontWeight.bold, // Soul: pb (Pretendard Bold)
    fontFamily: fontFamily.sans,
    color: colors.gray[700],
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: checked ? 1 : 0.5, // Soul: opacity changes based on checked state
    transition: 'opacity 0.2s ease',
    lineHeight: 1,
  };

  return (
    <div style={containerStyle}>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        onClick={stopPropagation}
        style={inputStyle}
        {...props}
      />
      <label htmlFor={id} style={labelStyle}>
        <CheckIcon />
      </label>
      {label && (
        <span style={textLabelStyle}>
          {label}
          {required && (
            <span style={{ color: colors.secondary[500], fontSize: fontSize['2xl'] }}>
              {' (필수)'}
            </span>
          )}
        </span>
      )}
    </div>
  );
};
