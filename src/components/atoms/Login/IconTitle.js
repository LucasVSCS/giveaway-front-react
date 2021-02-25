import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Avatar from '@material-ui/core/Avatar'
import LoginPageStyle from '../../../styles/LoginPageStyle'

export default function IconTitle () {
  const classes = LoginPageStyle()
  return (
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>
  )
}
