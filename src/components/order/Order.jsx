import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import AddressContainer from "../../container/common/AddressContainer";
import CustomButton from "../common/CustomButton";
import CustomModal from "../common/CustomModal";

const baseURL = "https://shop.dnatuna.fun/api/";

const ProductList = ({ products }) => (
  <TableContainer component={Paper} sx={{ marginLeft: 2 }}>
    <Table>
      <TableHead>
        <TableRow sx={{ backgroundColor: "#F2F2F2" }}>
          <TableCell align="center">상품정보</TableCell>
          <TableCell align="center">금액</TableCell>
          <TableCell align="center">수량</TableCell>
          <TableCell align="center">총금액</TableCell>
          <TableCell align="center">배송비</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const ProductCard = ({ product }) => (
  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
    <TableCell component="th" scope="row">
      <Grid container alignItems="center">
        <Grid item xs={2}>
          <Avatar src={baseURL + product.image[0]} variant="rounded" sizes="" />
        </Grid>
        <Grid item xs={10}>
          {product.name}
        </Grid>
      </Grid>
    </TableCell>
    <TableCell align="center">{product.price}</TableCell>
    <TableCell align="center">{product.count}</TableCell>
    <TableCell align="center">{product.price * product.count}</TableCell>
    <TableCell align="center">{product.delivery}</TableCell>
  </TableRow>
);

const Order = ({ order, onClickPayment, destination }) => {
  const [open, setOpen] = useState(false);
  const price = (order.totalPrice + order.delivery).toLocaleString("ko") + "원";

  return (
    <Container maxWidth="md">
      <CustomModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <AddressContainer setOpen={setOpen} />
      </CustomModal>
      <Grid container spacing={2}>
        <Grid item container xs={12} mb={2}>
          <Typography variant="h4">주문서</Typography>
          <Grid item xs={12} sx={{ borderBottom: "1px solid #707070" }}></Grid>
        </Grid>

        <Grid item container xs={12} mb={2}>
          <Typography variant="h5">1. 주문상품 확인</Typography>
          <ProductList products={order.products} />
        </Grid>

        <Grid item container xs={12} mb={2}>
          <Grid item xs={10}>
            <Typography variant="h5">2. 배송지 정보 입력</Typography>
          </Grid>
          <Grid item xs={2}>
            <CustomButton
              fullWidth
              onClick={() => {
                setOpen(true);
              }}
            >
              배송지 선택
            </CustomButton>
          </Grid>
          <Grid item container xs={12} component={Paper} ml={2}>
            <Grid
              item
              container
              xs={12}
              sx={{ borderBottom: "1px solid #D9D9D9" }}
            >
              <Grid item xs={2} sx={{ backgroundColor: "#F2F2F2" }} p={3}>
                이름
              </Grid>
              <Grid item xs={10} p={3}>
                {destination && destination.destinationName}
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{ borderBottom: "1px solid #D9D9D9" }}
            >
              <Grid item xs={2} sx={{ backgroundColor: "#F2F2F2" }} p={3}>
                주소
              </Grid>
              <Grid item xs={10} p={3}>
                {destination &&
                  destination.mainAddress + " " + destination.detailAddress}
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{ borderBottom: "1px solid #D9D9D9" }}
            >
              <Grid item xs={2} sx={{ backgroundColor: "#F2F2F2" }} p={3}>
                우편번호
              </Grid>
              <Grid item xs={10} p={3}>
                {destination && destination.zoneNumber}
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sx={{ borderBottom: "1px solid #D9D9D9" }}
            >
              <Grid item xs={2} sx={{ backgroundColor: "#F2F2F2" }} p={3}>
                수령인
              </Grid>
              <Grid item xs={10} p={3}>
                {destination && destination.receiver}
              </Grid>
            </Grid>
            <Grid item container xs={12}>
              <Grid item xs={2} sx={{ backgroundColor: "#F2F2F2" }} p={3}>
                연락처
              </Grid>
              <Grid item xs={10} p={3}>
                {destination && destination.phone}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={12} mb={2}>
          <Typography variant="h5">3. 결제하기</Typography>
          <Grid container component={Paper} ml={2} alignItems="center">
            <Grid item xs={8} p={3} sx={{ fontSize: "1.5rem" }}>
              결제금액 : {price}
            </Grid>
            <Grid
              item
              xs={4}
              p={3}
              sx={{
                textAlign: "center",
                backgroundColor: "#FFE226",
                "&:hover": {
                  backgroundColor: "#F0D524",
                },
                color: "black",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
              onClick={onClickPayment}
              component={Button}
            >
              카카오페이 결제하기
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Order;
