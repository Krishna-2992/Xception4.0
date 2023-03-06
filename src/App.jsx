import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Merchandise from "./pages/Merchandise";
import Sponsors from "./pages/Sponsors";
import Events from "./pages/Events";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
// import PuruNavbar from "./components/PuruNavbar";
import Gallery from "./pages/Gallery";
import Team from "./components/team/Team";
import TeamDetails from "./components/team/TeamDetails";
import Navbar from "./components/Navbar";
import PuruNavbar from "./components/PuruNavbar";

export default function App() {
  return (
    <div className="gradient-bg-welcome h-full md:h-screen ">
      <BrowserRouter>
        <PuruNavbar />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Merchandise" element={<Merchandise />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teamdetails" element={<TeamDetails />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Sponsors" element={<Sponsors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
