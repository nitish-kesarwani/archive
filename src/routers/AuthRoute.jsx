import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { RouteConstant } from "../constants";
import { LoginView } from "../login/LoginView";
import { HomeView } from "../home/HomeView";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path={RouteConstant.login} element={<LoginView />} />
      <Route exact path="/" element={<PrivateRoute />}>
        <Route exact path={RouteConstant.home} element={<HomeView />} />
      </Route>
    </Routes>
  );
};
export default AuthRoute;
