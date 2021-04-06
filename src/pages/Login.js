import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import LoginBox from '../components/organisms/LoginBox'
import { useHistory } from 'react-router-dom'

export default function LoginPage () {
  const history = useHistory()

  if (localStorage.getItem('userCookie')) {
    history.push('/dashboard')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <LoginBox />
    </Container>
  )
}
