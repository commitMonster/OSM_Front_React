import React from "react";
import UpdateBannerContainer from "../../container/admin/banner/UpdateBannerContainer";
import DashboardLayoutContainer from "../../container/admin/dashboard/DashboardLayoutContainer";

function UpdateBannerPage({ match }) {
  return (
    <DashboardLayoutContainer>
      <UpdateBannerContainer id={match.params.id} />
    </DashboardLayoutContainer>
  );
}

export default UpdateBannerPage;
