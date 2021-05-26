import { createAction, handleActions } from "redux-actions";
import { call, put, takeLatest } from "redux-saga/effects";
import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/utils/createRequestSaga";
import * as authAPI from "../lib/api/auth";

const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] =
  createRequestActionTypes("auth/SIGNUP");
const [SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE] =
  createRequestActionTypes("auth/SIGNIN");
const CHECK_ID = "auth/CHECK_ID";
const CHECK_EMAIL = "auth/CHECK_EMAIL";

export const signup = createAction(
  SIGNUP,
  ({ userId, name, email, password }) => ({
    userId,
    name,
    email,
    password,
  })
);
export const signin = createAction(SIGNIN, ({ userId, password }) => ({
  userId,
  password,
}));
export const checkId = createAction(CHECK_ID, (userId) => userId);
export const checkEmail = createAction(CHECK_EMAIL, (email) => email);

// 사가 생성
const signupSaga = createRequestSaga(SIGNUP, authAPI.signup);
const signinSaga = createRequestSaga(SIGNIN, authAPI.signin);
function* checkIdSaga(action) {
  try {
    const response = yield call(authAPI.duplicationCheck, {
      type: "userId",
      payload: action.payload,
    });
    yield put({
      type: CHECK_ID,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
}
function* checkEmailSaga(action) {
  try {
    const response = yield call(authAPI.duplicationCheck, {
      type: "email",
      payload: action.payload,
    });
    yield put({
      type: CHECK_EMAIL,
      payload: response.data,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* authSaga() {
  yield takeLatest(SIGNUP, signupSaga);
  yield takeLatest(SIGNIN, signinSaga);
  yield takeLatest(CHECK_ID, checkIdSaga);
  yield takeLatest(CHECK_EMAIL, checkEmailSaga);
}

const initalState = {
  siginup: {
    username: "",
    password: "",
    passwordContirm: "",
  },
  siginin: {
    username: "",
    password: "",
  },
  auth: null,
  authError: null,
  idCheck: null,
  emailCheck: null,
};

const auth = handleActions(
  {
    [SIGNUP_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNUP_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [SIGNIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    [SIGNIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [CHECK_ID]: (state, { payload: data }) => ({
      ...state,
      idCheck: data.isDuplicated,
    }),
    [CHECK_EMAIL]: (state, { payload: data }) => ({
      ...state,
      emailCheck: data.isDuplicated,
    }),
  },
  initalState
);

export default auth;
