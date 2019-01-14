import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import get from 'lodash.get'

const NETWORK_STATUS = gql`
  query Stuff($address: String!) {
    MKR @contract(address: $address) {
      totalSupply
      someonesBalance: balanceOf(address: "0x36Aff91ffc31C18d291bAe4204FF22621360641D")
      allEvents @pastEvents(fromBlock: "4620855", toBlock: "4621855")
    }
  }
`

class App extends Component {
  render() {

    return (
      <Query
        query={NETWORK_STATUS}
        variables={ { address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2" } }>

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
                  <i>Random person's balance: {(get(data, 'MKR.someonesBalance') || '').toString()}</i>
                  <br />
                  <i>Total supply: {(get(data, 'MKR.totalSupply') || '').toString()}</i>
                  <br />
                  <i>Number of events: {(get(data, 'MKR.allEvents') || []).length}</i>
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
