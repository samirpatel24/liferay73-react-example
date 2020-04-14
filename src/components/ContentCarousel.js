import React, { Component } from "react";
import Carousel from "@brainhubeu/react-carousel";
import Icon from "react-fa";
import "@brainhubeu/react-carousel/lib/style.css";
import imageOne from "../images/carousel/image1.jpg";
import imageTwo from "../images/carousel/image2.jpg";
import imageThree from "../images/carousel/image3.jpg";

export class ContentCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <Carousel
        arrowLeft={<Icon className="icon-example" name="arrow-left" />}
        arrowRight={<Icon className="icon-example" name="arrow-right" />}
        addArrowClickHandler
      >
        <img src={imageOne} alt="image1" />
        <img src={imageTwo} alt="image2" />
        <img src={imageThree} alt="image3" />
      </Carousel>
    );
  }
}

export default ContentCarousel;
