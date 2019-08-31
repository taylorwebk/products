import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'

import client from './graphql/client'
import Login from './screens/Login/Login'

const App = () => (
  <ApolloProvider client={client}>
    <Login />
  </ApolloProvider>
)

export default App
