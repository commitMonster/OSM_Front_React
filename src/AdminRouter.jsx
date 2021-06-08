import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Router, useHistory } from "react-router-dom";
import BannerPage from "./pages/admin/BannerPage";
import BannerListPage from "./pages/admin/BannerListPage";
import EditBannerPage from "./pages/admin/EditBannerPage";
import AdminMainPage from "./pages/admin/AdminMainPage";
import ProductPage from "./pages/admin/ProductPage";
import ProductListPage from "./pages/admin/ProductListPage";
import EditProductPage from "./pages/admin/EditProductPage";
import OrderListPage from "./pages/admin/OrderListPage";

const AdminRoute = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user && !user.isAdmin) {
      alert("접근이 불가능합니다.");
      history.push("/");
    }
  }, [dispatch, user, history]);

  return (
    <>
      <Route path="/admin" exact component={AdminMainPage} />
      <Route path="/admin/bannerList" component={BannerListPage} />
      <Route path="/admin/banner/:id" component={BannerPage} />
      <Route path="/admin/editBanner" component={EditBannerPage} />
      <Route path="/admin/productList" component={ProductListPage} />
      <Route path="/admin/product/:id" component={ProductPage} />
      <Route path="/admin/editProduct" component={EditProductPage} />
      <Route path="/admin/orderList" component={OrderListPage} />
    </>
  );
};

export default AdminRoute;
