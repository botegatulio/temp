import React from 'react'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import CarouselAlfa, { ImageProps } from 'components/Carousel/CarouselAlfa'
import { Box, Grid, Typography } from '@material-ui/core'
import { settingsCarousel } from './settings'
import clsx from 'clsx'

type TextAndCarouselWhichManyItemsProps = {
  overlineText?: string
  title: string
  text?: string
  items?: ImageProps[]
  backgroundColor?: string
  backgroundImageUrl?: string
  backgroundImageUrlDesktop?: string
  carouselSettinsVariant?: 0 | 1 | 2 | 3 | 4
  colorText?: 'black' | 'white'
  backgroundPosition?: string
  backgroundPositionDesktop?: string
  detailTop?: boolean
  detailBottom?: boolean
  paddingTopDesktop?: number
}

const TextAndCarouselWhichManyItems = ({
  overlineText,
  title,
  text,
  items,
  backgroundColor,
  backgroundImageUrl,
  backgroundImageUrlDesktop,
  carouselSettinsVariant = 0,
  colorText = 'black',
  backgroundPosition,
  backgroundPositionDesktop,
  detailTop = false,
  detailBottom = false,
  paddingTopDesktop
}: TextAndCarouselWhichManyItemsProps) => {
  const classes = useStyles({
    paddingTopDesktop,
    backgroundColor,
    backgroundImageUrl,
    backgroundImageUrlDesktop,
    backgroundPosition,
    backgroundPositionDesktop
  })
  const classNameVariant = `variantCarousel--${carouselSettinsVariant}`

  const contentStyle = clsx({
    [classes.root]: true,
    [classes.rootWithDetailTop]: detailTop,
    [classes.rootWithDetailBottom]: detailBottom
  })

  return (
    <section className={contentStyle} id="text-and-carousel-which-many-items">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            {overlineText && (
              <Typography variant="overline">
                <Box mb={1}>{overlineText}</Box>
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
          {text && (
            <Grid item xs={12} className={classes.subText}>
              <Box
                fontWeight="fontWeightRegular"
                fontSize="body1.fontSize"
                color={colorText == 'black' ? 'common.black' : 'common.white'}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </Grid>
          )}
        </Grid>
        <Grid
          container
          spacing={2}
          className={clsx(classes.containerSlider, classNameVariant)}
        >
          <Grid item xs={12}>
            {items && items?.length < 3 && (
              <Box
                display="flex"
                justifyContent="center"
                className={classes.boxImagesLowerstThree}
              >
                {items.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item.url}
                      className={clsx(classes.image, {
                        [classes.imageOnly]: items.length === 1
                      })}
                    />
                  )
                })}
              </Box>
            )}
            {items && items?.length >= 3 && (
              <CarouselAlfa
                settings={settingsCarousel[carouselSettinsVariant]}
                items={items ? items : undefined}
              />
            )}
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default TextAndCarouselWhichManyItems
