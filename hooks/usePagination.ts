import { useState } from 'react';
import { formatPaginationBtnText } from '@/helpers/formatPaginationBtnText';

export const PER_PAGE = 9;

export const usePagination = (totalCount: number) => {
  const [currentPage, setCurrentPage] = useState(2);

  const paginationBtnText = formatPaginationBtnText(PER_PAGE, totalCount, currentPage);

  const isBtnVisible = totalCount - (currentPage - 1) * PER_PAGE > 0;

  return {
    currentPage,
    isBtnVisible,
    setCurrentPage,
    paginationBtnText,
  };
};
