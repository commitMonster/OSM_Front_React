import React from "react";
import DashboardLayout from "../../components/admin/dashboard/DashboardLayout";
import CreateBannerContainer from "../../container/admin/banner/CreateBannerContainer";

function CreateBannerPage() {
  return (
    <DashboardLayout>
      <CreateBannerContainer />
    </DashboardLayout>
  );
}

export default CreateBannerPage;
