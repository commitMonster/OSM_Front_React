import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as destinationAPI from "../lib/api/destination";
import { call, takeLatest } from "redux-saga/effects";

const INITIALIZE = "payment/INITIALIZE";
const [
  CREATE_DESTINATION,
  CREATE_DESTINATION_SUCCESS,
  CREATE_DESTINATION_FAILURE,
] = createRequestActionTypes("destination/CREATE_DESTINATION");
const [
  GET_DESTINATION_LIST,
  GET_DESTINATION_LIST_SUCCESS,
  GET_DESTINATION_LIST_FAILURE,
] = createRequestActionTypes("destination/GET_DESTINATION_LIST");
const [
  UPDATE_DESTINATION,
  UPDATE_DESTINATION_SUCCESS,
  UPDATE_DESTINATION_FAILURE,
] = createRequestActionTypes("destination/UPDATE_DESTINATION");
const [
  DELETE_DESTINATION,
  DELETE_DESTINATION_SUCCESS,
  DELETE_DESTINATION_FAILURE,
] = createRequestActionTypes("destination/DELETE_DESTINATION");

export const initialize = createAction(INITIALIZE);
export const createDestination = createAction(
  CREATE_DESTINATION,
  (body) => body
);
export const getDestinationList = createAction(
  GET_DESTINATION_LIST,
  (body) => body
);
export const updateDestination = createAction(
  UPDATE_DESTINATION,
  (body) => body
);
export const deleteDestination = createAction(DELETE_DESTINATION, (id) => id);

const createDestinationSaga = createRequestSaga(
  CREATE_DESTINATION,
  destinationAPI.createDestination
);
const getDestinationListSaga = createRequestSaga(
  GET_DESTINATION_LIST,
  destinationAPI.getDestinationList
);
const updateDestinationSaga = createRequestSaga(
  UPDATE_DESTINATION,
  destinationAPI.updateDestination
);
const deleteDestinationSaga = createRequestSaga(
  DELETE_DESTINATION,
  destinationAPI.deleteDestination
);

export function* destinationSaga() {
  yield takeLatest(CREATE_DESTINATION, createDestinationSaga);
  yield takeLatest(GET_DESTINATION_LIST, getDestinationListSaga);
  yield takeLatest(UPDATE_DESTINATION, updateDestinationSaga);
  yield takeLatest(DELETE_DESTINATION, deleteDestinationSaga);
}

const initialState = {
  destinations: null,
  success: null,
  error: null,
};

const destination = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [GET_DESTINATION_LIST_SUCCESS]: (state, { payload: destinations }) => ({
      ...state,
      destinations,
    }),
    [GET_DESTINATION_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CREATE_DESTINATION]: (state) => ({
      ...state,
      success: false,
    }),
    [CREATE_DESTINATION_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [CREATE_DESTINATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UPDATE_DESTINATION]: (state) => ({
      ...state,
      success: false,
    }),
    [UPDATE_DESTINATION_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [UPDATE_DESTINATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [DELETE_DESTINATION]: (state) => ({
      ...state,
      success: false,
    }),
    [DELETE_DESTINATION_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [DELETE_DESTINATION_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default destination;
