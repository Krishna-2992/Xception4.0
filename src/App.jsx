import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Merchandise from "./pages/Merchandise";
import Events from "./pages/Events";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import PuruNavbar from "./components/PuruNavbar";
import Gallery from "./pages/Gallery";

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
      <BrowserRouter>
        <PuruNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Merchandise" element={<Merchandise />} />
          {/* <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Team" element={<Team />} /> */}
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>

      {/* <RouterProvider router={router} /> */}
      {/* <Home /> */}
      {/* <Merchandise /> */}
      {/* <Events /> */}
      {/* <Technical /> */}
      {/* <Timer/> */}
    </div>
  );
}
