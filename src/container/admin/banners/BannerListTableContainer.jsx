import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import BannerListTable from "../../../components/admin/banners/BannerListTable";
import {
  deleteBanner,
  activateBanner,
  getBannerList,
  initialize,
} from "../../../modules/banners";
import {
  setOriginalBanner,
  initialize as writeInitialize,
} from "../../../modules/write";
import { initialize as imageInitialize } from "../../../modules/images";
import qs from "qs";

const BannerListTableContainer = () => {
  const { banners, success } = useSelector((state) => state.banners);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onEdit = (banner) => {
    dispatch(setOriginalBanner(banner));
    history.push("/admin/editBanner");
  };

  const onDelete = (bannerId) => {
    setLoading(true);
    dispatch(deleteBanner(bannerId));
  };

  const onCreate = () => {
    dispatch(writeInitialize({ mode: "banner" }));
    dispatch(imageInitialize());
    history.push("/admin/editBanner");
  };

  const onActivate = (bannerId, activation) => {
    setLoading(true);
    dispatch(activateBanner({ bannerId, activation }));
  };

  useEffect(() => {
    if (loading && success) {
      dispatch(getBannerList(params));
      dispatch(initialize({ key: "success" }));
      setLoading(false);
    }
  }, [success]);

  if (!banners) return null;

  return (
    <BannerListTable
      onEdit={onEdit}
      onDelete={onDelete}
      onCreate={onCreate}
      onActivate={onActivate}
      bannerlist={banners}
    />
  );
};
export default BannerListTableContainer;
