import axios from "axios";
import qs from "qs";

export const getBannerList = async ({
  type = "",
  sort = "",
  start = "",
  end = "",
}) => {
  const queryString = qs.stringify({
    type,
    sort,
    start,
    end,
  });
  const response = await axios({
    method: "get",
    url: `/api/banner?${queryString}`,
  });
  return response;
};

export const getBannerById = async (id) => {
  const response = await axios({
    method: "get",
    url: `/api/banner/${id}`,
  });
  return response;
};

export const deleteBanner = async (id) => {
  const response = await axios({
    method: "delete",
    url: `/api/banner/${id}`,
  });
  return response;
};

export const createBanner = async ({
  title,
  description,
  type,
  image,
  startDate,
  endDate,
}) => {
  const response = await axios({
    method: "post",
    url: "/api/banner",
    data: { title, description, type, image, startDate, endDate },
  });
  return response;
};

export const updateBanner = async ({
  id,
  title,
  description,
  type,
  image,
  startDate,
  endDate,
}) => {
  const response = await axios({
    methd: "patch",
    url: `/api/banner/${id}`,
    data: { title, description, type, image, startDate, endDate },
  });
  return response;
};

export const activateBanner = async ({ bannerId, activation }) => {
  const resposne = await axios({
    method: "patch",
    url: `/api/banner/${bannerId}/activate`,
    data: {
      activation,
    },
  });
  return resposne;
};
