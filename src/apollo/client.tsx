import ApolloClient from 'apollo-boost';
import env from "../envir.variable";

export const client = new ApolloClient({
    uri: env.uri,
});
