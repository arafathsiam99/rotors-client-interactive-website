import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cars from "../../Cars/Cars";

const Home = () => {
  return (
    <section>
      <div>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=" https://i.ibb.co/g78prH9/photo-1609326005487-361f2e1c2640.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="custom-h1 fw-bold">Mercedes-Benz CLS Base</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/Bw50L8d/photo-1618056210931-39f730ebbf67.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 className="custom-h1 fw-bold">Audi e-tron GT</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/CW5w80K/photo-1537984822441-cff330075342.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="custom-h1 fw-bold">BMW X-3</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Car Section */}
      <div></div>
      <h4 className="custom-top">Choose Your Car</h4>
      <h1>
        Select Your Car <br /> For Your Travel
      </h1>
      <Cars></Cars>
    </section>
  );
};
export default Home;
