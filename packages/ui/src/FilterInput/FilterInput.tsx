import React, { useState, useRef, useEffect } from 'react';
import { colors, spacing, fontSize, fontWeight, fontFamily, borderRadius } from '@yeirin/tokens';

export interface FilterOption {
  id: string | number;
  name: string;
  value?: any;
}

export interface FilterInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onSelect'> {
  options: FilterOption[];
  selectedId?: string | number;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onSelect?: (option: FilterOption) => void;
  onAddNew?: (name: string) => void;
  error?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const FilterInput: React.FC<FilterInputProps> = ({
  options,
  selectedId,
  value: controlledValue,
  placeholder = '검색어 입력',
  onChange,
  onSelect,
  onAddNew,
  error = false,
  disabled = false,
  style,
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(controlledValue || '');
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<FilterOption[]>(options);
  const containerRef = useRef<HTMLDivElement>(null);

  const inputValue = controlledValue !== undefined ? controlledValue : internalValue;

  // Filter options based on input value
  useEffect(() => {
    if (!inputValue.trim()) {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter((option) =>
        option.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    }
  }, [inputValue, options]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = () => {
    if (!disabled) {
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  const handleBlur = () => {
    // Delay to allow click events on dropdown items
    setTimeout(() => {
      setIsClosing(true);
    }, 150);
  };

  const handleTransitionEnd = () => {
    if (isClosing) {
      setIsOpen(false);
      setIsClosing(false);
    }
  };

  const handleOptionClick = (option: FilterOption) => {
    if (controlledValue === undefined) {
      setInternalValue(option.name);
    }
    if (onChange) {
      onChange(option.name);
    }
    if (onSelect) {
      onSelect(option);
    }
    setIsClosing(true);
  };

  const handleAddNew = () => {
    if (onAddNew && inputValue.trim()) {
      onAddNew(inputValue.trim());
      setIsClosing(true);
    }
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    ...style,
  };

  const inputContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '192px', // Soul: 192px
    height: '40px',
    padding: `${spacing[4]} 12px`, // Soul: 1rem 12px
    borderRadius: borderRadius.lg, // Soul: 1rem = 16px
    backgroundColor: colors.gray[100],
    border: `1px solid ${error ? colors.secondary[500] : colors.gray[200]}`, // Soul: error → sub100
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    width: '100%',
    fontSize: fontSize.sm, // Soul: pr(14) = 14px
    fontWeight: fontWeight.regular,
    fontFamily: fontFamily.sans,
    color: colors.gray[700],
    border: 'none',
    backgroundColor: 'transparent',
    outline: 'none',
  };

  const iconStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    flexShrink: 0,
  };

  const dropdownStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[4], // Soul: 1rem
    position: 'absolute',
    zIndex: 1,
    width: '192px',
    maxHeight: '176px', // Soul: max-height 176px
    padding: spacing[4], // Soul: 1rem
    borderRadius: borderRadius.lg,
    backgroundColor: colors.gray[100],
    border: `1px solid ${colors.gray[200]}`,
    overflowX: 'hidden',
    overflowY: 'auto',
    cursor: 'pointer',
    transform: isClosing ? 'translateY(-4px)' : 'translateY(4px)',
    opacity: isClosing ? 0 : 1,
    transition: isClosing
      ? 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)'
      : 'none',
    animation: isClosing ? 'none' : 'filterExpand 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  const listItemStyle = (isSelected: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    padding: `4px ${spacing[4]}`,
    borderRadius: borderRadius.lg,
    color: isSelected ? colors.primary[300] : colors.gray[500], // Soul: main100 vs gray600
    backgroundColor: isSelected ? colors.primary[50] : 'transparent', // Soul: main400 for selected
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    userSelect: 'none',
    transition: 'all 0.2s ease',
  });

  const noResultStyle: React.CSSProperties = {
    ...listItemStyle(false),
    color: colors.gray[400], // Soul: gray500
    cursor: 'default',
  };

  const addButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    padding: '0 12px',
    borderRadius: borderRadius.lg,
    border: `1px solid ${colors.primary[300]}`, // Soul: main100 border
    backgroundColor: colors.primary[50], // Soul: main400 background
    fontSize: fontSize.sm,
    fontWeight: fontWeight.regular,
    color: colors.gray[700],
    cursor: 'pointer',
    textAlign: 'left',
  };

  const addButtonTextStyle: React.CSSProperties = {
    color: colors.primary[300], // Soul: main100
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

  return (
    <div ref={containerRef} style={containerStyle}>
      <div style={inputContainerStyle}>
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          spellCheck={false}
          autoComplete="off"
          style={inputStyle}
          {...props}
        />
        <SearchIcon />
      </div>

      {isOpen && (
        <ul
          role="listbox"
          style={dropdownStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => {
              const isSelected = selectedId === option.id;
              return (
                <li
                  key={option.id}
                  style={listItemStyle(isSelected)}
                  onClick={() => handleOptionClick(option)}
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
                >
                  {option.name}
                </li>
              );
            })
          ) : (
            <>
              <li style={noResultStyle}>결과가 없습니다.</li>
              {onAddNew && inputValue.trim() && (
                <button
                  type="button"
                  style={addButtonStyle}
                  onClick={handleAddNew}
                  onMouseDown={(e) => e.preventDefault()} // Prevent blur
                >
                  <span style={addButtonTextStyle}>"{inputValue}"</span>&nbsp;로 추가
                </button>
              )}
            </>
          )}
        </ul>
      )}

      <style>
        {`
          input::placeholder {
            color: ${colors.gray[300]};
          }

          @keyframes filterExpand {
            0% {
              transform: translateY(-4px);
              opacity: 0;
            }
            100% {
              transform: translateY(4px);
              opacity: 1;
            }
          }

          /* Hide scrollbar */
          ul[role="listbox"]::-webkit-scrollbar {
            width: 0;
            height: 0;
          }
          ul[role="listbox"] {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}
      </style>
    </div>
  );
};
