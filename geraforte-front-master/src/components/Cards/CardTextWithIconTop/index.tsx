import React from 'react'
import { Typography } from '@material-ui/core'

import useStyles from './styles'

export type CardTextWithIconTopProps = {
  icon?: React.ReactNode
  text: string
}

export default function CardTextWithIconTop({
  icon,
  text
}: CardTextWithIconTopProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.wrapperIcon}>{icon}</div>
      <div className={classes.wrapperText}>
        <Typography variant="body1">{text}</Typography>
      </div>
    </div>
  )
}
