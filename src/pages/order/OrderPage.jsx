import React from "react";
import FooterContainer from "../../container/common/FooterContainer";
import HeaderContainer from "../../container/common/HeaderContainer";
import OrderContainer from "../../container/order/OrderContainer";

const OrderPage = (props) => {
  return (
    <>
      <HeaderContainer />
      <OrderContainer />
      <FooterContainer />
    </>
  );
};
export default OrderPage;
