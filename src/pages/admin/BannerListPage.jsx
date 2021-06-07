import React from "react";
import BannerListTableContainer from "../../container/admin/banners/BannerListTableContainer";
import BannerListToolbarContainer from "../../container/admin/banners/BannerListToolbarContainer";
import DashboardLayoutContainer from "../../container/admin/dashboard/DashboardLayoutContainer";

function BannerListPage() {
  return (
    <DashboardLayoutContainer>
      <BannerListToolbarContainer />
      <BannerListTableContainer />
    </DashboardLayoutContainer>
  );
}

export default BannerListPage;
