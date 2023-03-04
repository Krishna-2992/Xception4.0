import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Merchandise from "./pages/Merchandise";
import Events from "./pages/Events";
import Technical from "./pages/Technical";
import Timer from "./components/Timer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/merchandise",
    element: <Merchandise />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Events />,
  },
]);

export default function App() {
  return (
    <div className="gradient-bg-welcome h-full md:h-screen ">
      <RouterProvider router={router} />
      {/* <Home /> */}
      {/* <Merchandise /> */}
      {/* <Events /> */}
      {/* <Technical /> */}
      {/* <Timer/> */}
    </div>
  );
}
