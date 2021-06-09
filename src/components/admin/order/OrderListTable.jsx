import React from "react";
import { Avatar, Button, Card, Grid } from "@material-ui/core";
import { Helmet } from "react-helmet-async";

const baseURL = "https://shop.dnatuna.fun/api/";

const stateReduce = (state) => {
  switch (state) {
    case "wait":
      return "배송 시작하기";
    case "shipping":
      return "배송 완료하기";
    case "shipped":
      return "사용자의 구매확정 대기중...";
    case "complete":
      return "주문 완료";
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
      <Grid xs={1}>
        <Avatar
          src={baseURL + basket.product.image[0]}
          variant="rounded"
          sx={{ width: "70px", height: "70px" }}
        />
      </Grid>
      <Grid item container xs={8}>
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
      <Grid
        item
        container
        xs={4}
        sx={{ fontSize: "1.3rem", fontWeight: "500" }}
      >
        주문번호 : {order.id}
      </Grid>
      <Grid
        item
        container
        xs={8}
        sx={{ fontSize: "1.3rem", fontWeight: "500" }}
      >
        수령인 : {order.destination.receiver + " / " + order.destination.phone}
      </Grid>
      <Grid
        item
        container
        xs={4}
        sx={{ fontSize: "1.3rem", fontWeight: "500" }}
      >
        주문 날짜 :
        {" " + order.creaetdAt.slice(0, order.creaetdAt.indexOf("T"))}
      </Grid>
      <Grid
        item
        container
        xs={8}
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
            disabled={order.state === "shipped" || order.state === "complete"}
            onClick={() => {
              onManage(order.id);
            }}
          >
            {stateReduce(order.state)}
          </Button>
        </Grid>
        <Grid item xs={2} pl={4}>
          {(order.state === "shipped" || order.state === "complete") && (
            <Button fullWidth variant="contained">
              상품평
            </Button>
          )}
        </Grid>
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

const orderListTable = ({ orderList, onManage }) => {
  return (
    <>
      <Helmet>
        <title>EC Mall 관리페이지 | 주문 내역</title>
      </Helmet>
      <Grid item container xs={12} m={2}>
        {orderList.map((order) => (
          <OrderCard key={order.id} order={order} onManage={onManage} />
        ))}
      </Grid>
    </>
  );
};

export default orderListTable;
