// import react from "react";
// import ProtectedRoute from './routes/ProtectedRoute'
// import AuthenticationRoute from './routes/AuthenticationRoute'
import { Route, Routes} from "react-router-dom";
const Admins = () => {
  return (
    <Routes>
      <Route/>
      {/* <ProtectedRoute exact path="/login" element={<div>Hello ADMIN MIKE</div>} />
      <AuthenticationRoute exact path="/dashboard" element={<div>Hello dashboard</div>} /> */}
    </Routes>
  );
};

export default Admins;
