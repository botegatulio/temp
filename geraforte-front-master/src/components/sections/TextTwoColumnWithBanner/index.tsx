import React from 'react'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import { Box, Grid } from '@material-ui/core'
import RoBanner, { RoProps } from 'components/banners/Ro'

export type TextTwoColumnWithBannerProps = {
  text: string
} & RoProps

const TextTwoColumnWithBanner = ({
  text,
  labelCta,
  backgroundImageUrl,
  linkCta,
  textBanner
}: TextTwoColumnWithBannerProps) => {
  const classes = useStyles()
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <Box
            fontSize="body1"
            color="common.white"
            dangerouslySetInnerHTML={{ __html: text }}
            pb={3}
            className={classes.text}
          />
        </Grid>
      </Grid>
      {textBanner && (
        <Grid container spacing={2} className={classes.containerBanner}>
          <Grid item xs={12} className={classes.itemBanner}>
            <RoBanner
              textBanner={textBanner}
              linkCta={linkCta}
              labelCta={labelCta}
              backgroundImageUrl={backgroundImageUrl}
            />
          </Grid>
        </Grid>
      )}
    </Container>
  )
}

export default TextTwoColumnWithBanner
