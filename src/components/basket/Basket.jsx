import { Button, Card, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import BasketItem from "./BasketItem";
import { Helmet } from "react-helmet-async";

const Basket = ({
  basket,
  totalPrice,
  maxDeliveryPrice,
  onDelete,
  onOrder,
  onEdit,
}) => {
  return (
    <Container maxWidth="lg">
      <Helmet>
        <title>EC Mall | 장바구니</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item container xs={8}>
          <Typography variant="h4" mb={2}>
            장바구니
          </Typography>
          {basket.map((item) => (
            <BasketItem order={item} onDelete={onDelete} onEdit={onEdit} />
          ))}
        </Grid>
        <Grid item container xs={4} justifyContent="center">
          <Grid
            item
            container
            ml={2}
            mt={7}
            p={3}
            sx={{
              height: "fit-content",
              boxShadow: "2px 3px 10px 0px rgba(117,117,117,0.5)",
              fontSize: "1.4rem",
            }}
          >
            <Grid item container xs={12} mb={2}>
              <Grid item xs={5}>
                총 상품가격 :
              </Grid>
              <Grid item xs={7}>
                {totalPrice.toLocaleString("ko") + "원"}
              </Grid>
            </Grid>
            <Grid item container xs={12} mb={2}>
              <Grid item xs={5}>
                배송비 :
              </Grid>
              <Grid item xs={7}>
                {maxDeliveryPrice.toLocaleString("ko") + "원"}
              </Grid>
            </Grid>
            <Grid item container xs={12} mb={2}>
              <Grid item xs={5}>
                총 주문금액 :
              </Grid>
              <Grid item xs={7}>
                {(totalPrice + maxDeliveryPrice).toLocaleString("ko") + "원"}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                sx={{ fontSize: "1.4rem" }}
                onClick={onOrder}
              >
                주문하기
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Basket;
