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

export default function App() {
  return (
    <div className=" h-full md:h-screen ">
      <BrowserRouter>
        <PuruNavbar />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/team" element={<Team />} />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/teamdetails" element={<TeamDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
