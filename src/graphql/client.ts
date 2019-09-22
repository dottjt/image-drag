// import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';

import typeDefs from './typeDefs';

const defaults = {};

const preloadedState = (window as any).__APOLLO_STATE__;

delete (window as any).__APOLLO_STATE__;

const cache = new InMemoryCache().restore(preloadedState);

const stateLink = withClientState({
  cache,
  defaults,
  resolvers: {
    Query: {},
    Mutation: {},
  },
  typeDefs: [ typeDefs ],
});

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink,
    new HttpLink({ uri: window.location.hostname === 'localhost' ? 'http://localhost:5001/graphql' : 'https://api.pokeml.com/graphql' }) // http://localhost:2001/graphql
  ]),
});

(window as any).snapSaveState = () => ({
  __APOLLO_STATE__: client.extract(),
});

export default client;
