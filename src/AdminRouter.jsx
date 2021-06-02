import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Router, useHistory } from "react-router-dom";
import BannerPage from "./pages/admin/BannerPage";
import BannerListPage from "./pages/admin/BannerListPage";
import CreateBannerPage from "./pages/admin/CreateBannerPage";
import AdminMainPage from "./pages/admin/AdminMainPage";
import ProductPage from "./pages/admin/ProductPage";
import ProductListPage from "./pages/admin/ProductListPage";
import EditProductPage from "./pages/admin/EditProductPage";

const AdminRoute = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user && !user.isAdmin) {
      history.push("/");
    }
  }, [dispatch, user, history]);

  return (
    <>
      <Route path="/admin" exact component={AdminMainPage} />
      <Route path="/admin/bannerList" component={BannerListPage} />
      <Route path="/admin/banner/:id" component={BannerPage} />
      <Route path="/admin/createBanner" component={CreateBannerPage} />
      <Route path="/admin/productList" component={ProductListPage} />
      <Route path="/admin/product/:id" component={ProductPage} />
      <Route path="/admin/editProduct" component={EditProductPage} />
    </>
  );
};

export default AdminRoute;
