import React from "react";
import DashboardLayout from "../../components/admin/dashboard/DashboardLayout";
import BannerListContainer from "../../container/admin/banners/BannerListContainer";

function BannerListPage() {
  return (
    <DashboardLayout>
      <BannerListContainer />
    </DashboardLayout>
  );
}

export default BannerListPage;
