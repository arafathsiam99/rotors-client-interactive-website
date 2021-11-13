import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddCar from "./pages/AddCar/AddCar";
import Booking from "./pages/Booking/Booking";
import AuthProvider from "./pages/Contexts/AuthProvider";
import DashBoard from "./pages/DashBoard/DashBoard";
import ExploreMore from "./pages/ExploreMore/ExploreMore";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import MakeAdmin from "./pages/MakeAdmin/MakeAdmin";
import ManageAllBooking from "./pages/ManageAllBooking/ManageAllBooking";
import ManageCars from "./pages/ManageCars/ManageCars";
import MyOrders from "./pages/MyOrders/MyOrders";
import Navigation from "./pages/Navigation/Navigation";
import Pay from "./pages/Pay/Pay";
import Register from "./pages/Register/Register";
import Review from "./pages/AddReview/AddReview";
import AddReview from "./pages/AddReview/AddReview";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route exact path="/exploremore">
              <ExploreMore></ExploreMore>
            </Route>
            <Route exact path="/pay">
              <Pay></Pay>
            </Route>
            <Route exact path="/review">
              <Review></Review>
            </Route>
            <PrivateRoute exact path="/manageallbooking">
              <ManageAllBooking></ManageAllBooking>
            </PrivateRoute>
            <PrivateRoute exact path="/managecars">
              <ManageCars></ManageCars>
            </PrivateRoute>
            <PrivateRoute exact path="/addreview">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute exact path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/addcar">
              <AddCar></AddCar>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
