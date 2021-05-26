import React from "react";
import styled from "@emotion/styled";
import { Button } from "@material-ui/core";

const PaginationWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
`;
const PageNumber = styled.div``;

const Pagination = ({ page, lastPage, onPageChange }) => {
  return (
    <PaginationWrapper>
      <Button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        이전
      </Button>
      <PageNumber>{page}</PageNumber>
      <Button
        disabled={page === lastPage}
        onClick={() => onPageChange(page + 1)}
      >
        다음
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
