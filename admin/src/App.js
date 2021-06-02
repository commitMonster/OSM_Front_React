import "react-perfect-scrollbar/dist/css/styles.css";
import { Route, Router } from "react-router-dom";
// import { ThemeProvider } from "@material-ui/core";
// import GlobalStyles from "../src/commons/admin/admin-necessary/GlobalStyles";
// import MainLayout from "./commons/MainLayout";
// import theme from "./theme";
import AdminRoute from "./AdminRoute";

const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    // <GlobalStyles />
    <Route path="/admin" component={AdminRoute} />
    // </ThemeProvider>
  );
};

export default App;
