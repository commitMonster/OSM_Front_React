import React from "react";
import FooterContainer from "../container/common/FooterContainer";
import HeaderContainer from "../container/common/HeaderContainer";
import MarketContainer from "../container/market/MarketContainer";

const MarketPage = (props) => {
  return (
    <>
      <HeaderContainer />
      <MarketContainer />
      <FooterContainer />
    </>
  );
};

export default MarketPage;
