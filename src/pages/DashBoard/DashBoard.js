import React from "react";
import { Button } from "react-bootstrap";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddCar from "../AddCar/AddCar";
import AdminRoute from "../AdminRoute/AdminRoute";
import UseAuth from "../hooks/UseAuth";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllBooking from "../ManageAllBooking/ManageAllBooking";
import ManageCars from "../ManageCars/ManageCars";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import AddReview from "../AddReview/AddReview";

const DashBoard = () => {
  const { admin, logOut } = UseAuth();

  let { path, url } = useRouteMatch();

  return (
    <div className="row">
      <div className="col-md-2">
        <Link to={`${url}`}>
          <Button className="mt-3">Dashboard</Button>
        </Link>
        <br />
        <Link to={`${url}/myorders`}>
          <Button className="mt-3">My Orders</Button>
        </Link>
        <br />
        {admin && (
          <div>
            <Link to={`${url}/pay`}>
              <Button className="mt-3">Pay Here</Button>
            </Link>
            <br />
            <Link to={`${url}/makeadmin`}>
              <Button className="mt-3">Make Admin</Button>
            </Link>
            <br />
            <Link to={`${url}/addcar`}>
              <Button className="mt-3">Add Car</Button>
            </Link>
            <br />
            <Link to={`${url}/manageallbooking`}>
              <Button className="mt-3">Manage All Booking</Button>
            </Link>
            <br />
            <Link to={`${url}/managecars`}>
              <Button className="mt-3">Manage Cars</Button>
            </Link>
            <br />
            <Link to={`${url}/myorders`}>
              <Button className="mt-3">My Orders</Button>
            </Link>
            <br />
            <Link to={`${url}/addreview`}>
              <Button className="mt-3">Add Review</Button>
            </Link>
          </div>
        )}
      </div>
      <div className="col-md-10">{/* <MyOrders></MyOrders> */}</div>
      <Switch>
        <Route exact path={path}></Route>
        <AdminRoute path={`${path}/pay`}>
          <Pay></Pay>
        </AdminRoute>
        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addcar`}>
          <AddCar></AddCar>
        </AdminRoute>
        <AdminRoute path={`${path}/manageallbooking`}>
          <ManageAllBooking></ManageAllBooking>
        </AdminRoute>
        <AdminRoute path={`${path}/managecars`}>
          <ManageCars></ManageCars>
        </AdminRoute>
        <AdminRoute path={`${path}/myorders`}>
          <MyOrders></MyOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/addreview`}>
          <AddReview></AddReview>
        </AdminRoute>
      </Switch>
    </div>
  );
};

export default DashBoard;
