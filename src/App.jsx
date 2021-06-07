import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MarketPage from "./pages/MarketPage";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { check } from "./modules/user";
import BasketPage from "./pages/BasketPage";
import AdminRouter from "./AdminRouter";
import OrderPage from "./pages/order/OrderPage";
import OrderSuccessPage from "./pages/order/OrderSuccessPage";
import OrderHistoryPage from "./pages/mypage/OrderHistoryPage";
import DestinationListPage from "./pages/mypage/DestinationListPage";
function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(check());
  }, [dispath]);

  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route path="/signin" component={SigninPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/market" component={MarketPage} />
      <Route path="/basket" component={BasketPage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/admin" component={AdminRouter} />
      <Route path="/order" component={OrderPage} />
      <Route path="/orderSuccess" component={OrderSuccessPage} />
      <Route path={"/mypage/orderHistory"} component={OrderHistoryPage} />
      <Route path="/mypage/destination" component={DestinationListPage} />
    </>
  );
}

export default App;
