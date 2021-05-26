import React from "react";
import FooterContainer from "../container/common/FooterContainer";
import HeaderContainer from "../container/common/HeaderContainer";
import MainContainer from "../container/common/MainContainer";

const MainPage = (props) => {
  return (
    <>
      <HeaderContainer />
      <MainContainer />
      <FooterContainer />
    </>
  );
};

export default MainPage;
