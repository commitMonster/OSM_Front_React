import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as bannerAPI from "../lib/api/banner";
import { takeLatest } from "redux-saga/effects";

/**액션 타입 지정 */
const [GET_BANNER, GET_BANNER_SUCCESS, GET_BANNER_FAILURE] =
  createRequestActionTypes("banners/GET_BANNER");
const [GET_BANNER_LIST, GET_BANNER_LIST_SUCCESS, GET_BANNER_LIST_FAILURE] =
  createRequestActionTypes("banners/GET_BANNER_LIST");
const [DELETE_BANNER, DELETE_BANNER_SUCCESS, DELETE_BANNER_FAILURE] =
  createRequestActionTypes("banners/DELETE_BANNER");
const [ACTIVATE_BANNER, ACTIVATE_BANNER_SUCCESS, ACTIVATE_BANNER_FAILURE] =
  createRequestActionTypes("banners/ACTIVATE_BANNER");
const INITAILIZE = "banners/INITAILIZE";
const UNLOAD_BANNER = "banners/UNLOAD_BANNER";

/**액션 생성 함수 */
export const getBanner = createAction(GET_BANNER, (id) => id);
export const getBannerList = createAction(GET_BANNER_LIST, (body) => body);
export const deleteBanner = createAction(DELETE_BANNER, (id) => id);
export const activateBanner = createAction(
  ACTIVATE_BANNER,
  ({ bannerId, activation }) => ({ bannerId, activation })
);
export const initialize = createAction(INITAILIZE);

/**사가 */
const getBannerSaga = createRequestSaga(GET_BANNER, bannerAPI.getBannerById);
const getBannerListSaga = createRequestSaga(
  GET_BANNER_LIST,
  bannerAPI.getBannerList
);
const deleteBannerSaga = createRequestSaga(
  DELETE_BANNER,
  bannerAPI.deleteBanner
);
const activateBannerSaga = createRequestSaga(
  ACTIVATE_BANNER,
  bannerAPI.activateBanner
);

export function* bannersSaga() {
  yield takeLatest(GET_BANNER, getBannerSaga);
  yield takeLatest(GET_BANNER_LIST, getBannerListSaga);
  yield takeLatest(DELETE_BANNER, deleteBannerSaga);
  yield takeLatest(ACTIVATE_BANNER, activateBannerSaga);
}

const initailState = {
  banner: null,
  banners: null,
  error: null,
  success: false,
};

export default handleActions(
  {
    [INITAILIZE]: (state, { payload: key }) => ({
      ...state,
      [key]: initailState[key],
    }),
    [GET_BANNER]: (state) => ({
      ...state,
      success: false,
    }),
    [GET_BANNER_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      banner: data,
      success: true,
    }),
    [GET_BANNER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
      success: false,
    }),
    [GET_BANNER_LIST]: (state) => ({
      ...state,
      success: false,
    }),
    [GET_BANNER_LIST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      banners: data,
      success: true,
    }),
    [GET_BANNER_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
      success: false,
    }),
    [ACTIVATE_BANNER]: (state) => ({
      ...state,
      success: false,
    }),
    [ACTIVATE_BANNER_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
    [DELETE_BANNER]: (state) => ({
      ...state,
      success: false,
    }),
    [DELETE_BANNER_SUCCESS]: (state) => ({
      ...state,
      success: true,
    }),
  },
  initailState
);
