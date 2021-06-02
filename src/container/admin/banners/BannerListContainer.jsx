import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import BannerList from "../../../components/admin/banners/BannerList";
import { getBannerList } from "../../../modules/banners";
import qs from "qs";

const BannerListContainer = () => {
  const { banners } = useSelector((state) => state.banners);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onDateChange = (start, end) => {
    const query = qs.stringify({
      ...params,
      start,
      end,
    });
    history.push(`/admin/bannerList/?${query}`);
  };

  const onSortChange = (orderBy, sort) => {
    const query = qs.stringify({
      ...params,
      orderBy: orderBy,
      sort: sort,
    });
    history.push(`/admin/bannerList/?${query}`);
  };

  useEffect(() => {
    dispatch(getBannerList(params));
  }, [dispatch, location.search]);

  if (!banners) return null;

  return (
    <BannerList
      bannerlist={banners}
      onDateChange={onDateChange}
      onSortChange={onSortChange}
    />
  );
};
export default BannerListContainer;
