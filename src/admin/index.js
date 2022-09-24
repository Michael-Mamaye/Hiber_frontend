// import react from "react";
import { ProtectedRoute } from "./routes/ProtectedRoute";
// import AuthenticationRoute from './routes/AuthenticationRoute'
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SideBarMenu from "./components/navigation/SideBarMenu";

const Admins = () => {
  const routes = [];
  return (
    <>
      <SideBarMenu />
      <Routes>
        <Route
          exact
          path="/admin/dashboard"
          element={<ProtectedRoute component={Dashboard} />}
        />
      </Routes>
    </>
  );
};

export default Admins;
