import { Pagination } from "@material-ui/core";
import React from "react";
import { useHistory, useLocation } from "react-router";
import qs from "qs";
import { useSelector } from "react-redux";

const ProductListPaginationContainer = (props) => {
  const { itemCount } = useSelector((state) => state.products);
  const history = useHistory();
  const location = useLocation();
  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onPageChange = (event, page) => {
    const query = qs.stringify({
      ...params,
      page: page,
    });
    history.push(`/admin/productList/?${query}`);
    window.scrollTo(0, 0);
  };
  return (
    <Pagination
      sx={{
        display: "flex",
        justifyContent: "center",
        pt: 3,
        pb: 3,
      }}
      count={parseInt(itemCount / (params.pageSize || 10), 10) + 1}
      page={parseInt(params.page || 1, 10)}
      onChange={onPageChange}
    />
  );
};

export default ProductListPaginationContainer;
