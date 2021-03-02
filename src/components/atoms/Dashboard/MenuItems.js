import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import PeopleIcon from '@material-ui/icons/People'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'

export const MenuItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary='Dashboard' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary='Adicionar Usuário' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CardGiftcardIcon />
      </ListItemIcon>
      <ListItemText primary='Gerar Sorteio' />
    </ListItem>
  </div>
)
