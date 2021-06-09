import React, { useEffect } from "react";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import BannerListToolbar from "../../../components/admin/banners/BannerListToolbar";
import { getBannerList } from "../../../modules/banners";

const BannerListToolbarContainer = (props) => {
  const { success } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onSortChange = (type, sort) => {
    const query = qs.stringify({
      ...params,
      type: type,
      sort: sort,
    });
    history.push(`/admin/bannerList/?${query}`);
  };

  const onDataChange = (date) => {
    if (!date[0] || !date[1]) return;
    const start = `${date[0].getFullYear()}-${
      date[0].getMonth() + 1
    }-${date[0].getDate()}`;
    const end = `${date[1].getFullYear()}-${
      date[1].getMonth() + 1
    }-${date[1].getDate()}`;
    const query = qs.stringify({
      ...params,
      start: start,
      end: end,
    });
    history.push(`/admin/bannerList/?${query}`);
  };

  useEffect(() => {
    dispatch(getBannerList(params));
  }, [dispatch, location.search, success]);

  return (
    <BannerListToolbar
      type={params.type || ""}
      sort={params.sort || "asc"}
      onDataChange={onDataChange}
      onSortChange={onSortChange}
    />
  );
};
export default BannerListToolbarContainer;
