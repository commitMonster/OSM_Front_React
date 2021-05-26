import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const ProductThumb = ({ product }) => {
  const price = product.price.toLocaleString("ko") + "원";
  return (
    <Link to={`/product/${product.id}`}>
      <Card
        sx={{
          width: "15rem",
          boxShadow: "2px 3px 10px 0px rgba(117,117,117,0.5)",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ height: 250, backgroundSize: "contain" }}
            image={`http://localhost:3000/${product.image[0]}`}
            title={product.name}
          />
          <CardContent>
            <Grid container>
              <Grid container item alignItems="flex-end">
                <Grid item xs={12}>
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
                </Grid>
              </Grid>
              <Grid container item>
                <Grid item xs={6}>
                  <Typography variant="body2" color="text.secondary">
                    가격
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography component="p" align="right">
                    {price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default React.memo(ProductThumb);
