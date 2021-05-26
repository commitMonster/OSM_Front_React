import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as bannerAPI from "../lib/api/banner";
import { takeLatest } from "redux-saga/effects";

const [GET_BANNER_LIST, GET_BANNER_LIST_SUCCESS, GET_BANNER_LIST_FAILURE] =
  createRequestActionTypes("product/GET_BANNER_LIST");

export const getBannerList = createAction(GET_BANNER_LIST);

const getBannerListSaga = createRequestSaga(
  GET_BANNER_LIST,
  bannerAPI.getBannerList
);
export function* bannerSaga() {
  yield takeLatest(GET_BANNER_LIST, getBannerListSaga);
}

const initailState = {
  banners: null,
  error: null,
};

export default handleActions(
  {
    [GET_BANNER_LIST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      banners: data,
    }),
    [GET_BANNER_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initailState
);
