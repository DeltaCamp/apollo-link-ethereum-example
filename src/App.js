import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const NETWORK_STATUS = gql`
  {
    status: networkStatus @client {
      isConnected
    }
  }
`;

class App extends Component {
  render() {
    var networkStatus = 'unknown'
    console.log('DATA: ', this.props.data)
    if (this.props.data && this.props.data.status) {
      networkStatus = this.props.data.status.isConnected
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Network Status: {networkStatus}
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
    );
  }
}

export default graphql(NETWORK_STATUS)(App);
