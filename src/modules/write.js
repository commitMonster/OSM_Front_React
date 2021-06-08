import { createAction, handleActions } from "redux-actions";
import * as productsAPI from "../lib/api/product";
import * as bannerAPI from "../lib/api/banner";
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
const [CREATE_BANNER, CREATE_BANNER_SUCCESS, CREATE_BANNER_FAILURE] =
  createRequestActionTypes("write/CREATE_BANNER");
const SET_ORIGINAL_BANNER = "write/SET_ORIGINAL_BANNER";
const [UPDATE_BANNER, UPDATE_BANNER_SUCCESS, UPDATE_BANNER_FAILURE] =
  createRequestActionTypes("write/UPDATE_BANNER");

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
  ({ name, description, stock, price, image, delivery, categoryId }) => ({
    name,
    description,
    stock,
    price,
    image,
    delivery,
    categoryId,
  })
);
export const updateProduct = createAction(
  UPDATE_PRODUCT,
  ({ id, name, description, stock, price, image, delivery, categoryId }) => ({
    id,
    name,
    description,
    stock,
    price,
    image,
    delivery,
    categoryId,
  })
);
export const setOriginalBanner = createAction(
  SET_ORIGINAL_BANNER,
  (banner) => banner
);
export const createBanner = createAction(
  CREATE_BANNER,
  ({ title, description, type, image, startDate, endDate }) => ({
    title,
    description,
    type,
    image,
    startDate,
    endDate,
  })
);
export const updateBanner = createAction(
  UPDATE_BANNER,
  ({ id, title, description, type, image, startDate, endDate }) => ({
    id,
    title,
    description,
    type,
    image,
    startDate,
    endDate,
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
const createBannerSaga = createRequestSaga(
  CREATE_BANNER,
  bannerAPI.createBanner
);
const updateBannerSaga = createRequestSaga(
  UPDATE_BANNER,
  bannerAPI.updateBanner
);

export function* writeSaga() {
  yield takeLatest(CREATE_PRODUCT, createProductSaga);
  yield takeLatest(UPDATE_PRODUCT, updateProductSaga);
  yield takeLatest(CREATE_BANNER, createBannerSaga);
  yield takeLatest(UPDATE_BANNER, updateBannerSaga);
}

const initialState = {
  product: {
    name: "",
    description: "",
    stock: 1,
    price: 1,
    image: "",
    delivery: 0,
    categoryId: 1,
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
  success: false,
  error: null,
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
      success: false,
    }),
    [CREATE_PRODUCT_SUCCESS]: (state, { payload: product }) => ({
      ...state,
      product: {
        product,
      },
      success: true,
    }),
    [CREATE_PRODUCT_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      product: {
        productError,
      },
      success: false,
    }),
    [SET_ORIGINAL_PRODUCT]: (state, { payload: product }) => ({
      ...state,
      product: {
        name: product.name,
        description: product.description,
        stock: product.stock,
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
      success: true,
    }),
    [UPDATE_PRODUCT_FAILURE]: (state, { payload: productError }) => ({
      ...state,
      product: {
        productError,
      },
      success: false,
    }),
    [CREATE_BANNER]: (state) => ({
      ...state,
      banner: {
        banner: null,
        bannerError: null,
      },
      success: false,
    }),
    [CREATE_BANNER_SUCCESS]: (state, { payload: banner }) => ({
      ...state,
      banner: {
        banner,
      },
      success: true,
    }),
    [CREATE_BANNER_FAILURE]: (state, { payload: bannerError }) => ({
      ...state,
      banner: {
        bannerError,
      },
      success: false,
    }),
    [SET_ORIGINAL_BANNER]: (state, { payload: banner }) => ({
      ...state,
      banner: {
        title: banner.title,
        description: banner.description,
        type: banner.type,
        image: banner.image,
        startDate: banner.startDate,
        endDate: banner.endDate,
        originalId: banner.id,
      },
    }),
    [UPDATE_BANNER_SUCCESS]: (state, { payload: banner }) => ({
      ...state,
      banner: {
        banner,
      },
      success: true,
    }),
    [UPDATE_BANNER_FAILURE]: (state, { payload: bannerError }) => ({
      ...state,
      banner: {
        bannerError,
      },
      success: false,
    }),
  },
  initialState
);

export default write;
