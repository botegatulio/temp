import React from 'react'
import { useRouter } from 'next/router'
import IconButton from '@material-ui/core/IconButton'
import SocialNetworks from '../SocialNetworks'

import useStyles from './styles'
import {
  Box,
  Button,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'
import clsx from 'clsx'
import ClearIcon from '@material-ui/icons/Clear'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import { MenuItem } from '../data'
import { useTranslation } from 'next-i18next'

type TopBarProps = {
  statusDrawer: boolean
  handleStatusDrawer: (status: boolean) => void
  menu?: MenuItem[]
}

const DrawerWrapper = ({
  statusDrawer,
  handleStatusDrawer,
  menu
}: TopBarProps) => {
  const classes = useStyles()
  const router = useRouter()
  const { t } = useTranslation('common')
  const { locale } = router

  const [openChildrenItem, setOpenChildrenItem] = React.useState(false)

  const handleClickChildrenItem = () => {
    setOpenChildrenItem(!openChildrenItem)
  }

  const toggleDrawer =
    (status: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      handleStatusDrawer(status)
    }

  return (
    <Drawer anchor="top" open={statusDrawer} onClose={toggleDrawer(false)}>
      <div
        className={clsx(classes.listSideMenu, classes.fullList)}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
      >
        <div className={classes.topDrawerOptions}>
          <div className={classes.wrapperLogoDrawer}>
            <img
              src={t('logo_geraforte_topbar')}
              className={classes.logoDrawer}
            />
          </div>
          <IconButton
            aria-label="show more"
            aria-controls="abc"
            aria-haspopup="true"
            color="inherit"
            component={Link}
            onClick={toggleDrawer(false)}
          >
            <Box color="common.black">
              <ClearIcon color="inherit" />
            </Box>
          </IconButton>
        </div>
        <List className={classes.listMenu}>
          <ListItem
            button
            key={'item-idiomas'}
            component="div"
            className={clsx({
              [classes.listMenuItem]: true,
              [classes.containerFlagsAndLabel]: true
            })}
            divider
          >
            <ListItemText
              primary={t('menu_switch_label')}
              disableTypography
              className={classes.labelLanguage}
            />
            <div className={classes.containerFlags}>
              <Button
                variant="outlined"
                href="/pt"
                className={clsx({
                  [classes.buttonFlag]: true,
                  [classes.buttonFlagActive]: locale === 'pt'
                })}
              >
                <img
                  src="/img/flags/brazil-256x179.png"
                  style={{ maxWidth: 60 }}
                />
              </Button>
              <Button
                variant="outlined"
                href="/en"
                className={clsx({
                  [classes.buttonFlag]: true,
                  [classes.buttonFlagActive]: locale === 'en'
                })}
              >
                <img
                  src="/img/flags/eua-256x135.png"
                  style={{ maxWidth: 60 }}
                />
              </Button>

              <Button
                variant="outlined"
                href="/es"
                className={clsx({
                  [classes.buttonFlag]: true,
                  [classes.buttonFlagActive]: locale === 'es'
                })}
              >
                <img
                  src="/img/flags/spain-256x171.png"
                  style={{ maxWidth: 60 }}
                />
              </Button>
            </div>
          </ListItem>
          {menu &&
            menu.map((item, index) => {
              if (item.hasChildren) {
                return (
                  <div key={`item-dropdown-${index}`}>
                    <ListItem button onClick={handleClickChildrenItem} divider>
                      <ListItemText
                        primary={item.label}
                        className={classes.listMenuItem}
                        disableTypography
                      />
                      {openChildrenItem ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse
                      in={openChildrenItem}
                      timeout="auto"
                      unmountOnExit
                    >
                      {item.subItems?.map((subItem) => {
                        return (
                          <List
                            key={subItem.link}
                            component="div"
                            disablePadding
                          >
                            <ListItem
                              component="a"
                              href={subItem.link}
                              button
                              className={classes.nestedItems}
                            >
                              <ListItemText
                                primary={
                                  <Typography variant="body1">
                                    {subItem.label}
                                  </Typography>
                                }
                              />
                            </ListItem>
                          </List>
                        )
                      })}
                    </Collapse>
                  </div>
                )
              }

              return (
                <ListItem
                  button
                  key={`item-${index}`}
                  component="a"
                  className={classes.listMenuItem}
                  divider
                  href={item.link}
                >
                  <ListItemText primary={item.label} disableTypography />
                </ListItem>
              )
            })}
        </List>
        <SocialNetworks />
      </div>
    </Drawer>
  )
}

export default DrawerWrapper
