import { Routes, Route } from "react-router-dom";
import DrawerAppBar from "./Components/navigationBar/testApp";
import WebNavigation from "./Components/navigationBar/webNavigation";

import Home from "./Components/pages/home";
const Clients = () => {
  return (
    <>
      <WebNavigation />
      <DrawerAppBar />
      <Routes>
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default Clients;
