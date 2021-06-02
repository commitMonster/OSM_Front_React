import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import ProductListTable from "../../../components/admin/products/ProductListTable";
import { deleteProduct, getProductList } from "../../../modules/products";
import { setOriginalProduct } from "../../../modules/write";

const ProductListTableContainer = () => {
  const { products } = useSelector((state) => state.products);
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const onEdit = (product) => {
    dispatch(setOriginalProduct(product));
    history.push("/admin/editProduct");
  };

  const onDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  if (!products) return null;

  return (
    <ProductListTable
      products={products}
      selectedProductIds={selectedProductIds}
      setSelectedProductIds={setSelectedProductIds}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default ProductListTableContainer;
