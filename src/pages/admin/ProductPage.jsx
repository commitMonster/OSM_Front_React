import React from "react";
import DashboardLayout from "../../components/admin/dashboard/DashboardLayout";
import ProductContainer from "../../container/admin/product/ProductContainer";

const ProductPage = ({ match }) => {
  const { id } = match.params;
  return (
    <DashboardLayout>
      <ProductContainer productId={parseInt(id, 10)} />
    </DashboardLayout>
  );
};

export default ProductPage;
