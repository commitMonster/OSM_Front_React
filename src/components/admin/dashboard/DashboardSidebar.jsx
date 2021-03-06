import { Box, Divider, Drawer, List } from "@material-ui/core";
import {
  ShoppingBag as ShoppingBagIcon,
  Users as UsersIcon,
} from "react-feather";
import NavItem from "./NavItem";
import AssignmentIcon from "@material-ui/icons/Assignment";

const items = [
  {
    href: "/admin/productList",
    icon: UsersIcon,
    title: "상품목록",
  },
  {
    href: "/admin/bannerList",
    icon: ShoppingBagIcon,
    title: "공지/이벤트목록",
  },
  {
    href: "/admin/orderList",
    icon: AssignmentIcon,
    title: "주문내역",
  },
];

const DashboardSidebar = () => {
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
    </Drawer>
  );
};

export default DashboardSidebar;
