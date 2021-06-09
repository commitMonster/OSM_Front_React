import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as orderAPI from "../lib/api/order";
import { takeLatest } from "redux-saga/effects";

const [SET_ORDER, SET_ORDER_SUCCESS, SET_ORDER_FAILURE] =
  createRequestActionTypes("order/SET_ORDER");
const [SET_DESTINATION, SET_DESTINATION_SUCCESS, SET_DESTINATION_FAILURE] =
  createRequestActionTypes("order/SET_DESTINATION");
const [SET_TID, SET_TID_SUCCESS, SET_TID_FAILURE] =
  createRequestActionTypes("order/SET_TID");
const [CREATE_ORDER, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE] =
  createRequestActionTypes("order/CREATE_ORDER");
const [CANCEL_ORDER, CANCEL_ORDER_SUCCESS, CANCEL_ORDER_FAILURE] =
  createRequestActionTypes("order/CANCEL_ORDER");
const [GET_ORDER_LIST, GET_ORDER_LIST_SUCCESS, GET_ORDER_LIST_FAILURE] =
  createRequestActionTypes("order/GET_ORDER_LIST");
const [MANAGE_ORDER, MANAGE_ORDER_SUCCESS, MANAGE_ORDER_FAILURE] =
  createRequestActionTypes("order/MANAGE_ORDER");
const INITIALIZE = "order/INITIALIZE";

export const setOrder = createAction(SET_ORDER, (data) => data);
export const setDestination = createAction(
  SET_DESTINATION,
  (destination) => destination
);
export const setTid = createAction(SET_TID, (tid) => tid);
export const createOrder = createAction(CREATE_ORDER, (body) => body);
export const cancelOrder = createAction(CANCEL_ORDER, (id) => id);
export const getOrderList = createAction(GET_ORDER_LIST, (body) => body);
export const manageOrder = createAction(MANAGE_ORDER, (id) => id);
export const initialize = createAction(INITIALIZE);

const createOrderSaga = createRequestSaga(CREATE_ORDER, orderAPI.createOrder);
const cancelOrderSaga = createRequestSaga(CANCEL_ORDER, orderAPI.cancelOrder);
const getOrderListSaga = createRequestSaga(
  GET_ORDER_LIST,
  orderAPI.getOrderList
);
const manageOrderSaga = createRequestSaga(MANAGE_ORDER, orderAPI.manageOrder);

export function* orderSaga() {
  yield takeLatest(CREATE_ORDER, createOrderSaga);
  yield takeLatest(CANCEL_ORDER, cancelOrderSaga);
  yield takeLatest(GET_ORDER_LIST, getOrderListSaga);
  yield takeLatest(MANAGE_ORDER, manageOrderSaga);
}

const initialState = {
  order: {
    item_name: null,
    quantity: null,
    totalAmount: null,
    totalPrice: null,
    delivery: null,
    products: null,
  },
  orderList: null,
  list: null,
  destination: null,
  tid: null,
  success: null,
  error: null,
};

const order = handleActions(
  {
    [SET_ORDER]: (state, { payload: data }) => ({
      ...state,
      order: data.order,
      list: data.list,
    }),
    [SET_DESTINATION]: (state, { payload: destination }) => ({
      ...state,
      destination: destination,
    }),
    [SET_TID]: (state, { payload: tid }) => ({
      ...state,
      tid: tid,
    }),
    [CREATE_ORDER]: (state) => ({
      ...state,
      success: false,
    }),
    [CREATE_ORDER_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [CREATE_ORDER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_ORDER_LIST_SUCCESS]: (state, { payload: orderList }) => ({
      ...state,
      orderList,
    }),
    [GET_ORDER_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [MANAGE_ORDER]: (state) => ({
      ...state,
      success: false,
    }),
    [MANAGE_ORDER_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [MANAGE_ORDER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [INITIALIZE]: (state) => initialState,
  },
  initialState
);

export default order;
