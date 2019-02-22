import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import { EthereumLink } from 'apollo-link-ethereum'
import { EthersResolver } from 'apollo-link-ethereum-resolver-ethersjs'
import { AbiMapping } from 'apollo-link-ethereum'
import { ethers } from 'ethers'

import mkrAbi from './mkrAbi'

export const abiMapping = new AbiMapping()
abiMapping.addAbi('MKR', mkrAbi)
abiMapping.addAddress('MKR', 1, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2')
window.abiMapping = abiMapping

const provider = new ethers.getDefaultProvider('homestead')
window.provider = provider

const ethersResolver = new EthersResolver({
  abiMapping,
  provider
})

const ethereumLink = new EthereumLink(ethersResolver)

const cache = new InMemoryCache()

const stateLink = withClientState({
  cache
})

export const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, ethereumLink])
})
