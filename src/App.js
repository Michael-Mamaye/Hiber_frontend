import "./App.css";
import Admins from "./admin";
import Clients from "./client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Admins />} />
        <Route path="*" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
