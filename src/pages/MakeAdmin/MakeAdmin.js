import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://rocky-brushlands-20414.herokuapp.com/users/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an admin</h2>
      <div className="w-50 m-auto">
        <form onSubmit={handleAdminSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onBlur={handleOnBlur}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Make Admin
          </Button>
        </form>
        <br />
        {success && <Alert severity="success">Made admin successfully</Alert>}
      </div>
    </div>
  );
};

export default MakeAdmin;
