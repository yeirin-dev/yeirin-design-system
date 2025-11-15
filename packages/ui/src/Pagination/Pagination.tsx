import React from 'react';
import { colors, spacing, fontSize, fontWeight, borderRadius } from '@yeirin/tokens';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
  style?: React.CSSProperties;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
  style,
}) => {
  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      // Add ellipsis if needed
      if (startPage > 2) {
        pages.push('...');
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: spacing[2],
    ...style,
  };

  const buttonBaseStyle: React.CSSProperties = {
    width: '4rem',
    height: '4rem',
    borderRadius: borderRadius.lg,
    border: 'none',
    fontSize: fontSize.base,
    fontWeight: fontWeight.semibold,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const pageButtonStyle = (isActive: boolean): React.CSSProperties => ({
    ...buttonBaseStyle,
    backgroundColor: isActive ? colors.primary[300] : colors.gray[200],
    color: isActive ? colors.gray[50] : colors.gray[500],
  });

  const navButtonStyle = (disabled: boolean): React.CSSProperties => ({
    ...buttonBaseStyle,
    backgroundColor: disabled ? colors.gray[100] : colors.gray[200],
    color: disabled ? colors.gray[300] : colors.gray[500],
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
  });

  const ellipsisStyle: React.CSSProperties = {
    width: '4rem',
    height: '4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: fontSize.base,
    color: colors.gray[400],
    fontWeight: fontWeight.semibold,
  };

  return (
    <div style={containerStyle}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        style={navButtonStyle(currentPage === 1)}
        aria-label="이전 페이지"
      >
        &lt;
      </button>

      {getPageNumbers().map((page, index) => {
        if (page === '...') {
          return (
            <div key={`ellipsis-${index}`} style={ellipsisStyle}>
              ...
            </div>
          );
        }

        const pageNum = page as number;
        const isActive = pageNum === currentPage;

        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            style={pageButtonStyle(isActive)}
            aria-label={`페이지 ${pageNum}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {pageNum}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        style={navButtonStyle(currentPage === totalPages)}
        aria-label="다음 페이지"
      >
        &gt;
      </button>
    </div>
  );
};
