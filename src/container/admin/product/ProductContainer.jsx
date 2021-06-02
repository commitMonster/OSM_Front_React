import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../../components/admin/product/Product";
import { getProduct, unloadproduct } from "../../../modules/products";

const ProductContainer = ({ productId }) => {
  const { product } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(productId));
    return () => {
      dispatch(unloadproduct());
    };
  }, [dispatch, productId]);

  if (!product) return null;
  return <Product product={product} />;
};

export default ProductContainer;
