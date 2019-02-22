import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import get from 'lodash.get'

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
        {({ data, loading, error }) => {
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                  <i>Balance of MKR Contract itself: {(get(data, 'MKR.someonesBalance') || '').toString()}</i>
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
