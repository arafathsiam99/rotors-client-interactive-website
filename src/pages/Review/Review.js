import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const Review = () => {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://rocky-brushlands-20414.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div>
      <h2>This is Review</h2>
    </div>
  );
};

export default Review;

{
  /* <div className="container mx-auto">
  <div className="row text-center">
    {review.map((item) => (
      <div className="col-md-4 ">
        <div className="shadow-sm mx-3 my-3">
          <Card>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    ))}
  </div>
</div>; */
}
