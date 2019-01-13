import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import get from 'lodash.get'

const NETWORK_STATUS = gql`
  query Stuff($address: String!) {
    status: networkStatus @client {
      isConnected
    },
    CoordinationGame @contract(address: $address) {
      usdWeiPerEther
      weiPerApplication
    }
  }
`

class App extends Component {
  render() {

    return (
      <Query
        query={NETWORK_STATUS}
        variables={ { address: "0x11e694fb9aaf50fb55409610e72d7f14244f38bd" } }>

        {({ data }) => {
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Network Status: {get(data, 'status.isConnected', 'Unknown')}
                </p>
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                  <i>{(get(data, 'CoordinationGame.usdWeiPerEther') || '').toString()}</i>
                  <hr />
                  <i>{(get(data, 'CoordinationGame.weiPerApplication') || '').toString()}</i>
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          )
        }}

      </Query>
    )
  }
}

export default App
