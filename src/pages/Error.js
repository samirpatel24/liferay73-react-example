import React from "react";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Image from "../images/carousel/image2.jpg";
const Error = () => {
  return (
    <StyledHero img={Image}>
      <Banner title="404" subtitle="page not found">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </StyledHero>
  );
};

export default Error;
