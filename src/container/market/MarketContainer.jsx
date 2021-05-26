import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, withRouter } from "react-router";
import Market from "../../components/market/Market";
import { getProductList } from "../../modules/products";
import qs from "qs";

const MarketContainer = ({ location }) => {
  const { itemCount, products, error, loading, user } = useSelector(
    ({ products, loading, user }) => ({
      itemCount: products.itemCount,
      products: products.products,
      error: products.error,
      loading: loading["products/GET_PRODUCT_LIST"],
      user: user.user,
    })
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    q,
    orderBy = "createdAt",
    sort = "desc",
    isPriceRange,
    minPrice,
    maxPrice,
    categoryId = "",
    isDeleted,
    pageSize = 10,
    page = 1,
  } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onCategoryChange = (categoryId) => {
    const query = qs.stringify({
      q,
      orderBy,
      sort,
      isPriceRange,
      minPrice,
      maxPrice,
      categoryId: categoryId,
      isDeleted,
      pageSize,
      page,
    });
    history.push(`/market/?${query}`);
  };

  const onSortChange = (orderBy, sort) => {
    const query = qs.stringify({
      q,
      orderBy: orderBy,
      sort: sort,
      isPriceRange,
      minPrice,
      maxPrice,
      categoryId,
      isDeleted,
      pageSize,
      page,
    });
    history.push(`/market/?${query}`);
  };

  const onPageChange = (page) => {
    const query = qs.stringify({
      q,
      orderBy,
      sort,
      isPriceRange,
      minPrice,
      maxPrice,
      categoryId,
      isDeleted,
      pageSize,
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
      q,
      orderBy,
      sort,
      isPriceRange: isPriceRange,
      minPrice: minPrice,
      maxPrice: maxPrice,
      categoryId,
      isDeleted,
      pageSize,
      page: page,
    });
    history.push(`/market/?${query}`);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(
      getProductList({
        q,
        orderBy,
        sort,
        isPriceRange,
        minPrice,
        maxPrice,
        categoryId,
        isDeleted,
        pageSize,
        page,
      })
    );
  }, [dispatch, location.search]);

  if (!products) return null;

  return (
    <Market
      products={products}
      categoryId={categoryId}
      orderBy={orderBy}
      sort={sort}
      page={parseInt(page, 10)}
      lastPage={parseInt(itemCount / pageSize, 10) + 1}
      onCategoryChange={onCategoryChange}
      onSortChange={onSortChange}
      onPageChange={onPageChange}
      onPriceChange={onPriceChange}
    />
  );
};

export default withRouter(MarketContainer);
