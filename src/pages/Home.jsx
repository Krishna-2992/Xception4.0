import React from "react";
import Background from "../components/Background";
import Footer from "../components/Footer";
import Timer from "../components/Timer";
import PuruNavbar from "../components/PuruNavbar";
export default function Home({ active }) {
  return (
    <div>
      {/* <Navbar active="Home"/> */}
      <PuruNavbar active={active} />
      <Background />
      <Timer />

      <Footer />
    </div>
  );
}
