import "./App.css";
// import Admins from "./admin";
import Clients from "./client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* this for the client page */}
        <Route exact path="/services" element={<Clients />} />
        <Route exact path="/aboutus" element={<Clients />} />
        <Route exact path="/products" element={<Clients />} />
        <Route exact path="/contacts" element={<Clients />} />
        <Route exact path="/feedbacks" element={<Clients />} />

        {/* for the admin dashboard  */}
        <Route exact path="*" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
