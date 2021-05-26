import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as productsAPI from "../lib/api/products";
import { takeLatest } from "redux-saga/effects";

const [GET_PRODUCT, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE] =
  createRequestActionTypes("product/GET_PRODUCT");
const UNLOAD_PRODUCT = "product/UNLOAD_product";

export const getProduct = createAction(GET_PRODUCT, (id) => id);
export const unloadproduct = createAction(UNLOAD_PRODUCT);

const getProductSaga = createRequestSaga(
  GET_PRODUCT,
  productsAPI.getProductById
);
export function* productSaga() {
  yield takeLatest(GET_PRODUCT, getProductSaga);
}

const initailState = {
  product: null,
  error: null,
};

export default handleActions(
  {
    [GET_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product,
    }),
    [GET_PRODUCT_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    // 남아있는 포스트를 제거함으로써 깜박임 현상 제거
    [UNLOAD_PRODUCT]: () => initailState,
  },
  initailState
);
