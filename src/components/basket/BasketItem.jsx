import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Checkbox,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BasketItem = ({ product, onCkeckListChange }) => {
  const price = product.price.toLocaleString("ko") + "원";
  const image = product.image.slice(0, product.image.indexOf(","));
  const [checked, setChecked] = useState(false);
  const baseURL = "https://shop.dnatuna.fun/api/";

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Card
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
        title={product.name}
      />
      <CardContent
        sx={{
          flex: "1",
        }}
      >
        <Grid container>
          <Grid item xs={9}>
            <Link to={`/product/${product.id}`}>
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
                {product.name}
              </Typography>
            </Link>
          </Grid>
          <Grid container item xs={2}>
            <Typography component="p" align="right">
              {price}
            </Typography>
          </Grid>
          <Grid container item xs={1}>
            <Checkbox checked={checked} onChange={handleChange} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BasketItem;
