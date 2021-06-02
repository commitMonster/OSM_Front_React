import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import Logo from "./Logo";

const MainNavbar = (props) => (
  <AppBar >
    <Toolbar sx={{ height: 64 }}>
      <Link to="/admin">
        <Logo />
      </Link>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
