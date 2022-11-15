import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { env } from './../env'

export const createMiningMonitorClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: env.REACT_APP_MINING_MONITOR_GRAPHQL,
    }),
    cache: new InMemoryCache(),
  });
};
