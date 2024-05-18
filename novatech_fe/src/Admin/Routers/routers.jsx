import {
  HomeIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import Home from "../DashBoard/Home";
import SignUp from "../../User/Auth/Signup";
import ManageProduct from "../DashBoard/ManageProduct";
import ManageOrder from "../DashBoard/ManageOrder";
import ManageInventor from "../DashBoard/ManageInventor";

import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { ManageUser } from "../DashBoard/ManageUser";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Trang chủ",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <CategoryIcon {...icon} />,
        name: "Quản Lý Sản Phẩm",
        path: "/products",
        element: <ManageProduct />,
      },
      {
        icon: <AccountCircleIcon {...icon} />,
        name: "Quản Lý Khách Hàng",
        path: "/users",
        element: <ManageUser />,
      },
      {
        icon: <LocalShippingIcon {...icon} />,
        name: "Quản Lý Đơn Hàng",
        path: "/orders",
        element: <ManageOrder />,
      },
      {
        icon: <InventoryIcon {...icon} />,
        name: "Quản Lý Kho",
        path: "/inventor",
        element: <ManageInventor />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "Đăng Xuất",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
