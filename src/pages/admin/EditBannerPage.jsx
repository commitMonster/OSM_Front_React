import React from "react";
import EditBannerContainer from "../../container/admin/banner/EditBannerContainer";
import DashboardLayoutContainer from "../../container/admin/dashboard/DashboardLayoutContainer";

function EditBannerPage() {
  return (
    <DashboardLayoutContainer>
      <EditBannerContainer />
    </DashboardLayoutContainer>
  );
}

export default EditBannerPage;
