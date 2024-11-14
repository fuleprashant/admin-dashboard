import React from "react";
import { RxBarChart } from "react-icons/rx";
import { FaShoppingBag, FaRupeeSign, FaShoppingCart } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { IoMdTrendingUp } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoReorderThree } from "react-icons/io5";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: RxBarChart,
    color: "#0000FF",
    path: "/",
  },
  {
    name: "Products",
    icon: FaShoppingBag,
    path: "/products",
    color: "#9d00ff",
  },
  {
    name: "Users",
    icon: LuUsers,
    path: "/users",
    color: "#FFC0CB",
  },
  {
    name: "Sales",
    icon: IoMdTrendingUp,
    path: "/sales",
    color: "#008000",
  },
  {
    name: "Orders",
    icon: FaShoppingCart,
    path: "/orders",
    color: "#FFFF00",
  },
  {
    name: "Analytics",
    icon: FaRupeeSign,
    path: "/anaylitics",
    color: "#FFA500",
  },
  {
    name: "Settings",
    icon: CiSettings,
    path: "/settings",
    color: "#FFA500",
  },
];
const Sidebar = () => {
  return <div>This is teh sidebar</div>;
};

export default Sidebar;
