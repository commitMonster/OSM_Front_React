import React from "react";
import { Route, Router } from "react-router-dom";
import MainLayout from "./commons/admin/admin-necessary/MainLayout";
import DashboardLayout from "./commons/admin/admin-necessary/DashboardLayout";

import AdminBannerContainer from "./containers/admin/banner/AdminBannerContainer";
import AdminMainContainer from "./containers/admin/main/AdminMainContainer";
import AdminProductContainer from "./containers/admin/product/AdminProductContainer";
import AdminProductModify from "./components/admin/modify/product/AdminProductModify";
import DashboardNavbar from "./commons/admin/admin-necessary/DashboardNavbar";

const AdminRoute = () => {
  return (
    <>
      <DashboardLayout>
        <Route path="/admin" exact component={AdminMainContainer} />
        <Route path="/admin/banner" component={AdminBannerContainer} />
        <Route path="/admin/product" component={AdminProductContainer} />
        <Route path="/admin/comptest" component={AdminProductModifyContainer} />
      </DashboardLayout>
    </>
  );
};

export default AdminRoute;
