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
  console.log(admin);
  let { path, url } = useRouteMatch();

  return (
    <div>
      <div className=" d-flex justify-content-center flex-wrap ">
        {!admin && (
          <div className=" d-flex flex-wrap">
            <Link to={`${url}/myorders`}>
              <Button className="mt-3 mx-1">My Orders</Button>
            </Link>
            <Link to={`${url}/pay`}>
              <Button className="mt-3 mx-1">Pay Here</Button>
            </Link>
            <Link to={`${url}/addreview`}>
              <Button className="mt-3 mx-1">Add Review</Button>
            </Link>
          </div>
        )}
        <br />
        {admin && (
          <div className=" d-flex flex-wrap">
            <Link to={`${url}/makeadmin`}>
              <Button className="mt-3 mx-1">Make Admin</Button>
            </Link>
            <br />
            <Link to={`${url}/addcar`}>
              <Button className="mt-3 mx-1">Add Car</Button>
            </Link>
            <br />
            <Link to={`${url}/manageallbooking`}>
              <Button className="mt-3 mx-1">Manage All Booking</Button>
            </Link>
            <br />
            <Link to={`${url}/managecars`}>
              <Button className="mt-3 mx-1">Manage Cars</Button>
            </Link>
          </div>
        )}
        <Button onClick={() => logOut()} className="mt-3 mx-1 custom-btn">
          Log Out
        </Button>
      </div>
      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
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
        <Route path={`${path}/myorders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/addreview`}>
          <AddReview></AddReview>
        </Route>
      </Switch>
    </div>
  );
};

export default DashBoard;
