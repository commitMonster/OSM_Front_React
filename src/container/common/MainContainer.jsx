import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../../components/common/Main";
import { getBannerList } from "../../modules/banners";
import {
  getNewProductList,
  getPopularProductList,
} from "../../modules/products";

const MainContainer = (props) => {
  const { newProducts, popularProducts, error } = useSelector(
    (state) => state.products
  );
  const { banners } = useSelector((state) => state.banners);
  const loading = useSelector(
    (state) => state.loading["products/GET_NEW_PRODUCT"]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewProductList());
    dispatch(getPopularProductList());
    dispatch(getBannerList({ type: "now" }));
  }, [dispatch]);

  if (loading && !newProducts) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!newProducts) return null;
  if (!popularProducts) return null;
  if (!banners) return null;

  return (
    <Main
      newProducts={newProducts}
      popularProducts={popularProducts}
      loading={loading}
      banners={banners}
    />
  );
};

export default MainContainer;
