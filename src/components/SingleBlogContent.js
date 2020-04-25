import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import ClayLoadingIndicator from "@clayui/loading-indicator";
import ClayAlert from "@clayui/alert";
import Blog from "./Blog";

const domain = process.env.REACT_APP_DOMAIN;

//const id = "130185";
const getBlogQuery = gql`
  query blogPosting($blogId: Long!) {
    blogPosting(blogPostingId: $blogId) {
      alternativeHeadline
      articleBody
      creator {
        name
      }
      dateCreated
      dateModified
      datePublished
      description
      encodingFormat
      friendlyUrlPath
      headline
      id
      image {
        contentUrl
      }
      keywords
      numberOfComments
      siteId
      taxonomyCategoryIds
      viewableBy
    }
  }
`;
export default function SingleBlogContent(props) {
  let { id } = props;
  console.log(id);
  const blogId = parseInt(id);
  const { loading, error, data } = useQuery(getBlogQuery, {
    variables: { blogId },
  });

  if (loading) return <ClayLoadingIndicator />;
  if (error) {
    return (
      <ClayAlert displayType="danger" title="Error:">
        An error occured while loading data.
        <div className="mt-2">
          <code>{error.message}</code>
        </div>
      </ClayAlert>
    );
  }

  const title = data.blogPosting.headline;
  const Image = domain + data.blogPosting.image.contentUrl;
  const body = data.blogPosting.articleBody;
  const author = data.blogPosting.creator.name;

  return (
    <div className="single-blog">
      <h4 className="single-blog-title">{title}</h4>
      <img src={Image} alt="" />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <h4> By {author}</h4>
    </div>
  );
}
