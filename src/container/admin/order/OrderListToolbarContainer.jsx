import React, { useEffect } from "react";
import OrderListToolbar from "../../../components/admin/order/OrderListToolbar";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import qs from "qs";
import { getOrderList } from "../../../modules/order";

const OrderListToolbarContainer = (props) => {
  const { success } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onDataChange = (date) => {
    console.log(date);
    if (!date[0] || !date[1]) return;
    const start = `${date[0].getFullYear()}-${
      date[0].getMonth() + 1
    }-${date[0].getDate()}`;
    const end = `${date[1].getFullYear()}-${
      date[1].getMonth() + 1
    }-${date[1].getDate()}`;
    const query = qs.stringify({
      ...params,
      start: start,
      end: end,
    });
    history.push(`/admin/orderList/?${query}`);
  };

  useEffect(() => {
    dispatch(getOrderList(params));
  }, [dispatch, location.search, success]);

  return <OrderListToolbar onDataChange={onDataChange} />;
};

export default OrderListToolbarContainer;
