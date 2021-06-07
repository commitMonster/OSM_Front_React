import axios from "axios";
import qs from "qs";

export const getProductList = async ({
  q,
  orderBy = "createdAt",
  sort = "desc",
  isPriceRange,
  minPrice,
  maxPrice,
  categoryId = "",
  isDeleted,
  pageSize = 10,
  page = 1,
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
    url: `/api/product?${queryString}`,
  });
  return response;
};

export const createProduct = async ({
  name,
  description,
  stock,
  price,
  image,
  delivery,
  categoryId,
}) => {
  const response = await axios({
    method: "post",
    url: "/api/product",
    data: {
      name: name,
      description: description,
      stock: stock,
      price: price,
      image: image,
      delivery: delivery,
      categoryId: categoryId,
    },
  });
  return response;
};

export const deleteProduct = async (id) => {
  const response = await axios({
    method: "delete",
    url: `/api/product/${id}`,
  });
  return response;
};

export const updateProduct = async ({
  id,
  name,
  description,
  stock,
  price,
  image,
  delivery,
  categoryId,
}) => {
  const response = await axios({
    method: "patch",
    url: `/api/product/${id}`,
    data: {
      name: name,
      description: description,
      stock: stock,
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
    url: `/api/product/${id}`,
  });
  return response;
};

export const getNewProductList = async () => {
  const response = await axios({
    method: "get",
    url: "/api/product/new",
  });
  return response;
};
export const getPopularProductList = async () => {
  const response = await axios({
    method: "get",
    url: "/api/product/popular",
  });
  return response;
};
