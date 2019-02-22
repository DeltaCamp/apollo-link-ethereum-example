# Apollo Link Ethereum Example App

This app demonstrates the use of [apollo-link-ethereum](https://github.com/DeltaCamp/apollo-link-ethereum)

[Live here](https://sharp-noether-f25189.netlify.com/) (not much to see though ;)

# Setup

```
$ yarn
```

# Usage

Start the [Create React App](https://github.com/facebook/create-react-app) dev server:

```
$ yarn start
```

Now navigate to http://localhost:3000 in your browser.  The app is hard-coded to mainnet, so MetaMask will not affect the output.

# Highlights

First you should take note of [apolloClient.js](src/apolloClient.js).  This is where the EthereumLink is setup:

```javascript
// apolloClient.js

export const abiMapping = new AbiMapping()
abiMapping.addAbi('MKR', mkrAbi)
abiMapping.addAddress('MKR', 1, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2')

const provider = new ethers.getDefaultProvider('homestead')

const ethersResolver = new EthersResolver({
  abiMapping,
  provider
})

const ethereumLink = new EthereumLink(ethersResolver)

// ...

export const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([stateLink, ethereumLink])
})
```

Next is to look at how we query Ethereum in [App.js](src/App.js):

```javascript
// src/App.js

const MKR_QUERY = gql`
  query MkrQuery {
    MKR @contract {
      totalSupply
      someonesBalance: balanceOf(address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2")
      allEvents @pastEvents(fromBlock: "4620855", toBlock: 4621855)
    }
  }
`

class App extends Component {
  render() {
    return (
      <Query query={MKR_QUERY}>
        {/* ... */}
      </Query>
    )
  }
}
```

You'll notice the custom directives `@contract` and `@pastEvents`.  These are defined by [apollo-link-ethereum](https://github.com/DeltaCamp/apollo-link-ethereum) and will send the requests to the Ethereum blockchain.
