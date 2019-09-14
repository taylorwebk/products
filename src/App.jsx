import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import client from './graphql/client'
import {
  Home, Login
} from './screens'

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  </ApolloProvider>
)

export default App
