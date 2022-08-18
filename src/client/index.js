import React from "react";
import { Routes, Route } from "react-router-dom";
import ResponsiveNavBar from "./Components/navigationBar/ResponsiveNavBar";
import InfoAboveNavBar from "./Components/navigationBar/InfoAboveNavBar";
import Home from "./Components/pages/home/home";

const ClientsRoute = (props) => {
  const [navPosition, setNavPosition] = React.useState("sticky");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 149) {
      setNavPosition("fixed");
    } else {
      setNavPosition("sticky");
    }
  });
  return (
    <>
      <InfoAboveNavBar />
      <ResponsiveNavBar navPosition={navPosition} />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/news" element={<Home />} />
        <Route exact path="/aboutus" element={<Home />} />
        <Route exact path="/projects" element={<Home />} />
        <Route exact path="/contactus" element={<Home />} />
        <Route exact path="/feedbacks" element={<Home />} />
        <Route exact path="/services" element={<Home />} />
      </Routes>
    </>
  );
};

export default ClientsRoute;
