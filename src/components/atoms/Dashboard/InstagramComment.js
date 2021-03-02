import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'


export default function InstagramComment (props) {
  return (
    <ListItem>
      <ListItemText
        disableTypography={false}
        primary={props.userName + ': ' + props.userComment}
      />
    </ListItem>
  )
}
