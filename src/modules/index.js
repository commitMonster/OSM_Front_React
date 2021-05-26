import { combineReducers } from "redux";
import products, { productsSaga } from "./products";
import product, { productSaga } from "./product";
import user, { userSaga } from "./user";
import auth, { authSaga } from "./auth";
import banner, { bannerSaga } from "./banner";
import loading from "./loading";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  products,
  product,
  user,
  banner,
  auth,
  loading,
});
export function* rootSaga() {
  yield all([
    productsSaga(),
    authSaga(),
    bannerSaga(),
    productSaga(),
    userSaga(),
  ]);
}

export default rootReducer;
