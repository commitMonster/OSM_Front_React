import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Product from "../../components/product/Product";
import { addBasket, getBasketList, initialCurrent } from "../../modules/basket";
import { getProduct, unloadproduct } from "../../modules/products";
import { check } from "../../modules/user";

const ProductContainer = ({ productId }) => {
  const { product, currentItem, error, loading } = useSelector(
    ({ products, loading, basket }) => ({
      product: products.product,
      currentItem: basket.currentItem,
      error: products.error,
      loading: loading["post/READ_POST"],
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(productId);
    dispatch(getProduct(productId));
    return () => {
      dispatch(unloadproduct());
    };
  }, [dispatch, productId]);

  const onAddBasket = (productId, count) => {
    if (product.count < count) {
      window.confirm("재고가 부족합니다");
    } else {
      dispatch(addBasket({ productId, count }));
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

  if (loading && !product) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!product) return null;

  return <Product product={product} onAddBasket={onAddBasket} />;
};

export default ProductContainer;
