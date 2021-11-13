import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "@firebase/auth";
import React, { useState } from "react";
import { useHistory } from "react-router";
import UseAuth from "../hooks/UseAuth";

const Register = () => {
  const { setName, updateName, name } = UseAuth();
  const history = useHistory();
  const auth = getAuth();
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
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Save User to the Database
        saveUser(email, name);
        // Send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => setError(error.message));
    history.replace("/");
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const saveUser = (email, displayName) => {
    const user = { email, displayName };
    fetch("https://rocky-brushlands-20414.herokuapp.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    }).then();
  };
  return (
    <div>
      <h2>Please Register</h2>
      <div className="row mt-5">
        <div className="col-md-7">
          <img
            className="h-75"
            src="https://i.ibb.co/zJWxSmv/sign-concept-illustration-114360-125.jpg "
            alt=""
          />
        </div>
        <div className="col-md-4 mt-3">
          <form onSubmit={handleOnSubmit}>
            <input
              className="p-2 mt-3"
              onChange={handleNameChange}
              name="name"
              placeholder="Enter Your Name"
              type="text"
              required
            />
            <br />
            <input
              className="p-2 mt-3"
              onChange={handleEmailChange}
              name="email"
              type="email"
              placeholder="Enter Your Email"
            ></input>
            <br />
            <input
              className="p-2 mt-3"
              onChange={handlePasswordChange}
              type="password"
              name="password"
              placeholder="Enter your Password"
              required
            />
            <br />
            <input className="mt-3" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
