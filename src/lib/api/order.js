import axios from "axios";
import qs from "qs";

export const createOrder = async ({
  id,
  price,
  delivery,
  destinationId,
  list,
}) => {
  const response = await axios({
    method: "post",
    url: `/api/order/success`,
    data: { id, price, delivery, list, destinationId },
  });
  return response;
};

export const cancelOrder = async (id) => {
  const response = await axios({
    url: "/api/order/cancel",
    method: "post",
    data: id,
  });
  return response;
};

export const getOrderList = async ({
  page,
  pageSize,
  start = "",
  end = "",
}) => {
  const queryString = qs.stringify({
    page,
    pageSize,
    start,
    end,
  });
  const response = await axios({
    method: "get",
    url: `/api/order?${queryString}`,
  });
  return response;
};

export const manageOrder = async (id) => {
  const response = await axios({
    url: `/api/order/manage/${id}`,
    method: "patch",
    data: id,
  });
  return response;
};
