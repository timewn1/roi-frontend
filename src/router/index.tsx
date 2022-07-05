import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import PrivateRoute from "./privateRouter";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
        <PrivateRoute exact path="/content" component={lazy(() => import("../pages/Content"))} />
        <PrivateRoute exact path="/dashboard" component={lazy(() => import("../pages/Dashboard"))} />
        <PrivateRoute exact path="/buy" component={lazy(() => import("../pages/Buy"))} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
