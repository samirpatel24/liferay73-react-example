import React, { Component } from "react";
import defaultImg from "../images/carousel/image2.jpg";
import { Link } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { setContext } from "apollo-link-context";
import SingleBlogContent from "../components/SingleBlogContent";
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
export class SingleBlog extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      slug: this.props.match.params.slug,
    };
  }
  render() {
    console.log("slug" + this.state.slug);
    return (
      <div>
        <ApolloProvider client={client}>
          <SingleBlogContent id={this.state.slug} />
        </ApolloProvider>
      </div>
    );
  }
}

export default SingleBlog;
