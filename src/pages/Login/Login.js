import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import UseFirebase from "../hooks/UseFirebase";
import initializeAuthentication from "../hooks/firebase.init";

initializeAuthentication();

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const auth = getAuth();
  const { user, googleSignIn, setUser } = UseFirebase();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // setUser(result.user);
      history.push(redirect_uri);
    });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if (e.target.value.length < 6) {
      console.error("password must need to be at least 6 characters");
      return;
    } else {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        history.push(redirect_uri);
        console.log(result.user);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="row">
      <div className="col-md-7">
        <img src="https://i.ibb.co/GPB7b8K/img-03.jpg" alt="" />
      </div>
      <div className="col-md-4">
        <h2>LOGIN:</h2>
        <p>
          Savings of up to 15% with our car rental solutions, global coverage
          and a dedicated customer team
        </p>
        <p>
          Log In or
          <Link style={{ textDecoration: "none" }} to="/register">
            <span className="cs-p">Create an Account?</span>
          </Link>
        </p>
        <form onSubmit={handleOnSubmit}>
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <br />
          <input
            onChange={handlePasswordChange}
            name="password"
            type="password"
            placeholder="Enter your Password"
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
      <p>Or</p>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
};

export default Login;
