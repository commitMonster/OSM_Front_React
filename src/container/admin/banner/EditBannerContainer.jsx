import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import EditBanner from "../../../components/admin/banner/EditBanner";
import { getBannerList } from "../../../modules/banners";
import {
  createImages,
  deleteImage,
  setImage,
  initialize as initializeImage,
} from "../../../modules/images";
import {
  changeField,
  createBanner,
  initialize,
  updateBanner,
} from "../../../modules/write";

const EditBannerContainer = () => {
  const { banner, success } = useSelector((state) => state.write);
  const { images } = useSelector((state) => state.images);
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imgaeLoading, setImgaeLoading] = useState(false);
  const [beforeImages, setBeforeImages] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(initialize("banner"));
      dispatch(initializeImage());
    };
  }, [dispatch]);

  useEffect(() => {
    if (banner.image) {
      dispatch(setImage(banner.image));
    }
  }, [dispatch, banner.image]);

  useEffect(() => {
    if (imgaeLoading) {
      const tempImages = pictures.filter(
        (item) =>
          images.findIndex((image) => image.indexOf(item.slice(20)) !== -1) ===
          -1
      );
      dispatch(setImage(images.concat(tempImages)));
      setImgaeLoading(false);
    }
  }, [images]);

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const onDataChange = (date) => {
    console.log(date);
    if (!date[0] || !date[1]) return;

    const start = `${date[0].getFullYear()}-${
      date[0].getMonth() + 1 < 10
        ? `0${date[0].getMonth() + 1}`
        : date[0].getMonth() + 1
    }-${date[0].getDate() < 10 ? `0${date[0].getDate()}` : date[0].getDate()}`;

    const end = `${date[1].getFullYear()}-${
      date[1].getMonth() + 1 < 10
        ? `0${date[1].getMonth() + 1}`
        : date[1].getMonth() + 1
    }-${date[1].getDate() < 10 ? `0${date[1].getDate()}` : date[1].getDate()}`;

    dispatch(changeField({ mode: "banner", key: "startDate", value: start }));
    dispatch(changeField({ mode: "banner", key: "endDate", value: end }));
  };

  const uploadImage = (file, pictures) => {
    setPictures(pictures);
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("files", file[i]);
    }
    dispatch(createImages(formData));
    setImgaeLoading(true);
  };

  const onPublish = () => {
    // beforeImages.map((item) => {
    //   dispatch(deleteImage(item));
    // });
    if (banner.originalId) {
      setLoading(true);
      dispatch(
        updateBanner({
          ...banner,
          image: images.join(","),
          id: banner.originalId,
        })
      );
      return;
    } else {
      setLoading(true);
      dispatch(createBanner({ ...banner, image: images.join(",") }));
      return;
    }
  };

  useEffect(() => {
    if (loading && success) {
      setLoading(false);
      dispatch(getBannerList({}));
      history.push("/admin/bannerList");
    }
  }, [success]);

  return (
    <EditBanner
      banner={banner}
      images={images}
      onChangeField={onChangeField}
      onDataChange={onDataChange}
      uploadImage={uploadImage}
      onPublish={onPublish}
      imgaeLoading={imgaeLoading}
    />
  );
};

export default EditBannerContainer;
