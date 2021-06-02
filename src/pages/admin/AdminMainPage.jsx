import React from "react";
import DashboardLayout from "../../components/admin/dashboard/DashboardLayout";
import AdminMainContainer from "../../container/admin/main/AdminMainContainer";

const AdminMainPage = () => {
  return (
    <DashboardLayout>
      <AdminMainContainer />
    </DashboardLayout>
  );
};

export default AdminMainPage;
