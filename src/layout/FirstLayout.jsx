import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const FirstLayout = () => {
  return (
    <div>
      <div className="flex flex-row h-screen ">
        <header className="w-[260px] bg-red-800">
          <div>
            <Sidebar />
          </div>
        </header>
        <div className="flex flex-col w-full">
          <div className="h-16 bg-purple-500">
            <Navbar />
          </div>
          <main className="bg-blue-900 h-full">
            <div>{<Outlet />}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FirstLayout;
