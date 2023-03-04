import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PuruNavbar from "./components/PuruNavbar";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PuruNavbar />
    {/* <Navbar /> */}
    <App />
  </React.StrictMode>
);
