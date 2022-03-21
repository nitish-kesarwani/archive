import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { RouteConstant } from "../constants";
import { isLoggedIn } from "../utilities/auth-service.util";

const PrivateRoute = () => {
  return isLoggedIn() ? <Outlet /> : <Navigate to={RouteConstant.login} />;
};

export default PrivateRoute;
