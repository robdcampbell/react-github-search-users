import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  // isAuthenticated not working!!!
  // STILL IN PRODUCTION; TEMPORARILY DISABLING THE LOGIN
  const isUser = true;
  //isAuthenicated && user;

  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Redirect to="/login"></Redirect>;
      }}
    ></Route>
  );
};
export default PrivateRoute;
