import type { Dispatch, SetStateAction } from 'react';

import StyledPagination from './Pagination.styles';

export type PropsType = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  total: number;
};

const Pagination: React.FC<PropsType> = ({ page, setPage, total }) => {
  const previousPageClickHandler = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const nextPageClickHandler = () => {
    if (total / page === 10) {
      return;
    }
    setPage(page + 1);
  };

  return (
    <StyledPagination>
      <button
        onClick={previousPageClickHandler}
        className="pagination-button"
      />
      {page}
      <button
        onClick={nextPageClickHandler}
        className="pagination-button"
/>
    </StyledPagination>
  );
};

export default Pagination;
