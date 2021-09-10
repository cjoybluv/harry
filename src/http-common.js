import axios from "axios";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_URI,
});
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export { apolloClient };

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URI,
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
