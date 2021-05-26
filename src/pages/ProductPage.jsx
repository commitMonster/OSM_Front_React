import React from "react";
import FooterContainer from "../container/common/FooterContainer";
import HeaderContainer from "../container/common/HeaderContainer";
import ProductContainer from "../container/product/ProductContainer";

const ProductPage = ({ match }) => {
  const { id } = match.params; // URL 파라미터 조회하기

  return (
    <>
      <HeaderContainer />
      <ProductContainer productId={parseInt(id, 10)} />
      <FooterContainer />
    </>
  );
};

export default ProductPage;
