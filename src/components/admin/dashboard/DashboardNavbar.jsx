import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Badge,
  Box,
  Hidden,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import Logo from "./Logo";

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const [notifications] = useState([]);

  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar>
        <RouterLink to="/admin">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <RouterLink to="/admin">
          <IconButton color="">
            <InputIcon />
          </IconButton>
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
