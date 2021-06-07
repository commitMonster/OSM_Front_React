import React from "react";
import DashboardLayoutContainer from "../../container/admin/dashboard/DashboardLayoutContainer";
import ProductListPaginationContainer from "../../container/admin/products/ProductListPaginationContainer";
import ProductListTableContainer from "../../container/admin/products/ProductListTableContainer";
import ProductListToolbarContainer from "../../container/admin/products/ProductListToolbarContainer";

const ProductListPage = (props) => {
  return (
    <DashboardLayoutContainer>
      <ProductListToolbarContainer />
      <ProductListTableContainer />
      <ProductListPaginationContainer />
    </DashboardLayoutContainer>
  );
};

export default ProductListPage;
