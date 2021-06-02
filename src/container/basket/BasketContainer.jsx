import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Basket from "../../components/basket/Basket";
import { getBasketList, initialBasket } from "../../modules/basket";
import { getProductList } from "../../modules/products";
import qs from "qs";
import { withRouter } from "react-router";

const BasketContainer = ({ location }) => {
  const { basket, loading } = useSelector(({ loading, basket }) => ({
    basket: basket.basket,
    loading: loading["products/GET_BASKET_LIST"],
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBasketList());
  }, [dispatch]);

  if (!basket) return null;

  return <Basket basket={basket} />;
};

export default withRouter(BasketContainer);
