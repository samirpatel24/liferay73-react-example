import React, { useContext } from "react";
import defaultImg from "../images/defaultBcg.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRooms";
import { RoomContext } from "../Context";
import StyledHero from "../components/styledHero";
export default function Home() {
  const { bannerContent } = useContext(RoomContext);
  console.log(bannerContent);
  const { title, subTitle, bannerImage } = bannerContent;

  return (
    <>
      <StyledHero img={bannerImage}>
        <Banner title={title} subtitle={subTitle}>
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </StyledHero>
      <Services />
      <FeaturedRoom />
    </>
  );
}
