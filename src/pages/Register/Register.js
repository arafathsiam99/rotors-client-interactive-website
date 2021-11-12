import {
  createUserWithEmailAndPassword,
  getAuth,
  verifyBeforeUpdateEmail,
} from "@firebase/auth";
import React, { useState } from "react";
import UseAuth from "../hooks/UseAuth";

const Register = () => {
  const { setUser, setName, updateName } = UseAuth();
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
        console.log(result.user);
        verifyBeforeUpdateEmail();
      })
      .catch((error) => setError(error.message));
    updateName();
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h2>Please Register</h2>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            onChange={handleEmailChange}
            name="email"
            placeholder="Enter Your Email"
            type="email"
            required
          />
          <br />
          <input
            onChange={handleNameChange}
            name="name"
            type="text"
            placeholder="Enter Your Name"
          ></input>
          <br />
          <input
            onChange={handlePasswordChange}
            type="password"
            name="password"
            placeholder="Enter your Password"
            required
          />
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
