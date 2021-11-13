import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <h1>Customers Review</h1>
      <div className="container mx-auto">
        <div className="row text-center">
          {review.map((item) => (
            <div className="col-md-4 ">
              <div className="shadow-sm mx-3 my-3">
                <Card>
                  <Rating
                    initialRating={item.rating}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Title>{item.review}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      ;
    </div>
  );
};

export default Review;
