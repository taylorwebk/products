import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GET_USER } from '../../graphql/queries'

const Login = () => {
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) {
    return <h3>LOADING</h3>
  }
  if (error) {
    console.log(error)
    return <h3>ERROR</h3>
  }
  return (
    <h3>{data.getUser.name}</h3>
  )
}

export default Login
