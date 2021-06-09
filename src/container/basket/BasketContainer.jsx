import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Basket from "../../components/basket/Basket";
import { editBasket, getBasketList } from "../../modules/basket";
import { deleteBasket } from "../../modules/basket";
import { useHistory, withRouter } from "react-router";
import { setOrder } from "../../modules/order";

const BasketContainer = () => {
  const { basket, success } = useSelector((state) => state.basket);

  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [productList, setProductList] = useState([]);
  const [maxDeliveryPrice, setMaxDeliveryPrice] = useState(0);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getBasketList());
  }, [dispatch]);

  useEffect(() => {
    if (!basket) return;
    setTotalPrice(0);
    setTotalAmount(0);
    setProductList([]);
    setMaxDeliveryPrice(0);
    let deliveryArray = [];
    basket.map((order) => {
      setTotalPrice(
        (totalPrice) => totalPrice + order.count * order.product.price
      );
      setTotalAmount((totalAmount) => totalAmount + order.count);
      setProductList((productList) =>
        productList.concat({ ...order.product, count: order.count })
      );
      deliveryArray.push(order.product.delivery);
    });
    setMaxDeliveryPrice(Math.max(...deliveryArray));
  }, [dispatch, basket, success]);

  const onDelete = (id) => {
    setLoading(true);
    dispatch(deleteBasket(id));
  };

  const onEdit = ({ id, productId, count }) => {
    setLoading(true);
    dispatch(editBasket({ id, productId, count }));
  };

  useEffect(() => {
    if (loading && success) {
      dispatch(getBasketList());
      setLoading(false);
    }
  }, [success]);

  const onOrder = () => {
    if (basket.length === 0) {
      alert("장바구니가 비었습니다");
      return;
    }
    dispatch(
      setOrder({
        order: {
          item_name: `${basket[0].product.name}외 ${basket.length - 1}건`,
          totalAmount: totalAmount,
          totalPrice: totalPrice,
          delivery: maxDeliveryPrice,
          products: productList,
        },
        list: basket.map((item) => item.id).join(","),
      })
    );
    history.push("/order");
  };

  if (!basket) return null;

  return (
    <Basket
      basket={basket}
      totalPrice={totalPrice}
      maxDeliveryPrice={maxDeliveryPrice}
      onDelete={onDelete}
      onOrder={onOrder}
      onEdit={onEdit}
    />
  );
};

export default withRouter(BasketContainer);
