import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache,
  resolvers: {
    Query: {
      networkStatus: (_, params, { cache }) => {
        return {
          __typename: 'NetworkStatus',
          isConnected: "yes it is"
        }
      }
    }
  }
})

export const apolloClient = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  cache,
  link: stateLink
});
