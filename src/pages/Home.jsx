import React from "react";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timer from "../components/Timer";
export default function Home() {
  return (
    <div>
      {/* <Navbar active="Home"/> */}
      <Background />
      <Timer />
      <Footer />
    </div>
  );
}
