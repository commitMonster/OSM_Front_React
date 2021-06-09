import { createAction, handleActions } from "redux-actions";
import { call, takeLatest } from "redux-saga/effects";
import * as authAPI from "../lib/api/auth";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] =
  createRequestActionTypes("user/CHECK");
const SIGNOUT = "user/SIGNOUT";
const INITIAL_USER = "user/INITIAL_USER";

export const check = createAction(CHECK);
export const signout = createAction(SIGNOUT);
export const initialUser = createAction(INITIAL_USER);

const checkSaga = createRequestSaga(CHECK, authAPI.userCheck);
function checkFailureSaga() {
  try {
    localStorage.removeItem("user"); // localStorage에서 user를 제거
  } catch (e) {
    console.log("localStorage is not working");
  }
}
function* signoutSaga() {
  try {
    yield call(authAPI.signout);
    localStorage.removeItem("user");
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(signout, signoutSaga);
}

const initialState = {
  user: null,
  count: 0,
  checkError: null,
  success: null,
};

export default handleActions(
  {
    [INITIAL_USER]: (state) => initialState,
    [CHECK]: (state) => ({
      ...state,
      success: false,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user: user.user,
      count: user.count,
      checkError: null,
      success: true,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
      success: true,
    }),
    [SIGNOUT]: (state) => ({
      ...state,
      user: null,
    }),
  },
  initialState
);
