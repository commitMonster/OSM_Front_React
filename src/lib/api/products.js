import axios from "axios";
import qs from "qs";

export const createProduct = async ({
  name,
  description,
  count,
  price,
  image,
  delivery,
  categoryId,
}) => {
  const response = await axios({
    method: "post",
    url: "/product",
    data: {
      name: name,
      description: description,
      count: count,
      price: price,
      image: image,
      delivery: delivery,
      categoryId: categoryId,
    },
  });
  return response;
};

export const getProductById = async (id) => {
  const response = await axios({
    method: "get",
    url: `/product/${id}`,
  });
  return response;
};

export const getProductList = async ({
  q,
  orderBy,
  sort,
  isPriceRange,
  minPrice,
  maxPrice,
  categoryId,
  isDeleted,
  pageSize,
  page,
}) => {
  const queryString = qs.stringify({
    q,
    orderBy,
    sort,
    isPriceRange,
    minPrice,
    maxPrice,
    categoryId,
    isDeleted,
    pageSize,
    page,
  });
  const response = await axios({
    method: "get",
    url: `/product?${queryString}`,
  });
  return response;
};

export const getNewProduct = async () => {
  const response = await axios({
    method: "get",
    url: "/product/new",
  });
  return response;
};
