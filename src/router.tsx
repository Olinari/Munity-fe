import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ConnectAgent from "@/pages/admin/connectivity";
import Dashboard from "@/pages/dashboard";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/connect-agent",
      element: <ConnectAgent />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default Router;
