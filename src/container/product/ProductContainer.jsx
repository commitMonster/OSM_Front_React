import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Product from "../../components/product/Product";
import { addBasket, initialCurrent } from "../../modules/basket";
import { setOrder } from "../../modules/order";
import { getProduct, unloadproduct } from "../../modules/products";
import { check } from "../../modules/user";

const ProductContainer = ({ productId }) => {
  const { product, error } = useSelector((state) => state.products);
  const { currentItem } = useSelector((state) => state.basket);
  const { user } = useSelector((state) => state.user);

  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const history = useHistory();

  const onOrder = () => {
    dispatch(
      setOrder({
        order: {
          item_name: product.name,
          totalAmount: count,
          totalPrice: product.price,
          delivery: product.delivery,
          products: [{ ...product, count: parseInt(count, 10) }],
        },
        list: null,
      })
    );
    history.push("/order?once=true");
  };

  useEffect(() => {
    dispatch(getProduct(productId));
    return () => {
      dispatch(unloadproduct());
      dispatch(initialCurrent());
    };
  }, [dispatch, productId]);

  const onAddBasket = () => {
    if (product.stock < count) {
      window.confirm("재고가 부족합니다");
    } else {
      dispatch(
        addBasket({ productId: product.id, count: parseInt(count, 10) })
      );
    }
  };

  useEffect(() => {
    dispatch(initialCurrent());
  }, [dispatch]);

  useEffect(() => {
    if (currentItem !== null) {
      dispatch(check());
      dispatch(getProduct(productId));
      window.confirm("장바구니에 추가되었습니다");
    }
  }, [dispatch, currentItem, productId]);

  if (error) return <div>에러 발생!</div>;
  if (!product) return null;

  return (
    <Product
      product={product}
      onAddBasket={onAddBasket}
      onOrder={onOrder}
      count={count}
      setCount={setCount}
      user={user}
    />
  );
};

export default ProductContainer;
