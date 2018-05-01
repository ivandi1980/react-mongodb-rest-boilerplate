// Imports: React
import React, { Component } from 'react';

// Imports: Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Imports: Components


// Setup: Apollo
const CLIENT = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});


// React Application
class App extends Component {
  render() {
    return (
      <ApolloProvider client={CLIENT}>
        <div id="main">

        </div>
      </ApolloProvider>
    );
  }
}


// Exports
export default App;