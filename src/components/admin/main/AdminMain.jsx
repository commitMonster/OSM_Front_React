import { Helmet } from "react-helmet-async";
import { Box, Container, Grid } from "@material-ui/core";
import Budget from "./Budget";
import Sales from "./Sales";
import TasksProgress from "./TasksProgress";
import TotalCustomers from "./TotalCustomers";
import TotalProfit from "./TotalProfit";
import TrafficByDevice from "./TrafficByDevice";
import LatestProducts from "./LatestProducts";
import LatestOrders from "./LatestOrders";

const AdminMain = () => (
  <>
    <Helmet>
      <title>EC Mall 관리페이지</title>
    </Helmet>
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Budget />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalCustomers />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TasksProgress />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit sx={{ height: "100%" }} />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <Sales />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <TrafficByDevice sx={{ height: "100%" }} />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <LatestProducts sx={{ height: "100%" }} />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
      </Grid>
    </Container>
  </>
);

export default AdminMain;
