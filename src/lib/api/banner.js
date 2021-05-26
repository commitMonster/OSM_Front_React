import axios from "axios";
import qs from "qs";

export const getBannerList = async () => {
  const response = await axios({
    method: "get",
    url: "/banner?sort=now",
  });
  return response;
};
