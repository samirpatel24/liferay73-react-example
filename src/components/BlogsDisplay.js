import React, { Component } from "react";
import defaultImg from "../images/carousel/image2.jpg";
import BlogList from "./BlogContent";
import { Link } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import StyledHero from "./styledHero";
import { setContext } from "apollo-link-context";
//import { travelImg } from "../images/carousel/image2.jpg";
const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign({}, headers, {
      Authorization: "Basic dGVzdDphZG1pbjEyMw==",
    }),
  };
});

const defaultOptions = {
  query: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  },
};
const client = new ApolloClient({
  link: authLink.concat(
    new HttpLink({
      uri: "https://webserver-liferaysamirpatel-dev.lfr.cloud/o/graphql",
    })
  ),
  cache: new InMemoryCache(),
  defaultOptions,
});

export class BlogDisplay extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BlogList />
      </ApolloProvider>
    );
  }
}

export default BlogDisplay;
