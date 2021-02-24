import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonStyle from '../../../styles/ButtonStyle'

export default function LoginButton () {
  const classes = ButtonStyle()

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
