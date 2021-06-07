import { Link } from "react-router-dom";
import { AppBar, Box, IconButton, Toolbar } from "@material-ui/core";
import InputIcon from "@material-ui/icons/Input";
import Logo from "./Logo";

const DashboardNavbar = ({ onLogout }) => {
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Link to="/admin">
          <Logo />
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={onLogout}>
          <InputIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
