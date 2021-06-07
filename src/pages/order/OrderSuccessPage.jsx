import React from "react";
import FooterContainer from "../../container/common/FooterContainer";
import HeaderContainer from "../../container/common/HeaderContainer";
import OrderSuccessContainer from "../../container/order/OrderSuccessContainer";

const OrderSuccessPage = (props) => {
  return (
    <>
      <HeaderContainer />
      <OrderSuccessContainer />
      <FooterContainer />
    </>
  );
};
export default OrderSuccessPage;
