import React from "react";
import BannerContainer from "../../container/admin/banner/BannerContainer";
import DashboardLayoutContainer from "../../container/admin/dashboard/DashboardLayoutContainer";

function BannerPage({ match }) {
  return (
    <DashboardLayoutContainer>
      <BannerContainer id={match.params.id} />
    </DashboardLayoutContainer>
  );
}

export default BannerPage;
