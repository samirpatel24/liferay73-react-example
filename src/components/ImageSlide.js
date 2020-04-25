import React from "react";
import styled from "styled-components";

const ImageSlide = ({ url }) => {
  console.log("Image URL ");
  console.log(url.bannerImage);
  const NavImage = styled.div`
    min-height: calc(100vh - 66px);
    background: url(${url.bannerImage}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  //   console.log(url);
  //   const styles = {
  //     backgroundImage: `url(https://webserver-liferaysamirpatel-dev.lfr.cloud/documents/116236/119180/ctdca-exterior-0073-hor-feat.jpg/d8ad106e-9730-d30c-2ca2-bb4344b2c215?t=1586803306687)`,
  //     backgroundSize: "cover",
  //     backgroundPosition: "center",
  //   };

  return <NavImage></NavImage>;
};

export default ImageSlide;
