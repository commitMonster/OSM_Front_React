import { Route } from "react-router-dom";
import LoginPage from "./pages/SigninPage";
import MainPage from "./pages/MainPage";
import MarketPage from "./pages/MarketPage";
import ProductPage from "./pages/ProductPage";
import SignupPage from "./pages/SignupPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { check } from "./modules/user";
import { Helmet } from "react-helmet-async";

function App() {
  const dispath = useDispatch();

  useEffect(() => {
    dispath(check());
  }, [dispath]);

  return (
    <>
      <Helmet>
        <title>EC</title>
      </Helmet>
      <Route exact path="/" component={MainPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/market" component={MarketPage} />
      <Route path="/product/:id" component={ProductPage} />
    </>
  );
}

export default App;
