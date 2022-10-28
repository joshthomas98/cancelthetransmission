import React from "react";
import Carousel from "react-bootstrap/Carousel";

const BandSlider = () => {
  return (
    <section className="slider">
      <div className="container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../images/ctt_transparent.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../images/station 18-199.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../../images/station 18-193.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default BandSlider;
