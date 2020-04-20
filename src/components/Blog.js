import React from "react";
import ClayButton from "@clayui/button";
import ClayCard from "@clayui/card";
import TextTruncate from "react-text-truncate";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function Blog(props) {
  const key = props.id;
  const title = props.title;
  const author = props.author;
  const description = props.description;
  const imageUrl = props.image;
  const datePublished = props.datePublished;
  console.log("key" + key);
  return (
    <article className="room">
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

    // <div className="col-md">
    //   <ClayCard>
    //     <ClayCard.Body>
    //       <ClayCard.Description displayType="title" className="big-title">
    //         {title}
    //       </ClayCard.Description>
    //       <ClayCard.Description displayType="subtitle" title={author}>
    //         {author} - <Moment fromNow>{datePublished}</Moment>
    //       </ClayCard.Description>
    //       <ClayCard.Description truncate={false} displayType="text">
    //         <div dangerouslySetInnerHTML={{ __html: body }} />
    //         {/* <TextTruncate
    //           line={3}
    //           element="span"
    //           truncateText="…"
    //           text={body}
    //         /> */}
    //       </ClayCard.Description>
    //       {/* <ClayButton>Read</ClayButton> */}
    //     </ClayCard.Body>
    //   </ClayCard>
    // </div>
  );
}
