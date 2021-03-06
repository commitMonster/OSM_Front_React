import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import qs from "qs";
import OrderHistory from "../../components/mypage/OrderHistory";
import { getOrderList, manageOrder } from "../../modules/order";

const OrderHistoryContainer = (props) => {
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
    <OrderHistory
      orderList={orderList.orderList}
      selectedProductIds={selectedProductIds}
      setSelectedProductIds={setSelectedProductIds}
      onManage={onManage}
    />
  );
};

export default OrderHistoryContainer;
