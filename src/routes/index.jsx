import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SingnUp";
import { Route } from "./Route";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import LandingPage from "../pages/LandingPage";
import { Vaccines } from "../pages/Vaccines";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/vaccines" component={Vaccines} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}

export default Routes;
