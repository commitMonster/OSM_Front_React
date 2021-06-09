import { Pagination } from "@material-ui/core";
import React from "react";
import { useHistory, useLocation } from "react-router";
import qs from "qs";
import { useSelector } from "react-redux";

const OrderHistoryPaginationContainer = (props) => {
  const { orderList } = useSelector((state) => state.order);
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
    history.push(`/mypage/?${query}`);
    window.scrollTo(0, 0);
  };

  if (!orderList) return null;

  return (
    <Pagination
      sx={{
        display: "flex",
        justifyContent: "center",
        pt: 3,
        pb: 3,
      }}
      count={parseInt(orderList.orderCount / (params.pageSize || 3), 10) + 1}
      page={parseInt(params.page || 1, 10)}
      onChange={onPageChange}
    />
  );
};

export default OrderHistoryPaginationContainer;
