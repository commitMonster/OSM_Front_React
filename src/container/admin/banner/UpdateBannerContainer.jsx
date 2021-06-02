import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import UpdateBanner from "../../../components/admin/banner/UpdateBanner";
import { getBannerByIdAction } from "../../../modules/actions/bannerActions";
function UpdateBannerContainer({ id }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, data, error } = useSelector(
    (state) => state.BannerReducer.bannerpost
  );
  useEffect(() => {
    dispatch(getBannerByIdAction(id));
  }, []);
  useEffect(() => {
    if (data) {
      alert("배너 수정 성공");
      history.push("/admin/banner");
    }
  }, [data]);
  return (
    <>
      <UpdateBanner id={id} />
    </>
  );
}

export default UpdateBannerContainer;
