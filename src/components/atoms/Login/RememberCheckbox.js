import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export default function RememberCheckbox () {
  return (
    <FormControlLabel
      control={<Checkbox value='remember' color='primary' />}
      label='Lembrar-me'
    />
  )
}
