import React, { useState } from 'react'
import LoginButton from '../../atoms/Login/LoginButton'
import TextField from '@material-ui/core/TextField'
import LoginPageStyle from '../../../styles/LoginPageStyle'
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import instance from '../../../apis/axios-default'
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

    instance
      .post('users/verifyCredentials', {
        userEmail: userEmail,
        userPassword: userPassword
      })
      .then(response => {
        setLoading(false)

        if (response.data['token']) {
          localStorage.setItem('userCookie', response.data['token'])
          history.push('/dashboard')
        } else {
          setError('Algo deu errado. Por favor, tente novamente!')
        }
      })
      .catch(error => {
        setLoading(false)
        if (error === 401) {
          setError(error)
        } else {
          console.log(error)
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
