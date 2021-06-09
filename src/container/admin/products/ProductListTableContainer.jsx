import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import ProductListTable from "../../../components/admin/products/ProductListTable";
import { deleteProduct } from "../../../modules/products";
import {
  setOriginalProduct,
  initialize as writeInitialize,
} from "../../../modules/write";
import { initialize as imageInitialize } from "../../../modules/images";

const ProductListTableContainer = () => {
  const { products } = useSelector((state) => state.products);
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const onEdit = (product) => {
    dispatch(setOriginalProduct(product));
    history.push("/admin/editProduct");
  };

  const onDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const onCreate = () => {
    dispatch(writeInitialize({ mode: "product" }));
    dispatch(imageInitialize());
    history.push("/admin/editProduct");
  };

  if (!products) return null;

  return (
    <ProductListTable
      products={products}
      selectedProductIds={selectedProductIds}
      setSelectedProductIds={setSelectedProductIds}
      onEdit={onEdit}
      onDelete={onDelete}
      onCreate={onCreate}
    />
  );
};

export default ProductListTableContainer;
