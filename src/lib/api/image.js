import axios from "axios";

export const getImage = async (name) => {
  const response = await axios({
    method: "get",
    url: `/api/images/${name}`,
  });
  return response;
};

export const createImages = async (data) => {
  const response = await axios({
    url: "/api/images",
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data,
  });
  return response;
};

export const deleteImage = async (image) => {
  const response = await axios({
    method: "delete",
    url: `/api/images`,
    data: {
      image,
    },
  });
  return response;
};
