import React from "react";
import DashboardLayoutContainer from "../../container/admin/dashboard/DashboardLayoutContainer";
import ProductContainer from "../../container/admin/product/ProductContainer";

const ProductPage = ({ match }) => {
  const { id } = match.params;
  return (
    <DashboardLayoutContainer>
      <ProductContainer productId={parseInt(id, 10)} />
    </DashboardLayoutContainer>
  );
};

export default ProductPage;
