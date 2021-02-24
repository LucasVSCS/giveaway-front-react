import React from 'react'

import LoginButton from '../../atoms/Login/LoginButton'
import EmailInput from '../../atoms/Login/EmailInput'
import PasswordInput from '../../atoms/Login/PasswordInput'
import RememberCheckbox from '../../atoms/Login/RememberCheckbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import FormStyle from '../../../styles/FormStyle'

export default function HeaderForm () {
  const classes = FormStyle()
  return (
    <form className={classes.form} noValidate>
      <EmailInput />

      <PasswordInput />

      <RememberCheckbox />

      <LoginButton />

      <Grid container>
        <Grid item xs>
          <Link href='#' variant='body2'>
            Esqueci minha senha
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}
