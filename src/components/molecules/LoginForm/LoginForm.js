import React, { useState } from 'react'
import axios from 'axios'
import LoginButton from '../../atoms/Login/LoginButton'
import TextField from '@material-ui/core/TextField'
import LoginPageStyle from '../../../styles/LoginPageStyle'
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import ForgetPasswordLink from '../../atoms/Login/ForgetPasswordLink'

export default function HeaderForm () {
  let history = useHistory()
  const classes = LoginPageStyle()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [userEmail, setuUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleLogin = event => {
    event.preventDefault()
    setError(null)
    setLoading(true)

    axios
      .post(
        process.env.REACT_APP_API_URL + 'users/verifyCredentials',
        {
          userEmail: userEmail,
          userPassword: userPassword
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true,
          credentials: 'include'
        }
      )
      .then(response => {
        setLoading(false)
        history.push('/dashboard')
      })
      .catch(error => {
        setLoading(false)
        if (error === 401) {
          setError(error)
        } else {
          setError('Algo deu errado. Por favor, tente novamente!')
        }
      })
  }

  return (
    <form className={classes.form} onSubmit={handleLogin}>
      <TextField
        id='email'
        label='E-mail'
        name='email'
        autoComplete='email'
        variant='outlined'
        margin='normal'
        required
        fullWidth
        autoFocus
        onChange={e => setuUserEmail(e.target.value)}
        value={userEmail}
      />
      <TextField
        id='password'
        label='Senha'
        name='password'
        autoComplete='current-password'
        type='password'
        variant='outlined'
        margin='normal'
        required
        fullWidth
        onChange={e => setUserPassword(e.target.value)}
        value={userPassword}
      />
      {error && (
        <Typography
          variant='caption'
          display='block'
          gutterBottom
          color='error'
        >
          {error}
        </Typography>
      )}
      <LoginButton />
      <ForgetPasswordLink />
    </form>
  )
}
