import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="row text-center">
        {cars.map((item) => (
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
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
