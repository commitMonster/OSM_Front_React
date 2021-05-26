import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Product from "../../components/product/Product";
import { getProduct, unloadproduct } from "../../modules/product";

const ProductContainer = ({ productId }) => {
  const history = useHistory();
  const { product, error, loading, user } = useSelector(
    ({ product, loading, user }) => ({
      product: product.product,
      error: product.error,
      loading: loading["post/READ_POST"],
      user: user.user,
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

  // const handleBuyProduct = () => {
  //   window.confirm("구매가 완료되었습니다");
  //   dispatch(buyProduct(data.id));
  //   history.push("/mypage");
  // };

  if (loading && !product) return <div>로딩중...</div>; // 로딩중이면서, 데이터가 없을 때에만 로딩중... 표시
  if (error) return <div>에러 발생!</div>;
  if (!product) return null;

  return <Product product={product} user={user} />;
};

export default ProductContainer;
