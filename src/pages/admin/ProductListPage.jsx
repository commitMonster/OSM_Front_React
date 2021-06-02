import React from "react";
import DashboardLayout from "../../components/admin/dashboard/DashboardLayout";
import ProductListPaginationContainer from "../../container/admin/products/ProductListPaginationContainer";
import ProductListTableContainer from "../../container/admin/products/ProductListTableContainer";
import ProductListToolbarContainer from "../../container/admin/products/ProductListToolbarContainer";

const ProductListPage = (props) => {
  return (
    <DashboardLayout>
      <ProductListToolbarContainer />
      <ProductListTableContainer />
      <ProductListPaginationContainer />
    </DashboardLayout>
  );
};

export default ProductListPage;
