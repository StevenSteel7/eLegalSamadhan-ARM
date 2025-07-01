'use client';

import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

/**
 * Defines the props required by the Pagination component.
 * @param currentPage The currently active page number.
 * @param totalPages The total number of pages available.
 * @param onPageChange A callback function that is called when a page number is clicked.
 */
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * A helper function to generate the list of page numbers and ellipses (...)
 * to be displayed in the pagination control.
 */
const getPaginationItems = (totalPages: number, currentPage: number): (number | '...')[] => {
  // If there are 7 or fewer pages, we show all page numbers without any ellipses.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If there are more than 7 pages, we'll use ellipses to shorten the list.
  // The logic is to show the first page, the last page, the current page,
  // one page on each side of the current page ("siblings"), and ellipses where pages are skipped.
  const siblingCount = 1;
  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPageIndex);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPageIndex);

  const shouldShowLeftEllipsis = leftSiblingIndex > firstPageIndex + 1;
  const shouldShowRightEllipsis = rightSiblingIndex < lastPageIndex - 1;

  // Case 1: No left ellipsis, but a right ellipsis is needed.
  // Example: 1 2 3 4 5 ... 20
  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    let leftItemCount = 3 + 2 * siblingCount;
    let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, '...', lastPageIndex];
  }

  // Case 2: A left ellipsis is needed, but no right ellipsis.
  // Example: 1 ... 16 17 18 19 20
  if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    let rightItemCount = 3 + 2 * siblingCount;
    let rightRange = Array.from({ length: rightItemCount }, (_, i) => lastPageIndex - rightItemCount + 1 + i);
    return [firstPageIndex, '...', ...rightRange];
  }

  // Case 3: Both left and right ellipses are needed.
  // Example: 1 ... 9 10 11 ... 20
  if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    let middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
    return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
  }

  // Fallback case (should not be reached with the logic above)
  return Array.from({ length: totalPages }, (_, i) => i + 1);
};

/**
 * The main Pagination component. It renders a complete pagination control
 * with buttons for first, previous, next, last, and numbered pages.
 */
export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Memoize the calculation of pagination items so it only runs when props change.
  const paginationItems = useMemo(() => getPaginationItems(totalPages, currentPage), [totalPages, currentPage]);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Pagination">
      {/* "Go to First Page" Button */}
      <button
        onClick={() => onPageChange(1)}
        disabled={isFirstPage}
        className="pagination-arrow-btn"
        aria-label="Go to first page"
      >
        <ChevronsLeft className="h-5 w-5" />
      </button>

      {/* "Go to Previous Page" Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
        className="pagination-arrow-btn"
        aria-label="Go to previous page"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Numbered Page Buttons and Ellipses */}
      {paginationItems.map((item, index) => {
        // If the item is an ellipsis, render a non-clickable span.
        if (item === '...') {
          return (
            <span key={`ellipsis-${index}`} className="px-4 py-2 text-slate-500">
              ...
            </span>
          );
        }

        // Otherwise, render a clickable page number button.
        return (
          <button
            key={item}
            onClick={() => onPageChange(item)}
            disabled={currentPage === item}
            className={`pagination-number-btn ${currentPage === item ? 'pagination-active-btn' : ''}`}
            aria-current={currentPage === item ? 'page' : undefined}
          >
            {item}
          </button>
        );
      })}

      {/* "Go to Next Page" Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
        className="pagination-arrow-btn"
        aria-label="Go to next page"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* "Go to Last Page" Button */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={isLastPage}
        className="pagination-arrow-btn"
        aria-label="Go to last page"
      >
        <ChevronsRight className="h-5 w-5" />
      </button>
    </nav>
  );
};