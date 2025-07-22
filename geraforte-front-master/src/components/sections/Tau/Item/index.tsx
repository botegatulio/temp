import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'
import { SmallDivider } from 'components/DividerCustom'
export type ItemProps = {
  title?: string
  urlImage?: string
}

const TauSection = ({ title, urlImage }: ItemProps) => {
  const classes = useStyles()
  return (
    <div className={classes.item}>
      <img src={urlImage} className={classes.image} />
      <div className={classes.wrapperText}>
        <SmallDivider />
        <Typography component="h5" variant="h5" className={classes.title}>
          {title}
        </Typography>
      </div>
    </div>
  )
}

export default TauSection
