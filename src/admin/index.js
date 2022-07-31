import react from "react";
import { Route } from "react-router-dom";
const Admins = () => {
  return (
    <>
      <Route path="login" element={<div>Hello ADMIN MIKE</div>} />
      <Route path="dashboard" element={<div>Hello dashboard</div>} />
    </>
  );
};

export default Admins;
