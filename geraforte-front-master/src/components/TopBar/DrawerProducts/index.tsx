import React from 'react'

import {
  Box,
  Drawer,
  Grid,
  ListItemIcon,
  MenuItem,
  MenuList,
  Typography
} from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Skeleton from '@material-ui/lab/Skeleton'
import useStyles from './styles'

export type SubMenuItem = {
  link: string
  label: string
  hiddenOnDrawerDesktop?: boolean
}

type DrawerProductsProps = {
  status: boolean
  onSetStatus: (status: boolean) => void
  items: SubMenuItem[]
}

const DrawerProducts = ({
  status,
  onSetStatus,
  items
}: DrawerProductsProps) => {
  const classes = useStyles()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showThumbnail, setShowThumbnail] = React.useState(false)

  const toggleDrawerProducts =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      onSetStatus(open)
    }

  return (
    <Drawer
      anchor="top"
      open={status}
      onClose={toggleDrawerProducts(false)}
      className={classes.drawerProducts}
      ModalProps={{ hideBackdrop: false }}
      BackdropProps={{ invisible: true }}
    >
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={4}>
            <MenuList>
              {items &&
                items.map((item, index) => {
                  if (!item.hiddenOnDrawerDesktop) {
                    return (
                      <MenuItem
                        onMouseEnter={() => setShowThumbnail(true)}
                        onMouseLeave={() => setShowThumbnail(false)}
                        className={classes.menuItem}
                        key={index}
                        onClick={() => {
                          window.location.href = item.link
                        }}
                      >
                        <Typography variant="inherit">{item.label}</Typography>
                        <ListItemIcon>
                          <ChevronRightIcon fontSize="small" />
                        </ListItemIcon>
                      </MenuItem>
                    )
                  }
                })}
            </MenuList>
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="center" pt={1}>
              {/*showThumbnail && (
                <Skeleton variant="rect" width={210} height={118} />
              )*/}
            </Box>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  )
}

export default DrawerProducts
