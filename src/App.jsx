import { Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MarketPage from "./pages/MarketPage";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { check } from "./modules/user";
import { Helmet } from "react-helmet-async";
import BasketPage from "./pages/BasketPage";
import AdminRouter from "./AdminRouter";
function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(check());
  }, [dispath]);

  return (
    <>
      <Helmet>
        <title>EC몰</title>
      </Helmet>
      <Route exact path="/" component={MainPage} />
      <Route path="/signin" component={SigninPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/market" component={MarketPage} />
      <Route path="/basket" component={BasketPage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route path="/admin" component={AdminRouter} />
    </>
  );
}

export default App;
