import React from 'react'
import Button from '@material-ui/core/Button'
import LoginPageStyle from '../../../styles/LoginPageStyle'

export default function LoginButton () {
  const classes = LoginPageStyle()

  return (
    <Button
      type='submit'
      fullWidth
      variant='contained'
      color='primary'
      className={classes.submit}
    >
      Realizar login
    </Button>
  )
}
