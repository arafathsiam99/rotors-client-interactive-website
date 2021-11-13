import React from "react";
import { Card, Carousel } from "react-bootstrap";
import Cars from "../../Cars/Cars";
import Review from "../../Review/Review";
import "./Home.css";

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
              <h1>Mercedes-Benz CLS Base</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/Bw50L8d/photo-1618056210931-39f730ebbf67.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1>Audi e-tron GT</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/CW5w80K/photo-1537984822441-cff330075342.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>BMW X-3</h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Car Section */}
      <div className="mt-3">
        <h1>
          Select Your Car <br />
          <span className="custom-top"> For Your Travel</span>
        </h1>
      </div>
      <Cars></Cars>
      <div>
        <div>
          <Review></Review>
        </div>
        <h1>Awards</h1>
        <div className="row align-items-center justify-content-center ms-5">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/r6S2cNQ/2021-IIHS-BLK-logo-1x.webp"
              />
              <Card.Body>
                <Card.Title className="custom-font">
                  2021 IIHS Top Safety Pick
                </Card.Title>
                <Card.Text>
                  The Insurance Institute for Highway Safety (IIHS)
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://i.ibb.co/2520nwN/2021-IIHS-logo-1x.webp"
              />
              <Card.Body>
                <Card.Title className="custom-font">
                  2021 IIHS Top Safety Pick+
                </Card.Title>
                <Card.Text>
                  The Insurance Institute for Highway Safety (IIHS)
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <button className="custom-btn mt-3">See More Awards</button>
      </div>
    </section>
  );
};
export default Home;
