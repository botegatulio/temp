import React from 'react'
import List from '@material-ui/core/List'
import ListItem, { ListItemProps } from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import useStyles from './styles'

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  const classes = useStyles()
  return <ListItem button component="a" {...props} className={classes.item} />
}

export type MenuItemProps = {
  label: string
  href: string
}
export type MenuFooterProps = {
  items?: MenuItemProps[]
}

export default function MenuFooter({ items }: MenuFooterProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {items &&
          items.map((item, i) => {
            return (
              <React.Fragment key={item.label}>
                <ListItemLink href={item.href} key={item.label}>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{ variant: 'subtitle1' }}
                  />
                </ListItemLink>
                {i != items.length - 1 && (
                  <Divider className={classes.divider} />
                )}
              </React.Fragment>
            )
          })}
      </List>
    </div>
  )
}
