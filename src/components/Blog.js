import React from "react";
import ClayButton from "@clayui/button";
import ClayCard from "@clayui/card";
import TextTruncate from "react-text-truncate";
import { Link } from "react-router-dom";

export default function Blog(props) {
  const key = props.Id;
  const title = props.title;
  const author = props.author;
  const description = props.description;
  const imageUrl = props.image;
  const datePublished = props.datePublished;
  console.log("key" + key);
  return (
    <article className="blog">
      <div className="img-container">
        <img src={imageUrl} alt="blogimage" />
        <div className="price-top">
          <h6>{author}</h6>
        </div>
        <Link to={`/blogs/${key}`} className="btn-primary room-link">
          Read
        </Link>
      </div>
      <p className="room-info ">{title}</p>
    </article>
  );
}
