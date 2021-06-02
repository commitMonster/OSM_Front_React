import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as productsAPI from "../lib/api/product";
import { call, takeLatest } from "redux-saga/effects";

const [GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE] =
  createRequestActionTypes("products/GET_PRODUCT");
const [GET_PRODUCT_LIST, GET_PRODUCT_LIST_SUCCESS, GET_PRODUCT_LIST_FAILURE] =
  createRequestActionTypes("products/GET_PRODUCT_LIST");
const [DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE] =
  createRequestActionTypes("products/DELETE_PRODUCT");
const [
  GET_NEW_PRODUCT_LIST,
  GET_NEW_PRODUCT_LIST_SUCCESS,
  GET_NEW_PRODUCT_LIST_FAILURE,
] = createRequestActionTypes("products/GET_NEW_PRODUCT_LIST");
const UNLOAD_PRODUCT = "product/UNLOAD_PRODUCT";

export const getProduct = createAction(GET_PRODUCT, (id) => id);
export const getProductList = createAction(GET_PRODUCT_LIST, (body) => body);
export const deleteProduct = createAction(DELETE_PRODUCT, (id) => id);
export const getNewProductList = createAction(GET_NEW_PRODUCT_LIST);
export const unloadproduct = createAction(UNLOAD_PRODUCT);

const getProductSaga = createRequestSaga(
  GET_PRODUCT,
  productsAPI.getProductById
);
const getProductListSaga = createRequestSaga(
  GET_PRODUCT_LIST,
  productsAPI.getProductList
);
const deleteProductSaga = createRequestSaga(
  DELETE_PRODUCT,
  productsAPI.deleteProduct
);
const getNewProductListSaga = createRequestSaga(
  GET_NEW_PRODUCT_LIST,
  productsAPI.getNewProductList
);

export function* productsSaga() {
  yield takeLatest(GET_PRODUCT, getProductSaga);
  yield takeLatest(GET_PRODUCT_LIST, getProductListSaga);
  yield takeLatest(DELETE_PRODUCT, deleteProductSaga);
  yield takeLatest(GET_NEW_PRODUCT_LIST, getNewProductListSaga);
}

const initialState = {
  product: null,
  products: null,
  newProducts: null,
  success: null,
  error: null,
  itemCount: 0,
};

const products = handleActions(
  {
    [GET_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product,
    }),
    [GET_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_PRODUCT_LIST_SUCCESS]: (state, { payload: products }) => ({
      ...state,
      products: products.productList,
      itemCount: products.itemCount,
    }),
    [GET_PRODUCT_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_NEW_PRODUCT_LIST_SUCCESS]: (state, { payload: newProducts }) => ({
      ...state,
      newProducts: newProducts,
    }),
    [GET_NEW_PRODUCT_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
    [DELETE_PRODUCT_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [DELETE_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
    [UNLOAD_PRODUCT]: (state) => ({
      ...state,
      product: null,
    }),
  },
  initialState
);

export default products;
