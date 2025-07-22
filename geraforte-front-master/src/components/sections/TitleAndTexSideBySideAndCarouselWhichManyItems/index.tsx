import React from 'react'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import CarouselAlfa, { ImageProps } from 'components/Carousel/CarouselAlfa'
import { Box, Grid, Typography } from '@material-ui/core'
import { settingsCarousel } from './settings'
import clsx from 'clsx'

type TitleAndTexSideBySideAndCarouselWhichManyItemsProps = {
  overlineText?: string
  title: string
  text: string
  items: ImageProps[]
  backgroundColor?: string
  backgroundImageUrl?: string
  carouselSettinsVariant?: 0
  colorText?: 'black' | 'white'
  aditionalContent?: React.ReactNode
}

const TitleAndTexSideBySideAndCarouselWhichManyItems = ({
  overlineText,
  title,
  text,
  items,
  backgroundColor,
  backgroundImageUrl,
  carouselSettinsVariant = 0,
  colorText = 'black',
  aditionalContent
}: TitleAndTexSideBySideAndCarouselWhichManyItemsProps) => {
  const classes = useStyles()
  const classNameVariant = `variantCarousel--${carouselSettinsVariant}`
  return (
    <section
      className={classes.root}
      id="text-and-carousel-which-many-items"
      style={{
        backgroundColor: backgroundColor ? backgroundColor : undefined,
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : undefined
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            {overlineText && (
              <Typography variant="overline">
                <Box mb={2}>{overlineText}</Box>
              </Typography>
            )}
            {title && (
              <Typography variant="h2">
                <Box
                  color={colorText == 'black' ? 'common.black' : 'common.white'}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body2" component="span">
              <Box
                fontWeight="fontWeightRegular"
                fontSize="body1.fontSize"
                color={colorText === 'black' ? 'common.black' : 'common.white'}
                dangerouslySetInnerHTML={{ __html: text }}
                className={classes.text}
              />
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          className={clsx(classes.containerSlider, classNameVariant)}
        >
          <Grid item xs={12} className={classes.wrapperItemCarousel}>
            <CarouselAlfa
              settings={settingsCarousel[carouselSettinsVariant]}
              items={items}
            />
          </Grid>
        </Grid>
      </Container>
      {aditionalContent}
    </section>
  )
}

export default TitleAndTexSideBySideAndCarouselWhichManyItems
