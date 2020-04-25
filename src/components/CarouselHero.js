import React, { useContext } from "react";
import Carousel from "../components/Carousel";

export default function CarouselHero(props) {
  return (
    <Carousel animationTime={500} slideInterval={10000}>
      {props.images.map((item, index) => {
        return <img src={item} key={index} alt="" />;
      })}
    </Carousel>
  );
}
