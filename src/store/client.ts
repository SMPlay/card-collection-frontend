import { ApolloClient, createHttpLink } from "@apollo/client";
import { IS_AUTH } from "../queries";

import { cache } from "./cache";

const link = createHttpLink({ 
  uri: 'http://localhost:4001/graphql',
  credentials: "include"
});

export const client = new ApolloClient({
  link,
  cache,
});

client.writeQuery({
  query: IS_AUTH,
  data: {
    isAuth: false
  }
});
