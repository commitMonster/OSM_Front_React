import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Input,
  Modal,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import React, { useReducer, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import CustomButton from "../common/CustomButton";
import CustomModal from "../common/CustomModal";
import AddressContainer from "../../container/common/AddressContainer";

const ShowImg = styled.img`
  ${(props) =>
    props.selected &&
    css`
      border: 2px solid rgb(67, 80, 165);
    `}
`;

const Product = ({ product, onAddBasket, onOrder, count, setCount }) => {
  const price = product.price.toLocaleString("ko") + "원";
  const baseURL = "https://shop.dnatuna.fun/api/";

  const [showImg, setShowImg] = useState(baseURL + product.image[0]);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 568px)");
  const isRow = useMediaQuery("(max-width: 959px)");

  return (
    <React.Fragment>
      <Helmet>
        <title>EC Mall | {product.name}</title>
      </Helmet>
      <CustomModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <AddressContainer setOpen={setOpen} />
      </CustomModal>
      <Container maxWidth="lg">
        <Grid container spacing={4} pt={2}>
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
            <Grid item xs={9} md={9}>
              <Typography variant="h4">가격 : {price}</Typography>
              <Typography variant="P">남은 수량 : {product.stock}</Typography>
            </Grid>
            <Grid item xs={3} md={3}>
              <CustomButton
                fullWidth
                disableElevation
                variant="contained"
                onClick={() => {
                  setOpen(true);
                }}
              >
                배송지 선택
              </CustomButton>
            </Grid>
            <Grid item xs={9} md={12}>
              <Typography variant="P">
                배송비 : {product.delivery.toLocaleString("ko") + "원"}
              </Typography>
            </Grid>
            <Grid item xs={3} md={2}>
              <TextField
                type="number"
                fullWidth
                label="수량(개)"
                autoFocus
                defaultValue={count}
                onChange={setCount}
                size="small"
                required
                InputProps={{ inputProps: { min: 1 } }}
              />
            </Grid>
            <Grid item xs={6} md={5}>
              <CustomButton
                fullWidth
                variant="outlined"
                disableElevation
                onClick={onAddBasket}
              >
                장바구니에 넣기
              </CustomButton>
            </Grid>
            <Grid item xs={6} md={5}>
              <CustomButton
                fullWidth
                variant="contained"
                disableElevation
                onClick={onOrder}
              >
                구매 하기
              </CustomButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Product;
