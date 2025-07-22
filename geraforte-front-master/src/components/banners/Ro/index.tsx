/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import useStyles from './styles'
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import {
  ButtonColorWhite,
  LinkWithoutDecoration
} from 'components/ButtonCustom'

export type RoProps = {
  textBanner: string
  linkCta?: string
  backgroundImageUrl?: string
  labelCta?: string
}

const RoBanner = ({
  textBanner,
  linkCta = '#',
  backgroundImageUrl = '',
  labelCta
}: RoProps) => {
  const classes = useStyles({ backgroundImageUrl: backgroundImageUrl })
  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))

  const handleClick = (event: any) => {
    event.preventDefault()
    window.open(
      event.currentTarget.href,
      event.currentTarget.href.includes(window.location.hostname)
        ? '_self'
        : '_blank'
    )
    return false
  }

  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      className={classes.container}
    >
      <Grid item xs={12} md={8}>
        <Typography variant="h2">
          <Box
            fontWeight="fontWeightMedium"
            dangerouslySetInnerHTML={{ __html: textBanner }}
            pt={1}
          />
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box textAlign={isMoreThenMd ? 'right' : undefined}>
          <LinkWithoutDecoration href={linkCta} onClick={handleClick}>
            <ButtonColorWhite
              color="secondary"
              variant="contained"
              size="large"
              disableElevation
            >
              {labelCta}
            </ButtonColorWhite>
          </LinkWithoutDecoration>
        </Box>
      </Grid>
    </Grid>
  )
}

export default RoBanner
