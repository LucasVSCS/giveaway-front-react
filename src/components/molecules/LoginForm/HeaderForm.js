import React from 'react'

import HeaderTitle from '../../atoms/Login/HeaderTitle'
import LoginPageStyle from '../../../styles/LoginPageStyle'

export default function HeaderForm () {
  const classes = LoginPageStyle()
  return (
    <div className={classes.paper}>
      <img src={process.env.PUBLIC_URL + '/logo192.png'} />
      <HeaderTitle />
    </div>
  )
}
