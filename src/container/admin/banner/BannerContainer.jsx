import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../../components/admin/banner/Banner";
import { getBanner } from "../../../modules/banners";

const BannerContainer = ({ id }) => {
  const { banner } = useSelector((state) => state.banners);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBanner(id));
  }, [dispatch, id]);

  if (!banner) return null;

  return <Banner banner={banner} />;
};

export default BannerContainer;
