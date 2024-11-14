import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const FirstLayout = () => {
  return (
    <div>
      <div className="flex flex-row h-screen ">
        <header className=" ">
          <div>
            <Sidebar />
          </div>
        </header>
        <hr className="text-blck shadow-md" />
        <div className="flex flex-col w-full">
          <div className="h-16 ">
            <Navbar />
          </div>
          <main className=" h-full">
            <div>{<Outlet />}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FirstLayout;
