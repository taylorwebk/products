import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'

const Home = ({ history: { push } }) => {
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

  return (
    <div>
      <h3>HOME SCREEN</h3>
      <Button onClick={logout} color="secondary" variant="contained">
        logout
      </Button>
    </div>
  )
}

export default Home
