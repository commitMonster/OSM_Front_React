import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, withRouter } from "react-router";
import OrderSuccess from "../../components/order/OrderSuccess";
import { addBasket, getBasketList, onceBasket } from "../../modules/basket";
import { createOrder, initialize } from "../../modules/order";
import qs from "qs";

const OrderSuccessContainer = () => {
  const {
    order,
    list,
    destination,
    tid,
    success: orderSuccess,
  } = useSelector((state) => state.order);
  const { currentItem, success: basketSuccess } = useSelector(
    (state) => state.basket
  );
  const [orderLoading, setOrderLoading] = useState(false);
  const [basketLoading, setBasketLoading] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    if (params.once) {
      setBasketLoading(true);
      dispatch(
        onceBasket({
          productId: order.products[0].id,
          count: parseInt(order.totalAmount, 10),
        })
      );
    } else {
      setOrderLoading(true);
      dispatch(
        createOrder({
          id: tid,
          price: order.totalPrice,
          delivery: order.delivery,
          destinationId: destination.id,
          list,
        })
      );
      dispatch(getBasketList());
    }
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);

  useEffect(() => {
    if (basketLoading && basketSuccess) {
      setOrderLoading(true);
      dispatch(
        createOrder({
          id: tid,
          price: order.totalPrice,
          delivery: order.delivery,
          destinationId: destination.id,
          list: [currentItem.id].join(","),
        })
      );
    }
  }, [basketSuccess]);

  useEffect(() => {
    if (orderLoading && orderSuccess) {
      dispatch(getBasketList());
    }
  }, [orderSuccess]);

  return <OrderSuccess order={order} />;
};

export default OrderSuccessContainer;
