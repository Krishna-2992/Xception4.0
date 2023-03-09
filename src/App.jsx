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
import PuruNavbar from "./components/PuruNavbar";
import EventDetails from "./pages/EventDetails";
import AboutUs from "./pages/AboutUs";
import Schedule from "./pages/Scheduls";

export default function App() {
  return (
    <div className="  ">
      <BrowserRouter>
        {/* <PuruNavbar /> */}
        {/* <vikashNavbar /> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home active="Home" />} />
          <Route path="/events" element={<Events active="Events" />} />
          <Route
            path="/merchandise"
            element={<Merchandise active="Merchandise" />}
          />
          <Route path="/team" element={<Team active="Team" />} />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/schedule" element={<Schedule active="Schedule" />} />
          <Route path="/teamdetails" element={<TeamDetails />} />
          <Route path="/gallery" element={<Gallery active="Gallery" />} />
          <Route path="/sponsors" element={<Sponsors active="Sponsors" />} />
          <Route path="/about" element={<AboutUs active="About" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
