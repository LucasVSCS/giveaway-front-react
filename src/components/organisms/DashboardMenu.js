import React from 'react'
import { MenuItems } from '../atoms/Dashboard/MenuItems'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import DashboardMenuTitle from '../atoms/Dashboard/DashboardMenuTitle'
import MenuIcon from '@material-ui/icons/Menu'
import Box from '@material-ui/core/Box'
import MyProfileButton from '../molecules/MyProfileButton/MyProfileButton'
import DashboardPageStyle from '../../styles/DashboardPageStyle'

export default function DashboardMenu (props) {
  const classes = DashboardPageStyle()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <img src={process.env.PUBLIC_URL + '/favicon.ico'} />
          <Box fontWeight='fontWeightBold'>Gratidão Sorteador</Box>

          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{MenuItems}</List>
      </Drawer>

      <AppBar
        position='absolute'
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <DashboardMenuTitle title={props.title} />

          <MyProfileButton />
        </Toolbar>
      </AppBar>
    </>
  )
}
