import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import OrderListTable from "../../../components/admin/order/OrderListTable";
import { getOrderList, manageOrder } from "../../../modules/order";
import qs from "qs";

const OrderListTableContainer = (props) => {
  const { orderList, success } = useSelector((state) => state.order);

  const [loading, setLoading] = useState(false);
  const [selectedProductIds, setSelectedProductIds] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onManage = (id) => {
    setLoading(true);
    dispatch(manageOrder(id));
  };

  useEffect(() => {
    if (loading && success) {
      setLoading(false);
      dispatch(getOrderList(params));
    }
  }, [success]);

  if (!orderList) return null;

  return (
    <OrderListTable
      orderList={orderList.orderList}
      selectedProductIds={selectedProductIds}
      setSelectedProductIds={setSelectedProductIds}
      onManage={onManage}
    />
  );
};

export default OrderListTableContainer;
