import React, { Component } from "react";
import BlogList from "./BlogContent";
import { Link } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { setContext } from "apollo-link-context";
//import { travelImg } from "../images/carousel/image2.jpg";
const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign({}, headers, {
      Authorization: process.env.REACT_APP_Authorization,
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
      uri: process.env.REACT_APP_DOMAIN + "/o/graphql",
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
