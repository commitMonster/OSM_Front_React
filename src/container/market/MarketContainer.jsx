import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import Market from "../../components/market/Market";
import { getProductList } from "../../modules/products";
import qs from "qs";

const MarketContainer = ({ location }) => {
  const { itemCount, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const history = useHistory();
  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onCategoryChange = (categoryId) => {
    const query = qs.stringify({
      ...params,
      categoryId: categoryId,
      page: 1,
    });
    history.push(`/market/?${query}`);
  };

  const onSortChange = (orderBy, sort) => {
    const query = qs.stringify({
      ...params,
      orderBy: orderBy,
      sort: sort,
    });
    history.push(`/market/?${query}`);
  };

  const onPageChange = (event, page) => {
    const query = qs.stringify({
      ...params,
      page: page,
    });
    history.push(`/market/?${query}`);
    window.scrollTo(0, 0);
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
    history.push(`/market/?${query}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getProductList(params));
  }, [dispatch, location.search]);

  if (!products) return null;

  return (
    <Market
      products={products}
      categoryId={params.categoryId || ""}
      orderBy={params.orderBy || ""}
      sort={params.sort || "desc"}
      page={parseInt(params.page || 1, 10)}
      lastPage={parseInt(itemCount / (params.pageSize || 10), 10) + 1}
      onCategoryChange={onCategoryChange}
      onSortChange={onSortChange}
      onPageChange={onPageChange}
      onPriceChange={onPriceChange}
    />
  );
};

export default withRouter(MarketContainer);
