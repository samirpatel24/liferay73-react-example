import gql from "graphql-tag";
import React, { Component } from "react";
import { useQuery } from "@apollo/react-hooks";
import ClayLoadingIndicator from "@clayui/loading-indicator";
import ClayAlert from "@clayui/alert";
import Blog from "./Blog";
const domain = "https://webserver-liferaysamirpatel-dev.lfr.cloud";
// const { GraphQLClient } = require("graphql-request");

// const AUTHORIZATION_TOKEN = "dGVzdDphZG1pbjEyMw==";
// const graphQLClient = new GraphQLClient(
//   "https://webserver-liferaysamirpatel-dev.lfr.cloud/o/graphql",
//   {
//     headers: {
//       authorization: `Basic ${AUTHORIZATION_TOKEN}`,
//     },
//   }
// );

const getBlogsQuery = gql`
  query {
    blogPostings(siteKey: "116145") {
      items {
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
        relatedContents {
          title
        }
        siteId
        taxonomyCategoryIds
        viewableBy
      }
      page
      pageSize
      totalCount
    }
  }
`;

export default function BlogContent() {
  const { loading, error, data } = useQuery(getBlogsQuery);

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

  if (data.blogPostings.items.length === 0) {
    return (
      <ClayAlert displayType="info" className="text-center">
        No blog posts.
      </ClayAlert>
    );
  }

  const blogs = data.blogPostings.items.map(
    ({ id, headline, image, description, creator, datePublished }) => (
      <Blog
        title={headline}
        author={creator.name}
        description={description}
        image={domain + image.contentUrl}
        datePublished={datePublished}
        id={id}
      />
    )
  );

  return <div className="row">{blogs}</div>;
}
