import axios from "axios";

// import {
//   ApolloClient,
//   createHttpLink,
//   InMemoryCache,
// } from "@apollo/client/core";

// // HTTP connection to the API
// const httpLink = createHttpLink({
//   uri: "http://localhost:3000/graphql",
// });
// // Cache implementation
// const cache = new InMemoryCache();
// // Create the apollo client
// const apolloClient = new ApolloClient({
//   link: httpLink,
//   cache,
// });

// export { apolloClient };

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
