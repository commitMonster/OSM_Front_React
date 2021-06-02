import React, { useEffect } from "react";
import ProductListToolbar from "../../../components/admin/products/ProductListToolbar";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { getProductList } from "../../../modules/products";

const ProductListToolbarContainer = (props) => {
  const { success } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onSortChange = (orderBy, sort) => {
    const query = qs.stringify({
      ...params,
      orderBy: orderBy,
      sort: sort,
    });
    history.push(`/admin/productList/?${query}`);
  };

  const onPriceChange = (minPrice, maxPrice) => {
    let isPriceRange = true;
    if ([minPrice, maxPrice].includes("")) {
      isPriceRange = false;
    }
    const query = qs.stringify({
      ...params,
      isPriceRange: isPriceRange,
      minPrice: minPrice,
      maxPrice: maxPrice,
      page: 1,
    });
    history.push(`/admin/productList/?${query}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getProductList(params));
  }, [dispatch, location.search, success]);

  return (
    <ProductListToolbar
      orderBy={params.orderBy || ""}
      sort={params.sort || "desc"}
      onPriceChange={onPriceChange}
      onSortChange={onSortChange}
    />
  );
};
export default ProductListToolbarContainer;
