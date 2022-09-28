import React from "react";
import { Routes, Route } from "react-router-dom";
import ResponsiveNavBar from "./Components/navigationBar/ResponsiveNavBar";
import InfoAboveNavBar from "./Components/navigationBar/InfoAboveNavBar";
import Home from "./Components/pages/home/home";
import Footer from "./Components/footer/Footer";
import About from "./Components/pages/about/About";
import Projects from "./Components/pages/projects/Projects";
import Services from "./Components/pages/services/Services";
import Contact from "./Components/pages/contact/Contact";
import News from "./Components/pages/news/News";
import PageNotFound from "../PageNotFound/PageNotFound";

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
        <Route exact path="/news" element={<News />} />
        <Route exact path="/aboutus" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contactus" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default ClientsRoute;
