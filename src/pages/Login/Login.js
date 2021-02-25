import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import LoginBox from '../../components/organisms/LoginBox/LoginBox'

export default function LoginPage () {
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <LoginBox />
    </Container>
  )
}
