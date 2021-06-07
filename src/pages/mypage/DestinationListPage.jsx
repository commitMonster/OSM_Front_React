import React from "react";
import FooterContainer from "../../container/common/FooterContainer";
import HeaderContainer from "../../container/common/HeaderContainer";
import DestinationListContainer from "../../container/mypage/DestinationListContainer";

const DestinationListPage = (props) => {
  return (
    <>
      <HeaderContainer />
      <DestinationListContainer />
      <FooterContainer />
    </>
  );
};

export default DestinationListPage;
