import React from "react";
// router
import {
  useRoutes,
  Navigate,
  // Outlet,
} from "react-router-dom";
// layouts
import Testlayout from "../layouts/testlayout";
// pages
import Page1 from "../pages/page1";
import TransactionId from "../pages/transactionId";
// ------------------------ //
function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Testlayout />,
      children: [
        {
          path: "",
          element: <Navigate to='transaction' />,
        },
        {
          path: "transaction",
          element: <Page1 />,
        },
        {
          path: "transaction/:id",
          element: <TransactionId />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>404 page</h1>,
    },
  ]);
}

export default Router;
