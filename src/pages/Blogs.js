import React, { Component } from "react";
import BlogsDisplay from "../components/BlogsDisplay";
import StyledHero from "../components/StyledHero";
import bannerImage from "../images/travelblog.jpg";
import Banner from "../components/Banner";
export class Blogs extends Component {
  render() {
    return (
      <div>
        <StyledHero img={bannerImage}>
          <Banner title="TravelBlogs" subtitle=""></Banner>
        </StyledHero>
        <section className="blogslist">
          <div className="blogslist-center">
            <BlogsDisplay />
          </div>
        </section>
      </div>
    );
  }
}

export default Blogs;
