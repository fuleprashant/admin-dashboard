import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ErrorPage from "./pages/ErrorPage";
import FirstLayout from "./layout/FirstLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <FirstLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
