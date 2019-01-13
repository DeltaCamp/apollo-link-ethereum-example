import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import { ContractLink } from 'apollo-link-web3'
import { Web3JSResolver } from 'apollo-link-web3-resolver-web3js'
import { abiMapping } from './abiMapping'
import Web3 from 'web3'

window.abiMapping = abiMapping

const web3Resolver = new Web3JSResolver(abiMapping)
const contractLink = new ContractLink(web3Resolver)

const cache = new InMemoryCache({
  addTypename: false
})

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
  cache,
  link: ApolloLink.from([stateLink, contractLink])
})

window.ethereum.enable().then(function () {
  console.log('Set web3')
  web3Resolver.web3 = new Web3(window.ethereum)
  apolloClient.resetStore()
})
