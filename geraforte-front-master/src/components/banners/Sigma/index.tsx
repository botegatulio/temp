import React from 'react'
import useStyles from './styles'
import { Box, Grid, useMediaQuery, useTheme } from '@material-ui/core'
import { SmallDivider } from 'components/DividerCustom'
import { ButtonColorWhite } from 'components/ButtonCustom'

type SigmaBannerProps = {
  text: string
  linkCta?: string
  backgroundImageUrl?: string
  labelCta?: string
}

const SigmaBanner = ({
  text = '',
  linkCta = '#',
  backgroundImageUrl = '',
  labelCta
}: SigmaBannerProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Grid
      container
      alignItems="center"
      spacing={2}
      className={classes.container}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`
      }}
    >
      <Grid item xs={12} md={8}>
        <SmallDivider />
        <Box
          fontSize="h2.fontSize"
          color="common.white"
          dangerouslySetInnerHTML={{ __html: text }}
          pt={1}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Box textAlign={isMoreThenMd ? 'right' : undefined}>
          <ButtonColorWhite
            color="secondary"
            variant="outlined"
            href={linkCta}
            size="large"
          >
            {labelCta}
          </ButtonColorWhite>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SigmaBanner
