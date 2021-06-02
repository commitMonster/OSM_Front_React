import React from "react";
import DashboardLayout from "../../components/admin/dashboard/DashboardLayout";
import EditProductContainer from "../../container/admin/product/EditProductContainer";

const EditProductPage = () => {
  return (
    <DashboardLayout>
      <EditProductContainer />
    </DashboardLayout>
  );
};

export default EditProductPage;
