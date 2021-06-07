import React from "react";
import DashboardLayoutContainer from "../../container/admin/dashboard/DashboardLayoutContainer";
import AdminMainContainer from "../../container/admin/main/AdminMainContainer";

const AdminMainPage = () => {
  return (
    <DashboardLayoutContainer>
      <AdminMainContainer />
    </DashboardLayoutContainer>
  );
};

export default AdminMainPage;
