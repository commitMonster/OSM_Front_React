import { Container, Grid } from "@material-ui/core";
import React from "react";
import BasketItem from "./BasketItem";
import { Helmet } from "react-helmet-async";

const Basket = ({ basket, onCkeckListChange }) => {
  return (
    <Container maxWidth="lg">
      <Helmet>
        <title>EC몰 | 장바구니</title>
      </Helmet>
      <Grid container>
        <Grid item container xs={8}>
          {basket.map((item) => (
            <Grid item xs={12}>
              <BasketItem
                product={item.product}
                onCkeckListChange={onCkeckListChange}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item container xs={4}></Grid>
      </Grid>
    </Container>
  );
};

export default Basket;
