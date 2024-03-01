export const formatPaginationBtnText = (PER_PAGE: number, total: number, currentPage: number) => {
  if (PER_PAGE < total - (currentPage - 1) * PER_PAGE) {
    return `Показать еще ${PER_PAGE} из ${total - (currentPage - 1) * PER_PAGE}`;
  }
  return `Показать еще ${total - (currentPage - 1) * PER_PAGE}`;
};
