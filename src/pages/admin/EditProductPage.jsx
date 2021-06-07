import React from "react";
import DashboardLayoutContainer from "../../container/admin/dashboard/DashboardLayoutContainer";
import EditProductContainer from "../../container/admin/product/EditProductContainer";

const EditProductPage = () => {
  return (
    <DashboardLayoutContainer>
      <EditProductContainer />
    </DashboardLayoutContainer>
  );
};

export default EditProductPage;
