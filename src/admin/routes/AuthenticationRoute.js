import { Route } from "react-router-dom";


const AuthenticationRoute = (props) => {
  return <Route exact path={props.path} element={props.component} />;
};

export default AuthenticationRoute;
