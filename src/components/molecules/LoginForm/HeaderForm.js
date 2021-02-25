import React from 'react'

import HeaderTitle from '../../atoms/Login/HeaderTitle'
import IconTitle from '../../atoms/Login/IconTitle'
import LoginPageStyle from '../../../styles/LoginPageStyle'

export default function HeaderForm () {
  const classes = LoginPageStyle()
  return (
    <div className={classes.paper}>
      <IconTitle />
      <HeaderTitle />
    </div>
  )
}
