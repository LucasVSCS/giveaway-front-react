import React from 'react'
import Typography from '@material-ui/core/Typography'
import DashboardPageStyle from '../../../styles/DashboardPageStyle'

export default function MenuTitle (props) {
  const classes = DashboardPageStyle()
  return (
    <Typography
      component='h1'
      variant='h6'
      color='inherit'
      noWrap
      className={classes.title}
      gutterBottom
    >
      {props.title}
    </Typography>
  )
}
