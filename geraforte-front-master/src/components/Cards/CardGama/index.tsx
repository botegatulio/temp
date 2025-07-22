import React from 'react'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

export type CardGamaProps = {
  iconUrl?: string
  title?: string
  text?: string
}

export default function CardGama({ iconUrl, title, text }: CardGamaProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {iconUrl && (
        <div className={classes.wrapperIcon}>
          <img src={iconUrl} className={classes.icon} />
        </div>
      )}
      <div className={classes.content}>
        {title && (
          <Typography component="h5" variant="h5" className={classes.title}>
            {title}
          </Typography>
        )}
        {text && (
          <div
            className={classes.text}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
      </div>
    </div>
  )
}
