import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Checkbox,
  IconButton,
  TextField,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BasketItem = ({ order, onDelete, onEdit }) => {
  const price = order.product.price.toLocaleString("ko") + "원";
  const totalPrice =
    (order.product.price * order.count).toLocaleString("ko") + "원";
  const deliveryPrice = order.product.delivery.toLocaleString("ko") + "원";
  const image = order.product.image[0];
  const baseURL = "https://shop.dnatuna.fun/api/";

  return (
    <Grid
      item
      container
      xs={12}
      component={Card}
      sx={{
        width: "100%",
        boxShadow: "2px 3px 10px 0px rgba(117,117,117,0.5)",
        marginBottom: "1rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <CardMedia
        sx={{ width: 100, height: 100, backgroundSize: "cover" }}
        image={`${baseURL}${image}`}
        title={order.product.name}
      />
      <Grid
        item
        container
        component={CardContent}
        alignItems="center"
        sx={{
          flex: "1",
        }}
      >
        <Grid item xs={5} alignItems="center">
          <Link to={`/product/${order.product.id}`}>
            <Typography
              gutterBottom
              sx={{
                fontSize: "1.1rem",
                margin: "0",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {order.product.name}
            </Typography>
          </Link>
        </Grid>
        <Grid container item xs={2} justifyContent="center">
          <Grid item xs={8} textAlign="center">
            <TextField
              required
              id="count"
              name="count"
              variant="standard"
              label="수량"
              value={order.count}
              InputProps={{ inputProps: { min: 1 } }}
              onChange={(e) =>
                onEdit({
                  id: order.id,
                  productId: order.product.id,
                  count: parseInt(e.target.value, 10),
                })
              }
              size="small"
              type="number"
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography component="p" fontSize="0.8rem" sx={{ color: "gray" }}>
              (재고:{order.product.stock})
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={2} justifyContent="center">
          <Grid item xs={12} textAlign="center">
            <Typography component="p">{totalPrice}</Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography component="p" fontSize="0.8rem" sx={{ color: "gray" }}>
              (개당:{price})
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={2} justifyContent="center">
          <Typography component="p">배송비:{deliveryPrice}</Typography>
        </Grid>
        <Grid container item xs={1} justifyContent="center">
          <IconButton onClick={() => onDelete(order.id)}>
            <ClearIcon sx={{ color: "red" }} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasketItem;
