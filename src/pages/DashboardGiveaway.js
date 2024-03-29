import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import DashboardMenu from '../components/organisms/DashboardMenu'
import DashboardGiveawayIndex from '../components/organisms/DashboardGiveawayIndex'
import DashboardPageStyle from '../styles/DashboardPageStyle'

import { useHistory } from 'react-router-dom'

export default function DashboardGiveaway () {
  const classes = DashboardPageStyle()
  const history = useHistory()

  if (!localStorage.getItem('userCookie')) {
    history.push('/')
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <DashboardMenu title='Gratidão Sorteador - Novo sorteio' />
      <DashboardGiveawayIndex />
    </div>
  )
}
