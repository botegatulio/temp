import { Box, Button } from '@material-ui/core'
import React from 'react'
import useStyles from './stylesBottomButtons'

export type BottomButtonsProps = {
  current?: number
  items?: {
    href: string
    label: string
    buttonId: number
  }[]
}
type getActiveOrNotButtonProps = {
  variant: 'contained' | 'outlined'
  color: 'secondary' | 'inherit'
}
const getActiveOrNotButton = (
  buttonId: number,
  current?: number
): getActiveOrNotButtonProps => {
  if (current && buttonId === current) {
    return {
      variant: 'contained',
      color: 'secondary'
    }
  }
  return {
    variant: 'outlined',
    color: 'inherit'
  }
}

const BottomButtons = ({ current, items }: BottomButtonsProps) => {
  const classes = useStyles()

  if (items?.length) {
    return (
      <Box className={classes.headerListButtons}>
        {items.map((item, index) => {
          return (
            <Button
              key={index}
              href={item.href}
              disableElevation
              size="small"
              className={classes.headerButtons}
              {...getActiveOrNotButton(item.buttonId, current)}
            >
              {item.label}
            </Button>
          )
        })}
      </Box>
    )
  }
  return null
}

export default BottomButtons
