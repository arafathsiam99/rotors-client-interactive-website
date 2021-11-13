import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageCars.css";

const ManageCars = () => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [manageCars, setManageCars] = useState([]);

  useEffect(() => {
    fetch("https://rocky-brushlands-20414.herokuapp.com/managecars")
      .then((res) => res.json())
      .then((data) => setManageCars(data));
  }, [isDeleted]);

  const handleDeletePackage = (id) => {
    const confirm = window.confirm("Are you want to delete this car?");
    console.log(id);
    if (confirm) {
      fetch(
        `https://rocky-brushlands-20414.herokuapp.com/deleteManageOrders/${id}`,
        {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setIsDeleted(!isDeleted);
          } else {
            setIsDeleted(false);
          }
        });
    }
  };
  return (
    <div className="container mx-auto">
      <div className="row text-center">
        {manageCars.map((item) => (
          <div className="col-md-4 ">
            <div className="shadow-sm mx-3 my-3">
              <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>Price:{item.price}</Card.Text>
                  <Link to={`booking/${item._id}`}>
                    <Button className="custom-btn">Book This Car</Button>
                  </Link>
                  <button
                    onClick={() => handleDeletePackage(item._id)}
                    className="custom-btn-d"
                  >
                    Delete
                    <i className="far fa-trash-alt ms-2"></i>
                  </button>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCars;
