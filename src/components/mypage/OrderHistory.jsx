import React from "react";
import { Avatar, Box, Button, Card, Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const baseURL = "https://shop.dnatuna.fun/api/";

const stateReduce = (state) => {
  switch (state) {
    case "wait":
      return "배송 준비중입니다.";
    case "shipping":
      return "배송 진행중입니다.";
    case "shipped":
      return "배송 완료 & 구매 확정하기";
    case "complete":
      return "구매가 확정되었습니다.";
    default:
      return "";
  }
};

const ProductList = ({ basket }) => {
  return (
    <Grid
      item
      container
      xs={12}
      component={Card}
      m={2}
      p={2}
      alignItems="center"
    >
      <Grid xs={2}>
        <Avatar
          src={baseURL + basket.product.image[0]}
          variant="rounded"
          sx={{ width: "70px", height: "70px" }}
        />
      </Grid>
      <Grid item container xs={7}>
        <Grid xs={12}>{basket.product.name}</Grid>
      </Grid>
      <Grid item Container xs={3}>
        <Grid item xs={12}>
          상품 가격 : {basket.product.price}
        </Grid>
        <Grid item xs={12}>
          수량 : {basket.count}
        </Grid>
        <Grid item xs={12}>
          배송비 : {basket.product.delivery}
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Grid>
  );
};

const OrderCard = ({ order, onManage }) => {
  if (!order.destination) return null;
  return (
    <Grid item container xs={12} component={Card} mb={2} mr={4} p={2}>
      <Helmet>
        <title>EC Mall | 주문내역</title>
      </Helmet>
      <Grid
        item
        container
        xs={3}
        sx={{ fontSize: "1.3rem", fontWeight: "500" }}
      >
        주문 날짜 :
        {" " + order.creaetdAt.slice(0, order.creaetdAt.indexOf("T"))}
      </Grid>
      <Grid
        item
        container
        xs={9}
        sx={{ fontSize: "1.3rem", fontWeight: "500" }}
      >
        배송지 :{" "}
        {order.destination.mainAddress + order.destination.detailAddress}
      </Grid>
      <Grid item container xs={12}>
        {order.basket.map((basket) => (
          <ProductList basket={basket} />
        ))}
      </Grid>
      <Grid item container xs={12} m={2} alignItems="center">
        <Grid item xs={4}>
          <Button
            fullWidth
            variant="contained"
            disabled={
              order.state === "wait" ||
              order.state === "shipping" ||
              order.state === "complete"
            }
            onClick={() => {
              onManage(order.id);
            }}
          >
            {stateReduce(order.state)}
          </Button>
        </Grid>
        {(order.state === "wait" || order.state === "shipping") && (
          <Grid item xs={2} pl={4}>
            <Button fullWidth variant="contained">
              문의하기
            </Button>
          </Grid>
        )}
        {order.state === "complete" && (
          <Grid item xs={2} pl={4}>
            <Button fullWidth variant="contained">
              상품평
            </Button>
          </Grid>
        )}
        <Grid
          item
          xs={6}
          sx={{ fontSize: "1.5rem", fontweight: "bold", textAlign: "right" }}
        >
          총 가격 : {order.total + order.delivery}
        </Grid>
      </Grid>
    </Grid>
  );
};

const OrderHistory = ({ orderList, onManage }) => {
  return (
    <>
      <Helmet>
        <title>주문내역</title>
      </Helmet>
      <Grid item container xs={12} m={2}>
        {orderList.map((order) => (
          <OrderCard key={order.id} order={order} onManage={onManage} />
        ))}
      </Grid>
    </>
  );
};

export default OrderHistory;
