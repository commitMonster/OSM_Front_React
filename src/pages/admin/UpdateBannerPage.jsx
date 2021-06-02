import React from "react";
import DashboardLayout from "../../components/admin/dashboard/DashboardLayout";
import UpdateBannerContainer from "../../container/admin/banner/UpdateBannerContainer";

function UpdateBannerPage({ match }) {
  return (
    <DashboardLayout>
      <UpdateBannerContainer id={match.params.id} />
    </DashboardLayout>
  );
}

export default UpdateBannerPage;
