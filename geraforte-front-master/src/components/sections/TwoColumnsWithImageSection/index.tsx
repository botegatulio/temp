import React from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import useStyles from './styles'

type TwoColumnsWithImageSectionProps = {
  top: string
  title: string
  backgroundImageUrlMobile: string
  backgroundImageUrlDesktop: string
  content: string
}

export default function TwoColumnsWithImageSection({
  top = '',
  title = '',
  backgroundImageUrlMobile,
  backgroundImageUrlDesktop,
  content = ''
}: TwoColumnsWithImageSectionProps) {
  const classes = useStyles({
    backgroundImageUrlMobile: backgroundImageUrlMobile,
    backgroundImageUrlDesktop: backgroundImageUrlDesktop
  })
  const theme = useTheme()
  const isBiggerMd = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <section className={classes.root} id="two-columns-with-images">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="overline">
              <Box pb={1} dangerouslySetInnerHTML={{ __html: top }} />
            </Typography>
            <Typography variant="h1">
              <Box
                dangerouslySetInnerHTML={{ __html: title }}
                mb={isBiggerMd ? 8 : 5}
              />
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
