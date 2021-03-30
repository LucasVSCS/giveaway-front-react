import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import DashboardMenu from '../components/organisms/DashboardMenu'
import DashboardIndex from '../components/organisms/DashboardIndex'
import { useHistory } from 'react-router-dom'
import verifyUserSession from '../apis/handleLogin'

import DashboardPageStyle from '../styles/DashboardPageStyle'

export default function Dashboard () {
  const classes = DashboardPageStyle()

  const userData = verifyUserSession()

  console.log(userData)



  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardMenu title='Gratidão Sorteador - Dashboard' />
      <DashboardIndex />
    </div>
  )
}
