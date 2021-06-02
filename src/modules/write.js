import { createAction, handleActions } from "redux-actions";
import * as productsAPI from "../lib/api/product";
import { takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";
const [CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_FAILURE] =
  createRequestActionTypes("write/CREATE_PRODUCT");
const SET_ORIGINAL_PRODUCT = "write/SET_ORIGINAL_PRODUCT";
const [UPDATE_PRODUCT, UPDATE_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAILURE] =
  createRequestActionTypes("write/UPDATE_PRODUCT");

export const initialize = createAction(INITIALIZE, (mode) => mode);
export const changeField = createAction(
  CHANGE_FIELD,
  ({ mode, key, value }) => ({
    mode,
    key,
    value,
  })
);
export const setOriginalProduct = createAction(
  SET_ORIGINAL_PRODUCT,
  (product) => product
);
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
export const updateProduct = createAction(
  UPDATE_PRODUCT,
  ({ id, name, description, count, price, image, delivery, categoryId }) => ({
    id,
    name,
    description,
    count,
    price,
    image,
    delivery,
    categoryId,
  })
);

// saga 생성
const createProductSaga = createRequestSaga(
  CREATE_PRODUCT,
  productsAPI.createProduct
);
const updateProductSaga = createRequestSaga(
  UPDATE_PRODUCT,
  productsAPI.updateProduct
);

export function* writeSaga() {
  yield takeLatest(CREATE_PRODUCT, createProductSaga);
  yield takeLatest(UPDATE_PRODUCT, updateProductSaga);
}

const initialState = {
  product: {
    name: "",
    description: "",
    count: 0,
    price: 0,
    image: "",
    delivery: 0,
    categoryId: 0,
    product: null,
    productError: null,
    originalId: null,
  },
  banner: {
    title: "",
    description: "",
    type: 0,
    image: "",
    startDate: null,
    endDate: null,
    banner: null,
    bannerError: null,
    originalId: null,
  },
};

const write = handleActions(
  {
    [INITIALIZE]: (state, { payload: mode }) => ({
      ...state,
      [mode]: initialState[mode],
    }),
    [CHANGE_FIELD]: (state, { payload: { mode, key, value } }) => ({
      ...state,
      [mode]: { ...state[mode], [key]: value },
    }),
    [CREATE_PRODUCT]: (state) => ({
      ...state,
      product: {
        product: null,
        productError: null,
      },
    }),
    [CREATE_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product: {
        product,
      },
    }),
    [CREATE_PRODUCT_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      product: {
        productError,
      },
    }),
    [SET_ORIGINAL_PRODUCT]: (state, { payload: product }) => ({
      ...state,
      product: {
        name: product.name,
        description: product.description,
        count: product.count,
        price: product.price,
        image: product.image,
        delivery: product.delivery,
        categoryId: product.categoryId,
        originalId: product.id,
      },
    }),
    [UPDATE_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product: {
        product,
      },
    }),
    [UPDATE_PRODUCT_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      product: {
        productError,
      },
    }),
  },
  initialState
);

export default write;
