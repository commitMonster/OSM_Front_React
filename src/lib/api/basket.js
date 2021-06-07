import axios from "axios";
import qs from "qs";

export const addBasket = async ({ productId, count }) => {
  const response = await axios({
    method: "post",
    url: "/api/basket",
    data: {
      productId,
      count,
    },
  });
  return response;
};

export const onceBasket = async ({ productId, count }) => {
  const response = await axios({
    method: "post",
    url: "/api/basket/once",
    data: {
      productId,
      count,
    },
  });
  return response;
};

export const getBasket = async () => {
  const response = await axios({
    method: "get",
    url: "/api/basket",
  });
  return response;
};

export const updateBasket = async ({ id, productId, count }) => {
  const response = await axios({
    method: "patch",
    url: `/api/basket/${id}`,
    data: {
      productId,
      count,
    },
  });
  return response;
};

export const deleteBasketById = async (id) => {
  const response = await axios({
    method: "delete",
    url: `/api/basket/${id}`,
  });
  return response;
};

export const deleteBasket = async () => {
  const response = await axios({
    method: "delete",
    url: "/api/basket",
  });
  return response;
};
