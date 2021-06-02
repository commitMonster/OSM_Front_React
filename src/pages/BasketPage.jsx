import React from "react";
import BasketContainer from "../container/basket/BasketContainer";
import FooterContainer from "../container/common/FooterContainer";
import HeaderContainer from "../container/common/HeaderContainer";

const BasketPage = (props) => {
  return (
    <>
      <HeaderContainer />
      <BasketContainer />
      <FooterContainer />
    </>
  );
};

export default BasketPage;
