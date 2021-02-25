import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'

export default function ForgetPasswordLink () {
  return (
    <Grid container>
      <Grid item xs>
        <Link href='#' variant='body2'>
          Esqueci minha senha
        </Link>
      </Grid>
    </Grid>
  )
}
