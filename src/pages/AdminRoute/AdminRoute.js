import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import UseAuth from "../hooks/UseAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = UseAuth();
  if (isLoading) {
    return <Spinner animation="border" variant="warning" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;
