import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as bannerAPI from "../lib/api/banner";
import { call, takeLatest } from "redux-saga/effects";

/**액션 타입 지정 */
const [GET_BANNER, GET_BANNER_SUCCESS, GET_BANNER_FAILURE] =
  createRequestActionTypes("banners/GET_BANNER");
const [GET_BANNER_LIST, GET_BANNER_LIST_SUCCESS, GET_BANNER_LIST_FAILURE] =
  createRequestActionTypes("banners/GET_BANNER_LIST");
const CREATE_BANNER = "banners/CREATE_BANNER";
const DELETE_BANNER = "banners/DELETE_BANNER";
const UPDATE_BANNER = "banners/UPDATE_BANNER";
const ACTIVATE_BANNER = "banners/ACTIVATE_BANNER";
const UNLOAD_BANNER = "banners/UNLOAD_BANNER";

/**액션 생성 함수 */
export const getBanner = createAction(GET_BANNER, (id) => id);
export const getBannerList = createAction(GET_BANNER_LIST, (body) => body);
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
export const deleteBanner = createAction(DELETE_BANNER, (id) => id);
export const updateBanner = createAction(
  UPDATE_BANNER,
  ({ title, description, type, image, startDate, endDate }) => ({
    title,
    description,
    type,
    image,
    startDate,
    endDate,
  })
);
export const activateBanner = createAction(
  ACTIVATE_BANNER,
  ({ id, activation }) => ({ id, activation })
);

/**사가 */
const getBannerSaga = createRequestSaga(GET_BANNER, bannerAPI.getBannerById);
const getBannerListSaga = createRequestSaga(
  GET_BANNER_LIST,
  bannerAPI.getBannerList
);
function* createBannerSaga(action) {
  try {
    yield call(bannerAPI.createBanner, action.payload);
  } catch (e) {
    console.log(e);
  }
}
function* deleteBannerSaga(action) {
  try {
    yield call(bannerAPI.deleteBanner, action.payload);
  } catch (e) {
    console.log(e);
  }
}
function* updateBannerSaga(action) {
  try {
    yield call(bannerAPI.updateBanner, action.payload);
  } catch (e) {
    console.log(e);
  }
}
function* activateBannerSaga(action) {
  try {
    yield call(bannerAPI.activateBanner, action.payload);
  } catch (e) {
    console.log(e);
  }
}

export function* bannersSaga() {
  yield takeLatest(GET_BANNER, getBannerSaga);
  yield takeLatest(GET_BANNER_LIST, getBannerListSaga);
  yield takeLatest(CREATE_BANNER, createBannerSaga);
  yield takeLatest(DELETE_BANNER, deleteBannerSaga);
  yield takeLatest(UPDATE_BANNER, updateBannerSaga);
  yield takeLatest(ACTIVATE_BANNER, activateBannerSaga);
}

const initailState = {
  banner: null,
  banners: null,
  error: null,
};

export default handleActions(
  {
    [GET_BANNER_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      banner: data,
    }),
    [GET_BANNER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
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
