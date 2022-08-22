import React from "react";
import { Routes, Route } from "react-router-dom";
import ResponsiveNavBar from "./Components/navigationBar/ResponsiveNavBar";
import InfoAboveNavBar from "./Components/navigationBar/InfoAboveNavBar";
import Home from "./Components/pages/home/home";
import Footer from "./Components/footer/Footer";
import About from "./Components/pages/about/About";
import Projects from "./Components/pages/projects/Projects";
import { Feedback } from "@mui/icons-material";
import Services from "./Components/pages/services/Services";

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
        <Route exact path="/aboutus" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contactus" element={<Home />} />
        <Route exact path="/feedbacks" element={<Feedback />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </>
  );
};

export default ClientsRoute;
