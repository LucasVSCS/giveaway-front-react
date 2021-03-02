import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import DashboardMenu from '../components/organisms/DashboardMenu'
import DashboardGiveawayIndex from '../components/organisms/DashboardGiveawayIndex'
import DashboardPageStyle from '../styles/DashboardPageStyle'

export default function DashboardGiveaway () {
  const classes = DashboardPageStyle()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardMenu title='Novo sorteio' />
      <DashboardGiveawayIndex />
    </div>
  )
}
