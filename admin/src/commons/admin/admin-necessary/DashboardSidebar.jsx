import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Divider, Drawer, List } from "@material-ui/core";
import {
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon,
} from "react-feather";
import NavItem from "./NavItem";

const items = [
  {
    href: "/admin/product",
    icon: UsersIcon,
    title: "상품목록",
  },
  {
    href: "/admin/banner",
    icon: ShoppingBagIcon,
    title: "공지/이벤트목록",
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor="left"
      open
      variant="persistent"
      PaperProps={{
        sx: {
          width: 256,
          top: 64,
          height: "calc(100% - 64px)",
        },
      }}
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
