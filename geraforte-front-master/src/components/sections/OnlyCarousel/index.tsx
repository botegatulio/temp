import React from 'react'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import CarouselAlfa, { ImageProps } from 'components/Carousel/CarouselAlfa'
import { Grid } from '@material-ui/core'
import { settingsCarousel } from './settings'
import clsx from 'clsx'

type OnlyCarouselProps = {
  items: ImageProps[]
  backgroundColor?: string
  backgroundImageUrlDesktop?: string
  carouselSettinsVariant?: 0 | 1 | 2
  startAditional?: React.ReactNode
  aditionalContent?: React.ReactNode
  disableSectionElement?: boolean
  styleSection?: React.CSSProperties
}

const TextAndCarouselWhichManyItems = ({
  items,
  carouselSettinsVariant = 0,
  startAditional = '',
  aditionalContent = '',
  disableSectionElement = false,
  styleSection = {},
  backgroundColor = '',
  backgroundImageUrlDesktop = ''
}: OnlyCarouselProps) => {
  const classes = useStyles({ backgroundColor, backgroundImageUrlDesktop })
  const classNameVariant = `variantCarousel--${carouselSettinsVariant}`

  const conditionalRender = (children: JSX.Element): JSX.Element => {
    if (disableSectionElement) {
      return children
    }
    return (
      <section
        className={classes.root}
        id="text-and-carousel-which-many-items"
        style={styleSection}
      >
        {children}
      </section>
    )
  }

  return conditionalRender(
    <>
      {startAditional}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          className={clsx(classes.containerSlider, classNameVariant)}
        >
          <Grid item xs={12}>
            <CarouselAlfa
              settings={settingsCarousel[carouselSettinsVariant]}
              items={items}
            />
          </Grid>
        </Grid>
      </Container>
      {aditionalContent}
    </>
  )
}

export default TextAndCarouselWhichManyItems
