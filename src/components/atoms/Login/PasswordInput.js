import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function PasswordInput () {
  return (
    <TextField
      variant='outlined'
      margin='normal'
      required
      fullWidth
      name='password'
      label='Senha'
      type='password'
      id='password'
      autoComplete='current-password'
    />
  )
}
