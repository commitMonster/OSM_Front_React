import React from "react";
import DashboardLayoutContainer from "../../container/admin/dashboard/DashboardLayoutContainer";
import OrderListPaginationContainer from "../../container/admin/order/OrderListPaginationContainer";
import OrderListTableContainer from "../../container/admin/order/OrderListTableContainer";
import OrderListToolbarContainer from "../../container/admin/order/OrderListToolbarContainer";

const OrderListPage = (props) => {
  return (
    <DashboardLayoutContainer>
      <OrderListToolbarContainer />
      <OrderListTableContainer />
      <OrderListPaginationContainer />
    </DashboardLayoutContainer>
  );
};

export default OrderListPage;
