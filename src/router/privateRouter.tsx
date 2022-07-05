import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAllContext } from '../contexts';

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const [state] = useAllContext();
  return (
    <Route
      {...rest}
      render={props =>
        state.isAuthenticated === true ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
};

export default PrivateRoute;
