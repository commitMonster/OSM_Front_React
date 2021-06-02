import { call, takeLatest } from "@redux-saga/core/effects";
import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as imagesAPI from "../lib/api/image";

/**액션 타입 지정 */
const [GET_IMAGE, GET_IMAGE_SUCCESS, GET_IMAGE_FAILURE] =
  createRequestActionTypes("images/GET_IMAGE");
const [CREATE_IMAGES, CREATE_IMAGES_SUCCESS, CREATE_IMAGES_FAILURE] =
  createRequestActionTypes("images/CREATE_IMAGES");
const DELETE_IMAGE = "images/DELETE_IMAGE";
const SET_IMAGES = "images/SET_IMAGES";

/**액션 생성 함수 */
export const getImage = createAction(GET_IMAGE, (name) => name);
export const createImages = createAction(CREATE_IMAGES, (name) => name);
export const deleteImage = createAction(DELETE_IMAGE, (name) => name);
export const setImage = createAction(SET_IMAGES, (images) => images);

/**사가 */
function* getImageSaga(action) {
  try {
    yield call(imagesAPI.getImage, action.payload);
  } catch (e) {
    console.log(e);
  }
}
const createImagesSaga = createRequestSaga(
  CREATE_IMAGES,
  imagesAPI.createImages
);
function* deleteImageSaga(action) {
  try {
    yield call(imagesAPI.deleteImage, action.payload);
  } catch (e) {
    console.log(e);
  }
}

export function* imagesSaga() {
  yield takeLatest(GET_IMAGE, getImageSaga);
  yield takeLatest(CREATE_IMAGES, createImagesSaga);
  yield takeLatest(DELETE_IMAGE, deleteImageSaga);
}

const initialState = {
  image: null,
  images: [],
  error: null,
};

export default handleActions(
  {
    [GET_IMAGE_SUCCESS]: (state, { payload: image }) => ({
      ...state,
      image,
    }),
    [GET_IMAGE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [CREATE_IMAGES_SUCCESS]: (state, { payload: images }) => ({
      ...state,
      images,
    }),
    [CREATE_IMAGES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SET_IMAGES]: (state, { payload: images }) => ({
      ...state,
      images,
    }),
  },
  initialState
);
