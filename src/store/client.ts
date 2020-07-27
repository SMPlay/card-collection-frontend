import { ApolloClient } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import { IS_AUTH } from "../queries";

import { cache } from "./cache";

const link = createUploadLink({ 
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
