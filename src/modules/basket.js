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
const INITIAL_CURRENT = "basket/INITIAL_CURRENT";
const INITIAL_BASKET = "basket/INITIAL_BASKET";

export const initialCurrent = createAction(INITIAL_CURRENT);
export const initialBasket = createAction(INITIAL_BASKET);
export const getBasketList = createAction(GET_BASKET_LIST);
export const addBasket = createAction(ADD_BASKET, ({ productId, count }) => ({
  productId,
  count,
}));

const getBasketListSaga = createRequestSaga(
  GET_BASKET_LIST,
  basketAPI.getBasket
);
const addBasketSaga = createRequestSaga(ADD_BASKET, basketAPI.addBasket);
export function* basketSaga() {
  yield takeLatest(GET_BASKET_LIST, getBasketListSaga);
  yield takeLatest(ADD_BASKET, addBasketSaga);
}

const initailState = {
  basket: null,
  currentItem: null,
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
    [GET_BASKET_LIST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      basket: data,
    }),
    [GET_BASKET_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error: error,
    }),
    [ADD_BASKET_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      currentItem: data,
    }),
    [ADD_BASKET_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initailState
);
