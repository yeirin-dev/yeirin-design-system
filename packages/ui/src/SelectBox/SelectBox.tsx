import React, { useState, useRef, useEffect } from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@yeirin/tokens';

export interface SelectOption {
  id: string | number;
  name: string;
  value: any;
}

export interface SelectBoxProps {
  options: SelectOption[];
  value?: SelectOption;
  placeholder?: string;
  onChange?: (option: SelectOption | null) => void;
  size?: 'sm' | 'md' | 'lg';
  error?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  value,
  placeholder = '선택하세요',
  onChange,
  size = 'md',
  error = false,
  disabled = false,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (disabled) return;

    if (isOpen) {
      // Start closing animation
      setIsClosing(true);
    } else {
      setIsOpen(true);
    }
  };

  const handleSelect = (option: SelectOption) => {
    if (onChange) {
      onChange(option);
    }
    setIsClosing(true);
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      setIsOpen(false);
      setIsClosing(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsClosing(true);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const sizeStyles = {
    sm: {
      width: '72px',
      height: '32px',
      padding: `${spacing[1]} 10px`,
    },
    md: {
      width: '120px',
      height: '40px',
      padding: `${spacing[2]} 10px`,
    },
    lg: {
      width: '160px',
      height: '48px',
      padding: `${spacing[3]} ${spacing[3]}`,
    },
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: sizeStyles[size].width,
    ...style,
  };

  const selectedOptionStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: sizeStyles[size].height,
    padding: sizeStyles[size].padding,
    borderRadius: borderRadius.lg,
    border: `1px solid ${error ? colors.secondary[500] : colors.gray[200]}`,
    backgroundColor: disabled ? colors.gray[50] : colors.gray[100],
    fontSize: fontSize.base,
    fontWeight: fontWeight.regular,
    color: value ? colors.gray[700] : colors.gray[400],
    cursor: disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.2s ease',
  };

  const chevronStyle: React.CSSProperties = {
    width: 0,
    height: 0,
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    borderTop: `5px solid ${colors.gray[400]}`,
    transform: isOpen && !isClosing ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    zIndex: 10,
    width: sizeStyles[size].width,
    maxHeight: '176px',
    marginTop: spacing[1],
    borderRadius: borderRadius.lg,
    border: `1px solid ${colors.gray[200]}`,
    backgroundColor: colors.gray[100],
    fontSize: fontSize.base,
    overflowX: 'hidden',
    overflowY: 'auto',
    cursor: 'pointer',
    transform: isClosing ? 'translateY(-4px)' : 'translateY(4px)',
    opacity: isClosing ? 0 : 1,
    transition: isClosing
      ? 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)'
      : 'none',
    animation: isClosing ? 'none' : 'expand 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const listStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[2],
    padding: spacing[2],
    margin: 0,
    listStyle: 'none',
  };

  const optionStyle = (isSelected: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    height: '32px',
    padding: `4px ${spacing[2]}`,
    borderRadius: borderRadius.lg,
    color: isSelected ? colors.primary[300] : colors.gray[500],
    backgroundColor: isSelected ? colors.primary[50] : 'transparent',
    fontWeight: isSelected ? fontWeight.semibold : fontWeight.regular,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  });

  return (
    <div ref={containerRef} style={containerStyle}>
      <div
        style={selectedOptionStyle}
        onClick={handleToggle}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={disabled ? -1 : 0}
      >
        <span>{value ? value.name : placeholder}</span>
        <div style={chevronStyle} />
      </div>

      {isOpen && (
        <div
          style={dropdownStyle}
          onTransitionEnd={handleAnimationEnd}
        >
          <ul style={listStyle} role="listbox">
            {options.map((option) => {
              const isSelected = value?.id === option.id;
              return (
                <li
                  key={option.id}
                  style={optionStyle(isSelected)}
                  onClick={() => handleSelect(option)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelect(option);
                    }
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.color = colors.primary[300];
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.color = colors.gray[500];
                    }
                  }}
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={0}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style>
        {`
          @keyframes expand {
            0% {
              transform: translateY(-4px);
              opacity: 0;
            }
            100% {
              transform: translateY(4px);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};
