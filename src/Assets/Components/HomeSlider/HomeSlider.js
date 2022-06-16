import React from "react";
import { Carousel } from "react-bootstrap";
import "../HomeSlider/HomeSlider.css";
import jordan1 from "../../Img/jordan1.jpg"
import jordan2 from "../../Img/jordan2.jpg"
import airmax from "../../Img/airmax1.jpg"

export const HomeSlider = () => {
  return (
    <div>
      <Carousel className="carousel1">
        <Carousel.Item className="carousel2" interval={5000}>
          <img
            className="imgcarousel d-block w-100"
            src={jordan1}
            // width={100} height={500}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Jordan 1 SBN</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel2" interval={5000}>
          <img
            className="imgcarousel d-block w-100"
            src={jordan2}
            // width={100} height={500}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel2" interval={5000}>
          <img
            className="imgcarousel d-block w-100"
            src={airmax}
            // width={100} height={500}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>AIR MAX 1 TRAVIS SCOTT</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
