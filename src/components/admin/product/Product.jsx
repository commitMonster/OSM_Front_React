import {
  Divider,
  Grid,
  Paper,
  Rating,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import HeadingTitle from "../../common/HeadingTitle";

const Product = ({ product }) => {
  const price = product.price.toLocaleString("ko") + "원";
  const baseURL = "https://shop.dnatuna.fun/api/";

  const [showImg, setShowImg] = useState(baseURL + product.image[0]);
  const isMobile = useMediaQuery("(max-width: 568px)");
  const isRow = useMediaQuery("(max-width: 959px)");

  return (
    <>
      <Helmet>
        <title>EC몰 | {product.name}</title>
      </Helmet>
      <HeadingTitle title="상품 상세 페이지" />
      <Paper elevation={3} sx={{ p: 2, mt: 2, mb: 2 }}>
        <Grid container spacing={4}>
          <Grid
            item
            container
            xs={12}
            md={5}
            alignItems="center"
            justifyContent="center"
          >
            <Grid
              container
              item
              spacing={2}
              xs={12}
              md={2}
              flexDirection={isRow ? "row" : "column"}
              justifyContent="center"
            >
              {product.image.map((item, index) => (
                <Grid
                  item
                  key={index}
                  sx={
                    showImg === item && {
                      "& img": { border: "2px solid #3887A6" },
                    }
                  }
                >
                  <img
                    src={`${baseURL}${item}`}
                    alt=""
                    onMouseEnter={() => setShowImg(baseURL + item)}
                    style={{
                      width: "3rem",
                      height: "3rem",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={10}
              justifyContent="center"
              sx={{
                width: "30rem",
                height: "30rem",
                backgroundImage: `url(${showImg})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={6}
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item container pb={1} xs={12}>
              <Grid item container direction="column" xs={10}>
                <Grid item>
                  <Typography variant="h4">{product.name}</Typography>
                </Grid>
                <Grid item>
                  <Rating
                    name="score"
                    value={product.score}
                    readOnly
                    precision={0.5}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                mt={1}
                sx={{ borderBottom: "1px solid gray" }}
              >
                <Divider />
              </Grid>
            </Grid>
            <Grid item xs={9} md={12}>
              <Typography variant="h4">가격 : {price}</Typography>
              <Typography variant="P">남은 수량 : {product.count}</Typography>
            </Grid>
            <Grid item xs={9} md={12}>
              <Typography variant="P">
                배송비 : {product.delivery.toLocaleString("ko") + "원"}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Product;
