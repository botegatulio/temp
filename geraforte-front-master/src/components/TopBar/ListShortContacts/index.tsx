import React from 'react'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import InstagramIcon from '@material-ui/icons/Instagram'
import useStyles from './styles'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled'

export default function PrimarySearchAppBar() {
  const classes = useStyles()

  return (
    <List className={classes.shortListContacts}>
      <ListItem
        component="a"
        href="#phone"
        className={classes.shortListContactsItem}
      >
        <ListItemIcon className={classes.shortListContactsItemIcon}>
          <PhoneEnabledIcon color="inherit" />
        </ListItemIcon>
        <ListItemText
          primary="(31) 3333-2222"
          className={classes.shortListContactsItemText}
        />
      </ListItem>
      <ListItem
        component="a"
        href="#simple-list"
        className={classes.shortListContactsItem}
      >
        <ListItemIcon className={classes.shortListContactsItemIcon}>
          <MailOutlineIcon color="inherit" />
        </ListItemIcon>
        <ListItemText
          primary="contato@suaempresa.com.br"
          className={classes.shortListContactsItemText}
        />
      </ListItem>
      <ListItem
        component="a"
        href="#instagram"
        className={classes.shortListContactsItem}
      >
        <ListItemIcon className={classes.shortListContactsItemIcon}>
          <InstagramIcon color="inherit" />
        </ListItemIcon>
      </ListItem>
    </List>
  )
}
