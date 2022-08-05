import React from "react";
import { Routes, Route } from "react-router-dom";
import ResponsiveNavBar from "./Components/navigationBar/ResponsiveNavBar";
import WebNavigation from "./Components/navigationBar/webNavigation";
import Home from "./Components/pages/home";

const Clients = () => {
  const [navPosition, setNavPosition] = React.useState("sticky");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 120) {
      setNavPosition("fixed");
    } else {
      setNavPosition("sticky");
    }
  });
  return (
    <>
      <WebNavigation />
      <ResponsiveNavBar navPosition={navPosition} />
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
      <div style={{ height: "700px" }}>llkjdsf</div>
      <div style={{ height: "700px" }}>llkjdsf</div>
    </>
  );
};

export default Clients;
