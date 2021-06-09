import { Container, Typography } from "@material-ui/core";
import React from "react";
import FooterContainer from "../../container/common/FooterContainer";
import HeaderContainer from "../../container/common/HeaderContainer";
import OrderHistoryContainer from "../../container/mypage/OrderHistoryContainer";
import OrderHistoryPaginationContainer from "../../container/mypage/OrderHistoryPaginationContainer";
import OrderHistoryToolbarContainer from "../../container/mypage/OrderHistoryToolbarContainer";

const OrderHistoryPage = (props) => {
  return (
    <>
      <HeaderContainer />
      <Container maxWidth="md">
        <Typography
          sx={{ marginTop: "2rem", fontSize: "2rem", fontWeight: "bode" }}
        >
          고객님의 주문 내역입니다.
        </Typography>
        <OrderHistoryToolbarContainer />
        <OrderHistoryContainer />
        <OrderHistoryPaginationContainer />
      </Container>
      <FooterContainer />
    </>
  );
};

export default OrderHistoryPage;
