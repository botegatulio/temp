import { Box, Button, Divider, Typography } from '@material-ui/core'
import {
  FiCard,
  FiCardActionArea,
  FiCardContent,
  FiCardMedia
} from 'components/Cards/FullImageCard'
import React from 'react'
import useStyles from './styles'

export type CardProductLineProps = {
  iconUrl?: string
  imgUrl: string
  title?: string
  subTitle?: string
  cta?: {
    label: string
    link: string
  }
}

const CardProductLine = ({
  imgUrl,
  title = '',
  subTitle = '',
  cta
}: CardProductLineProps) => {
  const classes = useStyles()

  return (
    <FiCard className={classes.card}>
      <FiCardActionArea className={classes.fiCardActionArea}>
        <FiCardMedia image={imgUrl} title="Contemplative Reptile" />

        <FiCardContent className={classes.fiCardContent}>
          <Typography gutterBottom component="h2" style={{ fontSize: 24 }}>
            {title}
          </Typography>
          <Divider color="secondary" className={classes.divider} />
          <Typography
            variant="body2"
            className={classes.fiCardContentTextSecondary}
            component="p"
            style={{ color: 'white', fontSize: 14 }}
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
          {cta && (
            <Box pt={1}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                href={cta.link}
              >
                {cta.label}
              </Button>
            </Box>
          )}
        </FiCardContent>
      </FiCardActionArea>
    </FiCard>
  )
}

export default CardProductLine
