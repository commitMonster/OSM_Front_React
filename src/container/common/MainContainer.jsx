import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../../components/common/Main";
import { getBannerList } from "../../modules/banner";
import { getNewProduct, getProductList } from "../../modules/products";

const MainContainer = (props) => {
  const dispatch = useDispatch();
  const { newProduct, error } = useSelector((state) => state.products);
  const loading = useSelector(
    (state) => state.loading["products/GET_NEW_PRODUCT"]
  );
  const { banners } = useSelector((state) => state.banner);

  useEffect(() => {
    dispatch(getNewProduct());
    dispatch(getBannerList());
  }, [dispatch]);

  if (loading && !newProduct) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!newProduct) return null;
  if (!banners) return null;

  return <Main newProduct={newProduct} loading={loading} banners={banners} />;
};

export default MainContainer;
