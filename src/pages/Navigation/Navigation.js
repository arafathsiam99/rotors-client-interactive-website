import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import "./Navigation.css";
const Navigation = () => {
  const { user, logOut } = UseAuth();
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <img src="https://i.ibb.co/0J7nC15/logo-02-1x.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto  my-2 my-lg-0">
              <NavLink className="custom-link" to="/home">
                Home
              </NavLink>
              {user?.email && (
                <NavLink className="custom-link" to="/dashboard">
                  Dashboard
                </NavLink>
              )}
              <NavLink className="custom-link" to="/exploremore">
                Explore More
              </NavLink>
              {!user?.email ? (
                <NavLink className="custom-link" to="/login">
                  Login
                </NavLink>
              ) : (
                <button
                  className="btn btn-sm btn-danger"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              )}
              {user.email && <Navbar.Text>{user.email}</Navbar.Text>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
