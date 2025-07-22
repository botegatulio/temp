import React, { useState } from 'react'

import { useTranslation } from 'next-i18next'
import { Language } from 'types/commons'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from './styles'
import { Button, Typography } from '@material-ui/core'
import DrawerWrapper from './DrawerWrapper'
import DrawerProducts from './DrawerProducts'
import clsx from 'clsx'
import DropdownLanguage from './DropdownLanguage'

import { getMenu, SubMenuItem } from './data'

type PrimarySearchAppBarProps = {
  language: Language
}

export default function PrimarySearchAppBar({
  language = 'pt'
}: PrimarySearchAppBarProps) {
  const classes = useStyles()
  const [statusSideMenu, setStatusSideMenu] = useState(false)
  const [statusDrawerProducts, setStatusDrawerProducts] = useState(false)
  const [dropdownItems, setDropdownItems] = useState<SubMenuItem[]>([])
  const { t } = useTranslation('common')

  const menu = getMenu(language)

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setStatusSideMenu(open)
    }

  return (
    <div className={classes.wrapperTopBar}>
      <AppBar color="default" className={classes.AppBar} elevation={0}>
        <DropdownLanguage />
        <Toolbar className={classes.toolbar}>
          <a href={`/${language}`}>
            <img
              src={t('logo_geraforte_topbar')}
              className={classes.logoImage}
            />
          </a>
          <nav className={classes.sectionDesktop}>
            {menu &&
              menu.map((item, index) => {
                return (
                  <Button
                    className={clsx(
                      classes.itemMenuDesktop,
                      item.highlighted ? classes.highlighted : null
                    )}
                    disableTouchRipple
                    key={`menu-item-desktop-${index}`}
                    href={item.link}
                    disableElevation
                    onMouseEnter={() => {
                      if (item.hasChildren) {
                        setStatusDrawerProducts(true)
                        setDropdownItems(
                          item.subItems?.length ? item.subItems : []
                        )
                      }
                    }}
                    variant={item.highlighted ? 'contained' : 'text'}
                    color={item.highlighted ? 'secondary' : 'default'}
                  >
                    <Typography
                      noWrap
                      variant="inherit"
                      className={classes.sectionDesktopItemLabel}
                    >
                      {item.label}
                    </Typography>
                    {item.hasChildren && (
                      <ExpandMoreIcon
                        className={classes.arrow}
                        fontSize="small"
                      />
                    )}
                  </Button>
                )
              })}
          </nav>
          <IconButton
            edge="start"
            className={classes.buttonShowDrawerMenu}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerWrapper
        statusDrawer={statusSideMenu}
        handleStatusDrawer={(status) => setStatusSideMenu(status)}
        menu={menu}
      />
      <DrawerProducts
        status={statusDrawerProducts}
        onSetStatus={(status) => setStatusDrawerProducts(status)}
        items={dropdownItems}
      />
    </div>
  )
}
