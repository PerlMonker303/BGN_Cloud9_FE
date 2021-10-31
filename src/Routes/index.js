import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import * as appRoutes from "./appRoutes";
import Home from "../Components/Home";
import Resources from "../Components/Resources";

//Already logged users should be redirected from the Login Screen to the inspections
//Should be added after adding redux state for login
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={appRoutes.freeResources} component={Resources} />
      <Route exact path={appRoutes.home} component={Home} />
      <Route path={appRoutes.root} component={Home} />
    </Switch>
  </Router>
);

export default Routes;
