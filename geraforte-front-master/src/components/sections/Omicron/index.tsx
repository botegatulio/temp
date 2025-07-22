import {
  Box,
  Button,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import React, { CSSProperties } from 'react'
import useStyles from './styles'
import Slider from 'react-slick'
import CardNews, { CardNewsProps } from 'components/Cards/CardNews'
import { settingsCarousel } from './settingsCarousel'
import clsx from 'clsx'

export type OmicronProps = {
  overTitle?: string
  title?: string
  cta?: {
    href: string
    label: string
  }
  backgroundImageUrlMd?: string
  styleSection?: CSSProperties
  aditionalContent?: React.ReactNode
  backgroundLinear?: boolean
  items?: CardNewsProps[]
}

const Omicron = ({
  overTitle,
  title,
  cta,
  styleSection = {},
  aditionalContent,
  backgroundLinear = false,
  items
}: OmicronProps) => {
  const classes = useStyles()

  const theme = useTheme()
  const isMoreThenMd = useMediaQuery(theme.breakpoints.up('md'))

  const sectionStyle = clsx({
    [classes.root]: true,
    [classes.backgroundLinear]: backgroundLinear
  })

  return (
    <section className={sectionStyle} id="news" style={styleSection}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justify="space-between">
          <Grid item xs={12} md={6}>
            {overTitle && (
              <Typography variant="overline">
                <Box pb={1} dangerouslySetInnerHTML={{ __html: overTitle }} />
              </Typography>
            )}
            {title && (
              <Typography variant="h1">
                <Box pb={3} dangerouslySetInnerHTML={{ __html: title }} />
              </Typography>
            )}
          </Grid>
          {cta && (
            <Grid item xs={12} md={2}>
              <Hidden mdDown>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  disableElevation
                  href={cta.href}
                  style={{ textTransform: 'none' }}
                >
                  {cta.label}
                </Button>
              </Hidden>
            </Grid>
          )}
        </Grid>
        <Box>
          <div className={classes.containerSlider}>
            <Slider {...settingsCarousel} className={classes.slider}>
              {items &&
                items.length > 0 &&
                items.map((item, index) => (
                  <div className={classes.carouseItem} key={index}>
                    <CardNews {...item} />
                  </div>
                ))}
            </Slider>
          </div>

          {cta && !isMoreThenMd && (
            <Box pt={5} textAlign="center">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                disableElevation
                href={cta.href}
              >
                {cta.label}
              </Button>
            </Box>
          )}
        </Box>
      </Container>
      {aditionalContent}
    </section>
  )
}

export default Omicron
