// import react from "react";
import { ProtectedRoute } from "./routes/ProtectedRoute";
// import AuthenticationRoute from './routes/AuthenticationRoute'
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SideBarMenu from "./components/navigation/SideBarMenu";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import News from "./components/news/News";
import Emails from "./components/emails/Emails";
import PageNotFound from "../PageNotFound/PageNotFound";
import Users from "./components/users/Users";

const Admins = () => {
  return (
    <>
      <SideBarMenu />
      <Routes>
        <Route
          exact
          path="/dashboard"
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route
          exact
          path="/users"
          element={<ProtectedRoute component={Users} />}
        />
        <Route
          exact
          path="/services"
          element={<ProtectedRoute component={Services} />}
        />
        <Route
          exact
          path="/projects"
          element={<ProtectedRoute component={Projects} />}
        />
        <Route
          exact
          path="/news"
          element={<ProtectedRoute component={News} />}
        />
        <Route
          exact
          path="/emails"
          element={<ProtectedRoute component={Emails} />}
        />
        <Route
          exact
          path="*"
          element={<ProtectedRoute component={PageNotFound} />}
        />
      </Routes>
    </>
  );
};

export default Admins;
