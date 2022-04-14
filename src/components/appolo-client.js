import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://exercise-graphql.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret" : "tUimdO5m1SHC2BHfRt6YZgI5rio21tJ7Du28wXpKynAxnsj1v5jf9ADDpsF1gMRb"
    }
  });

  export default client