import { Box, Grid, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import CardImageWithThumbTop, {
  CardImageWithThumbTopProps
} from 'components/Cards/CardImageWithThumbTop'
import React from 'react'
import useStyles from './styles'

type gridItemsConfig = {
  sm: 6 | 4
  md?: 6 | 4
}

type HeaderAndSomeItemsProps = {
  topText?: string
  title: string
  backgroundColor?: string
  backgroundRepeat?: string
  backgroundImage?: string
  backgroundPosition?: string
  backgroundImageDesktop?: string
  backgroundPositionDesktop?: string
  items?: CardImageWithThumbTopProps[]
  gridItemsConfig?: gridItemsConfig
  disableTopThumb?: boolean
  marginTopCards?: number
}

const HeaderAndSomeItems = ({
  topText,
  title,
  items,
  backgroundColor,
  backgroundRepeat,
  backgroundImage,
  backgroundPosition,
  backgroundImageDesktop,
  backgroundPositionDesktop,
  gridItemsConfig = { sm: 6 },
  disableTopThumb = false,
  marginTopCards = 6
}: HeaderAndSomeItemsProps) => {
  const classes = useStyles({
    backgroundRepeat,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundImageDesktop,
    backgroundPositionDesktop
  })
  return (
    <section className={classes.root} id="header-and-some-items">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item md={6}>
            {topText && (
              <Typography variant="overline">
                <Box dangerouslySetInnerHTML={{ __html: topText }} mb={1} />
              </Typography>
            )}
            {title && (
              <Typography variant="h1">
                <Box pb={1} dangerouslySetInnerHTML={{ __html: title }} />
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          {items &&
            items.map((item, index) => {
              return (
                <Grid item xs={12} key={index} {...gridItemsConfig}>
                  <Box mt={marginTopCards}>
                    <CardImageWithThumbTop
                      imageUrl={item.imageUrl}
                      topThumbUrl={item.topThumbUrl}
                      disableTopThumb={disableTopThumb}
                      href={item.href}
                    />
                  </Box>
                </Grid>
              )
            })}
        </Grid>
      </Container>
    </section>
  )
}

export default HeaderAndSomeItems
