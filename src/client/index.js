import { Routes, Route } from "react-router-dom";
import ResponsiveNavBar from "./Components/navigationBar/ResponsiveNavBar";
import WebNavigation from "./Components/navigationBar/webNavigation";

import Home from "./Components/pages/home";
const Clients = () => {
  return (
    <>
      <WebNavigation />
      <ResponsiveNavBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Clients;
