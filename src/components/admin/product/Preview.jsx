import { Divider, Grid, Rating, Typography } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const ShowImg = styled.img`
  ${(props) =>
    props.selected &&
    css`
      border: 2px solid rgb(67, 80, 165);
    `}
`;

const categoryReducer = (id) => {
  switch (id) {
    case 1:
      return "티셔츠";
    case 2:
      return "과장";
    case 3:
      return "텀블러";
    case 4:
      return "스티커";
    case 5:
      return "담요";
    default:
      return "";
  }
};

const Preview = ({ product, images }) => {
  const price = product.price.toLocaleString("ko") + "원";
  const baseURL = "https://shop.dnatuna.fun/api/";

  const [showImg, setShowImg] = useState(baseURL + images[0]);

  return (
    <React.Fragment>
      <Grid container spacing={4} pt={2}>
        <Grid
          item
          container
          xs={12}
          alignItems="center"
          justifyContent="center"
        >
          <Grid container item spacing={2} xs={12} justifyContent="center">
            {images.map((item, index) => (
              <Grid item key={index}>
                <ShowImg
                  src={`${baseURL}${item}`}
                  alt=""
                  selected={showImg === `${baseURL}${item}`}
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
            <Grid container item xs={1} alignItems="center">
              <FavoriteBorderIcon
                fontSize="large"
                sx={{
                  cursor: "pointer",
                  "&: hover": {
                    transition: "all 0.1s",
                    color: "#F7209E",
                  },
                }}
              />
            </Grid>
            <Grid container item xs={1} alignItems="center">
              <ShareIcon fontSize="large" />
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
          <Grid item xs={12} md={12}>
            <Typography sx={{ fontSize: "1.2rem" }}>
              상품 설명 : {product.description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography sx={{ fontSize: "1.2rem" }}>
              카테고리 : {categoryReducer(product.categoryId)}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h4">가격 : {price}</Typography>
            <Typography variant="P">남은 수량 : {product.stock}</Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="P">
              배송비 : {product.delivery.toLocaleString("ko") + "원"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default React.memo(Preview);
