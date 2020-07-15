import { ApolloClient, createHttpLink } from "@apollo/client";

import { cache } from "./cache";

const link = createHttpLink({ 
  uri: 'http://localhost:4001/graphql',
  credentials: "include"
});

export const client = new ApolloClient({
  link,
  cache,
});