import React from 'react'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

export type CardDeltaProps = {
  icon?: React.ReactNode
  title?: string
}

export default function CardDelta({ icon, title }: CardDeltaProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {icon && <div className={classes.wrapperIcon}>{icon}</div>}
      <div className={classes.content}>
        {title && (
          <Typography variant="subtitle2" className={classes.title}>
            {title}
          </Typography>
        )}
      </div>
    </div>
  )
}
