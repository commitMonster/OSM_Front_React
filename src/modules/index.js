import { combineReducers } from "redux";
import products, { productsSaga } from "./products";
import user, { userSaga } from "./user";
import auth, { authSaga } from "./auth";
import basket, { basketSaga } from "./basket";
import loading from "./loading";
import { all } from "redux-saga/effects";
import banners, { bannersSaga } from "./banners";
import images, { imagesSaga } from "./images";
import write, { writeSaga } from "./write";
import order, { orderSaga } from "./order";
import destination, { destinationSaga } from "./destination";

const rootReducer = combineReducers({
  products,
  banners,
  auth,
  user,
  basket,
  images,
  loading,
  write,
  order,
  destination,
});
export function* rootSaga() {
  yield all([
    productsSaga(),
    bannersSaga(),
    authSaga(),
    userSaga(),
    basketSaga(),
    imagesSaga(),
    writeSaga(),
    orderSaga(),
    destinationSaga(),
  ]);
}

export default rootReducer;
