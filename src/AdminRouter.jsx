import React, { useEffect, useState } from "react";
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
import { check } from "./modules/user";

const AdminRoute = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user, success } = useSelector((state) => state.user);
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    dispatch(check());
  }, [dispatch]);

  useEffect(() => {
    if (!loading || !success) return;
    if (!user) {
      history.push("/");
      alert("접근이 불가능합니다.");
    }
    if (user && !user.isAdmin) {
      history.push("/");
      alert("접근이 불가능합니다.");
    }
    setLoading(false);
  }, [dispatch, user, history, success]);

  if (loading) return null;

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
