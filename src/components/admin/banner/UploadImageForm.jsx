import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import ImageUploader from "react-images-upload";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const UploadImageForm = ({ images, uploadImage, imgaeLoading }) => {
  const baseURL = "https://shop.dnatuna.fun/api/";
  const [defaultImages, setDefaultImages] = useState();

  const onDrop = (files, pictures) => {
    console.log(files, pictures);
    uploadImage(
      files,
      pictures
        .filter((item) => item[0] !== "d")
        .map((item) => item.slice(item.indexOf("images")))
    );
  };

  useEffect(() => {
    if (!imgaeLoading) {
      setDefaultImages(images.map((item) => baseURL + item));
    }
  }, [images]);

  useEffect(() => {
    console.log(defaultImages);
  }, [defaultImages]);

  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Grid container item xs={12} justifyContent="center">
          {defaultImages && (
            <ImageUploader
              style={{
                border: "1.5px dashed rgb(67,80,165)",
                borderRadius: "10px",
              }}
              withPreview={true}
              withIcon={true}
              onChange={onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
              maxFileSize={10242880}
              buttonText="이미지 업로드"
              buttonStyles={{
                fontSize: "1rem",
                backgroundColor: "rgb(67,80,165)",
              }}
              label="상품의 이미지를 업로드해주세요"
              labelStyles={{ fontSize: "1rem" }}
              singleImage={false}
              fileSizeError="파일 사이즈가 너무 큽니다"
              fileTypeError="파일의 확장자가 지원하지 않는 확장자 입니다"
              defaultImages={defaultImages}
            />
          )}
        </Grid>
        {images.length > 0 && (
          <Slide
            easing="ease"
            transitionDuration="500"
            indicators={true}
            style={{ width: "100%" }}
          >
            {images.map((item) => (
              <img
                src={`${baseURL}${item}`}
                alt="img"
                style={{
                  marginTop: "5rem",
                  width: "100%",
                  height: "20rem",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            ))}
          </Slide>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default React.memo(UploadImageForm);
