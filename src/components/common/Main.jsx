import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Banner from "./Banner";
import { Box, ImageList, ImageListItem, Typography } from "@material-ui/core";
import ProductThumb from "../product/ProductThumb";

export default function Main({ newProducts, loading, banners }) {
  return (
    <React.Fragment>
      <Banner banners={banners} />

      <Container maxWidth="lg">
        <Box>
          <Grid
            container
            sx={{ borderBottom: "1px solid #E6E6E6", margin: "1.5rem 0" }}
          >
            <Grid item xs={8}>
              <Typography component="h2" sx={{ fontSize: "1.5rem" }}>
                최근 등록된 상품
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={4}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Typography sx={{ fontSize: "1.1rem" }}>모두 보기</Typography>
              <ArrowForwardIosIcon color="primary" fontSize="small" />
            </Grid>
          </Grid>

          <ImageList
            gap={18}
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              overflowX: "auto",
              overflowY: "hidden",
              height: "420px",
              padding: "0.5rem 0 0 0.5rem",
            }}
          >
            {newProducts.map((product) => (
              <ImageListItem
                key={product.id}
                sx={{
                  width: "15rem",
                  flex: "0 0 auto",
                }}
              >
                <ProductThumb product={product} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Container>
    </React.Fragment>
  );
}
