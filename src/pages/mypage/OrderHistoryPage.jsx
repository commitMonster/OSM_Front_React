import React from "react";
import FooterContainer from "../../container/common/FooterContainer";
import HeaderContainer from "../../container/common/HeaderContainer";
import OrderHistoryContainer from "../../container/mypage/OrderHistoryContainer";

const OrderHistoryPage = (props) => {
  return (
    <>
      <HeaderContainer />
      <OrderHistoryContainer />
      <FooterContainer />
    </>
  );
};

export default OrderHistoryPage;
