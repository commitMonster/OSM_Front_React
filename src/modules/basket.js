import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as basketAPI from "../lib/api/basket";
import { takeLatest } from "redux-saga/effects";

const [GET_BASKET_LIST, GET_BASKET_LIST_SUCCESS, GET_BASKET_LIST_FAILURE] =
  createRequestActionTypes("basket/GET_BASKET_LIST");
const [ADD_BASKET, ADD_BASKET_SUCCESS, ADD_BASKET_FAILURE] =
  createRequestActionTypes("basket/ADD_BASKET");
const [ONCE_BASKET, ONCE_BASKET_SUCCESS, ONCE_BASKET_FAILURE] =
  createRequestActionTypes("basket/ONCE_BASKET");
const [EDIT_BASKET, EDIT_BASKET_SUCCESS, EDIT_BASKET_FAILURE] =
  createRequestActionTypes("basket/EDIT_BASKET");
const [DELETE_BASKET, DELETE_BASKET_SUCCESS, DELETE_BASKET_FAILURE] =
  createRequestActionTypes("basket/DELETE_BASKET");
const INITIAL_CURRENT = "basket/INITIAL_CURRENT";
const INITIAL_BASKET = "basket/INITIAL_BASKET";

export const initialCurrent = createAction(INITIAL_CURRENT);
export const initialBasket = createAction(INITIAL_BASKET);
export const getBasketList = createAction(GET_BASKET_LIST);
export const addBasket = createAction(ADD_BASKET, ({ productId, count }) => ({
  productId,
  count,
}));
export const onceBasket = createAction(ONCE_BASKET, ({ productId, count }) => ({
  productId,
  count,
}));
export const editBasket = createAction(
  EDIT_BASKET,
  ({ id, productId, count }) => ({
    id,
    productId,
    count,
  })
);
export const deleteBasket = createAction(DELETE_BASKET, (id) => id);

const getBasketListSaga = createRequestSaga(
  GET_BASKET_LIST,
  basketAPI.getBasket
);
const addBasketSaga = createRequestSaga(ADD_BASKET, basketAPI.addBasket);
const onceBasketSaga = createRequestSaga(ONCE_BASKET, basketAPI.addBasket);
const editBasketSaga = createRequestSaga(EDIT_BASKET, basketAPI.updateBasket);
const deleteBasketSaga = createRequestSaga(
  DELETE_BASKET,
  basketAPI.deleteBasketById
);
export function* basketSaga() {
  yield takeLatest(GET_BASKET_LIST, getBasketListSaga);
  yield takeLatest(ADD_BASKET, addBasketSaga);
  yield takeLatest(ONCE_BASKET, onceBasketSaga);
  yield takeLatest(EDIT_BASKET, editBasketSaga);
  yield takeLatest(DELETE_BASKET, deleteBasketSaga);
}

const initailState = {
  basket: null,
  currentItem: null,
  success: false,
  error: null,
};

export default handleActions(
  {
    [INITIAL_CURRENT]: (state) => ({
      ...state,
      currentItem: null,
      error: null,
    }),
    [INITIAL_BASKET]: (state) => ({
      ...state,
      basket: null,
      error: null,
    }),
    [GET_BASKET_LIST]: (state) => ({
      ...state,
      success: false,
    }),
    [GET_BASKET_LIST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      basket: data,
      success: true,
    }),
    [GET_BASKET_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
      success: false,
    }),
    [ADD_BASKET]: (state) => ({
      ...state,
      success: false,
    }),
    [ADD_BASKET_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      currentItem: data,
      success: true,
    }),
    [ADD_BASKET_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [ONCE_BASKET]: (state) => ({
      ...state,
      success: false,
    }),
    [ONCE_BASKET_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      currentItem: data,
      success: true,
    }),
    [ONCE_BASKET_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [EDIT_BASKET]: (state) => ({
      ...state,
      success: false,
    }),
    [EDIT_BASKET_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [EDIT_BASKET_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [DELETE_BASKET]: (state) => ({
      ...state,
      success: false,
    }),
    [DELETE_BASKET_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [DELETE_BASKET_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initailState
);
