import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import EditProduct from "../../../components/admin/product/EditProduct";
import { createImages, setImage } from "../../../modules/images";
import {
  changeField,
  createProduct,
  initialize,
  updateProduct,
} from "../../../modules/write";

const EditProductContainer = () => {
  const { product } = useSelector((state) => state.write);
  const { images } = useSelector((state) => state.images);
  const [pictures, setPictures] = useState([]);
  const [imgaeLoading, setLoading] = useState(false);
  const [beforeImages, setBeforeImages] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(initialize("product"));
    };
  }, [dispatch]);

  useEffect(() => {
    if (product.image) {
      dispatch(setImage(product.image));
    }
  }, [dispatch, product.image]);

  useEffect(() => {
    if (imgaeLoading) {
      const tempImages = pictures.filter(
        (item) =>
          images.findIndex((image) => image.indexOf(item.slice(20)) !== -1) ===
          -1
      );
      dispatch(setImage(images.concat(tempImages)));
      setLoading(false);
    }
  }, [images]);

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch]
  );

  const uploadImage = (file, pictures) => {
    setPictures(pictures);
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("files", file[i]);
    }
    dispatch(createImages(formData));
    setLoading(true);
  };

  const onPublish = () => {
    // beforeImages.map((item) => {
    //   dispatch(deleteImage(item));
    // });
    if (product.originalId) {
      dispatch(
        updateProduct({
          ...product,
          image: images.join(","),
          id: product.originalId,
        })
      );
      history.push("/admin/productList");
      return;
    } else {
      dispatch(createProduct({ ...product, image: images.join(",") }));
      history.push("/admin/productList");
      return;
    }
  };

  return (
    <EditProduct
      product={product}
      images={images}
      onChangeField={onChangeField}
      uploadImage={uploadImage}
      onPublish={onPublish}
      imgaeLoading={imgaeLoading}
    />
  );
};

export default EditProductContainer;
