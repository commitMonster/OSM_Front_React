import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as productsAPI from "../lib/api/products";
import { call, takeLatest } from "redux-saga/effects";

const [GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE] =
  createRequestActionTypes("products/GET_PRODUCT_LIST");
const [CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE] =
  createRequestActionTypes("products/CREATE_PRODUCT");
const [GET_NEW_PRODUCT, GET_NEW_PRODUCT_SUCCESS, GET_NEW_PRODUCT_FAILURE] =
  createRequestActionTypes("products/GET_NEW_PRODUCT");

export const getProductList = createAction(GET_PRODUCT_LIST, (params) => ({
  q: params.q,
  orderBy: params.orderBy,
  sort: params.sort,
  isPriceRange: params.isPriceRange,
  minPrice: params.minPrice,
  maxPrice: params.maxPrice,
  categoryId: params.categoryId,
  isDeleted: params.isDeleted,
  pageSize: params.pageSize,
  page: params.page,
}));

export const createProduct = createAction(
  CREATE_PRODUCT,
  ({ name, description, count, price, image, delivery, categoryId }) => ({
    name,
    description,
    count,
    price,
    image,
    delivery,
    categoryId,
  })
);

export const getNewProduct = createAction(GET_NEW_PRODUCT);

const getProductListSaga = createRequestSaga(
  GET_PRODUCT_LIST,
  productsAPI.getProductList
);
function* createProductSaga(action) {
  try {
    yield call(productsAPI.createProduct, action.payload);
  } catch (e) {
    console.log(e);
  }
}
const getNewProductSaga = createRequestSaga(
  GET_NEW_PRODUCT,
  productsAPI.getNewProduct
);

export function* productsSaga() {
  yield takeLatest(GET_PRODUCT_LIST, getProductListSaga);
  yield takeLatest(CREATE_PRODUCT, createProductSaga);
  yield takeLatest(GET_NEW_PRODUCT, getNewProductSaga);
}

const initialState = {
  products: null,
  newProduct: null,
  error: null,
  itemCount: 0,
};

const products = handleActions(
  {
    [GET_PRODUCT_LIST_SUCCESS]: (state, { payload: products }) => ({
      ...state,
      products: products.productList,
      itemCount: products.itemCount,
    }),
    [GET_PRODUCT_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_NEW_PRODUCT_SUCCESS]: (state, { payload: newProduct }) => ({
      ...state,
      newProduct: newProduct,
    }),
    [GET_NEW_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
  },
  initialState
);

export default products;
