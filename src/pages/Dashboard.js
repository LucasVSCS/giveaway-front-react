import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import DashboardMenu from '../components/organisms/DashboardMenu'
import DashboardIndex from '../components/organisms/DashboardIndex'

import DashboardPageStyle from '../styles/DashboardPageStyle'

export default function Dashboard () {
  const classes = DashboardPageStyle()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardMenu title='Dashboard' />
      <DashboardIndex />
    </div>
  )
}
