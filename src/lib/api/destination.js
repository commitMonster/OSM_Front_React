import axios from "axios";

export const createDestination = async ({
  destinationName,
  receiver,
  mainAddress,
  detailAddress,
  zoneNumber,
  phone,
  isDefault,
}) => {
  const response = await axios({
    method: "post",
    url: "/api/destination",
    data: {
      destinationName,
      receiver,
      mainAddress,
      detailAddress,
      zoneNumber,
      phone,
      isDefault,
    },
  });
  return response;
};

export const getDestinationList = async () => {
  const response = await axios({
    method: "get",
    url: "/api/destination",
  });
  return response;
};

export const updateDestination = async ({
  id,
  destinationName,
  receiver,
  mainAddress,
  detailAddress,
  zoneNumber,
  phone,
  isDefault,
}) => {
  const response = await axios({
    method: "patch",
    url: `/api/destination/${id}`,
    data: {
      destinationName,
      receiver,
      mainAddress,
      detailAddress,
      zoneNumber,
      phone,
      isDefault,
    },
  });
  return response;
};

export const deleteDestination = async (id) => {
  const response = await axios({
    method: "delete",
    url: `/api/destination/${id}`,
  });
  return response;
};
