import React from 'react';
import { colors, spacing } from '@yeirin/tokens';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  id: string;
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...props
}) => {
  const stopPropagation = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
  };

  const containerStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing[2],
    userSelect: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    ...style,
  };

  const checkboxContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '24px',
    height: '24px',
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
    width: '24px',
    height: '24px',
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  const uncheckedIconStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '24px',
    height: '24px',
    borderRadius: '6px',
    border: `2px solid ${colors.gray[300]}`,
    backgroundColor: colors.white,
    transition: 'all 0.2s ease',
  };

  const checkedIconStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '24px',
    height: '24px',
    borderRadius: '6px',
    backgroundColor: colors.primary[300],
    border: `2px solid ${colors.primary[300]}`,
    opacity: checked ? 1 : 0,
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const checkmarkStyle: React.CSSProperties = {
    width: '12px',
    height: '8px',
    borderLeft: `2px solid ${colors.white}`,
    borderBottom: `2px solid ${colors.white}`,
    transform: 'rotate(-45deg) translateY(-1px)',
  };

  const textLabelStyle: React.CSSProperties = {
    fontSize: '14px',
    color: colors.gray[700],
    cursor: disabled ? 'not-allowed' : 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div style={checkboxContainerStyle}>
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
          <div style={uncheckedIconStyle} />
          <div style={checkedIconStyle}>
            <div style={checkmarkStyle} />
          </div>
        </label>
      </div>
      {label && (
        <label htmlFor={id} style={textLabelStyle}>
          {label}
        </label>
      )}
    </div>
  );
};
