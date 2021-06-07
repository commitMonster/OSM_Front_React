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
import { setOriginalBanner } from "../../../modules/write";
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
    dispatch(deleteBanner(bannerId));
  };

  const onActivate = (bannerId, activation) => {
    dispatch(activateBanner({ bannerId, activation }));
    setLoading(true);
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
      onActivate={onActivate}
      bannerlist={banners}
    />
  );
};
export default BannerListTableContainer;
