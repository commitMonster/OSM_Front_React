import React from "react";
import DashboardLayout from "../../components/admin/dashboard/DashboardLayout";
import BannerContainer from "../../container/admin/banner/BannerContainer";

function BannerPage({ match }) {
  return (
    <DashboardLayout>
      <BannerContainer id={match.params.id} />
    </DashboardLayout>
  );
}

export default BannerPage;
