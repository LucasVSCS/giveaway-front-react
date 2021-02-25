import React from 'react'

import LoginButton from '../../atoms/Login/LoginButton'
import EmailInput from '../../atoms/Login/EmailInput'
import PasswordInput from '../../atoms/Login/PasswordInput'
import RememberCheckbox from '../../atoms/Login/RememberCheckbox'
import LoginPageStyle from '../../../styles/LoginPageStyle'
import ForgetPasswordLink from '../../atoms/Login/ForgetPasswordLink'

export default function HeaderForm () {
  const classes = LoginPageStyle()
  return (
    <form className={classes.form} noValidate>
      <EmailInput />
      <PasswordInput />
      <RememberCheckbox />
      <LoginButton />
      <ForgetPasswordLink />
    </form>
  )
}
