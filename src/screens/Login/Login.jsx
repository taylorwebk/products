import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useMutation } from '@apollo/react-hooks'

import { LOGIN } from '../../graphql/mutatios'

import useStyles from './Login.styles'


// import { GET_USER } from '../../graphql/queries'
// const { loading, error, data } = useQuery(GET_USER)


const Login = ({ history: { push } }) => {
  const classes = useStyles()
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [login, { loading, error }] = useMutation(LOGIN)

  const handleChange = (setter) => ({ currentTarget: { value } }) => {
    setter(value)
  }

  const handleClick = () => {
    login({
      variables: {
        data: { email: correo, password }
      }
    })
      .then(({ data: { login: token } }) => {
        localStorage.setItem('token', token)
        push('/')
      })
  }

  const checkLogin = () => {
    const token = localStorage.getItem('token')
    if (token) {
      push('/')
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <div className={classes.cont}>
      <Paper className={classes.card}>
        {
          error && (
            <Typography color="error">Credenciales incorrectas</Typography>
          )
        }
        <Typography color="primary" align="center" variant="h4">
          Login
        </Typography>
        <TextField
          label="Correo:"
          value={correo}
          margin="normal"
          onChange={handleChange(setCorreo)}
          disabled={loading}
        />
        <TextField
          label="Password:"
          value={password}
          margin="normal"
          type="password"
          onChange={handleChange(setPassword)}
          disabled={loading}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          disabled={loading}
        >
          Ingresar
        </Button>
      </Paper>
    </div>
  )
}

export default Login
