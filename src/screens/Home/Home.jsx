import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { useQuery } from '@apollo/react-hooks'

import { VALIDATION } from '../../graphql/queries'

const Home = ({ history: { push } }) => {
  const { loading, error, data } = useQuery(VALIDATION)
  const logout = () => {
    localStorage.removeItem('token')
    push('/login')
  }
  const checkLogin = () => {
    const token = localStorage.getItem('token')
    if (!token) {
      push('/login')
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  if (loading) {
    return <p>CARGANDO...</p>
  }
  if (error) {
    localStorage.removeItem('token')
    push('/login')
  }

  return (
    <div>
      <h3>
        WELCOME
        { ` ${data.validateToken.name}` }
      </h3>
      <Button onClick={logout} color="secondary" variant="contained">
        logout
      </Button>
    </div>
  )
}

export default Home
