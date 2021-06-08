import {
  Avatar,
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
import React from "react";
import { Helmet } from "react-helmet-async";
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
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
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

const OrderSuccess = ({ order }) => {
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>EC Mall | 주문완료</title>
      </Helmet>
      <Grid container spacing={2}>
        <Grid item container xs={12} mb={2}>
          <Typography variant="h4">주문이 완료되었습니다!</Typography>
          <Grid item xs={12} sx={{ borderBottom: "1px solid #707070" }}></Grid>
        </Grid>

        <Grid item container xs={12} mb={2}>
          <Typography variant="h5">주문상품 확인</Typography>
          <ProductList products={order.products} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrderSuccess;
