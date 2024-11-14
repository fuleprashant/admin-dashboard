import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const FirstLayout = () => {
  return (
    <div>
      <div className="flex flex-row h-screen ">
        <header className="border-r-2 border-black shadow-sm">
          <div>
            <Sidebar />
          </div>
        </header>
        <br className="text-black shadow-md" />
        <div className="flex flex-col w-full">
          <div className="h-16 flex justify-center items-center">
            <Navbar />
          </div>
          <hr className="border-r-2 border-black shadow-sm" />
          <main className=" h-full">
            <div>{<Outlet />}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FirstLayout;
