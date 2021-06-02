import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CreateBanner from "../../../components/admin/banner/CreateBanner";

const CreateBannerContainer = () => {
  const { images } = useSelector((state) => state.images);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {}, [dispatch]);

  const createImages = ({
    title,
    type,
    description,
    startDate,
    endDate,
    image,
  }) => {
    const dataSubmit = {
      title,
      type,
      description,
      startDate,
      endDate,
      image,
    };
    console.log(dataSubmit);
  };

  return <CreateBanner images={images} createImages={createImages} />;
};

export default CreateBannerContainer;
