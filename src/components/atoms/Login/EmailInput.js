import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function EmailInput () {
  return (
    <TextField
      variant='outlined'
      margin='normal'
      required
      fullWidth
      id='email'
      label='E-mail'
      name='email'
      autoComplete='email'
      autoFocus
    />
  )
}
