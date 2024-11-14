// import React, { useState } from "react";
// import { RxBarChart } from "react-icons/rx";
// import { FaShoppingBag, FaRupeeSign, FaShoppingCart } from "react-icons/fa";
// import { LuUsers } from "react-icons/lu";
// import { IoMdTrendingUp } from "react-icons/io";
// import { CiSettings } from "react-icons/ci";
// import { IoReorderThree } from "react-icons/io5";

// const SIDEBAR_ITEMS = [
//   {
//     name: "Overview",
//     icon: RxBarChart,
//     color: "#0000FF",
//     path: "/",
//   },
//   {
//     name: "Products",
//     icon: FaShoppingBag,
//     path: "/products",
//     color: "#9d00ff",
//   },
//   {
//     name: "Users",
//     icon: LuUsers,
//     path: "/users",
//     color: "#FFC0CB",
//   },
//   {
//     name: "Sales",
//     icon: IoMdTrendingUp,
//     path: "/sales",
//     color: "#008000",
//   },
//   {
//     name: "Orders",
//     icon: FaShoppingCart,
//     path: "/orders",
//     color: "#FFFF00",
//   },
//   {
//     name: "Analytics",
//     icon: FaRupeeSign,
//     path: "/anaylitics",
//     color: "#FFA500",
//   },
//   {
//     name: "Settings",
//     icon: CiSettings,
//     path: "/settings",
//     color: "#FFA500",
//   },
// ];
// const Sidebar = () => {
//   const [isSidebarOpen, setIsSideBarOpen] = useState(true);
//   console.log(isSidebarOpen);

//   const handleSidebar = () => {
//     setIsSideBarOpen(!isSidebarOpen);
//   };
//   return (
//     <div className="w-[260px]">
//       <div className="mt-5 ml-3">
//         <button onClick={handleSidebar}>
//           <IoReorderThree size={40} />
//         </button>
//       </div>

//       <div className=" mt-12 ml-3">
//         <button>
//           <RxBarChart />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import React, { useState } from "react";
import { RxBarChart } from "react-icons/rx";
import { FaShoppingBag, FaRupeeSign, FaShoppingCart } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { IoMdTrendingUp } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoReorderThree } from "react-icons/io5";
import { NavLink } from "react-router-dom";

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
  const [isSidebarOpen, setIsSideBarOpen] = useState(true);

  // Toggle sidebar open/close state
  const handleSidebar = () => {
    setIsSideBarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isSidebarOpen ? "w-[260px]" : "w-[80px]"
      }`}
    >
      {/* Sidebar toggle button */}
      <div className="mt-5 ml-3">
        <button onClick={handleSidebar}>
          <IoReorderThree size={40} className="text-white" />
        </button>
      </div>

      {/* Sidebar content */}
      <div className="mt-12 ml-3 mr-3">
        {SIDEBAR_ITEMS.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            className="flex items-center space-x-4 p-4  hover:translate-x-3  cursor-pointer hover:bg-slate-500 rounded-lg "
          >
            <item.icon style={{ color: item.color }} size={24} />
            {isSidebarOpen && (
              <span className="text-white font-bold">{item.name}</span>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
