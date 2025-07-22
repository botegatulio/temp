import React from 'react'
import Container from '@material-ui/core/Container'
import useStyles from './styles'
import Slider from 'react-slick'
import { Grid } from '@material-ui/core'
import { settingsCarousel } from './settings'

export type ImageProps = {
  url: string
  text?: {
    overTitle: string
    title: string
  }
}

type CarouselAboutProps = {
  items: ImageProps[]
}

const CarouselAbout = ({ items }: CarouselAboutProps) => {
  const classes = useStyles()

  return (
    <section className={classes.root} id="carousel-about">
      <Container maxWidth="lg">
        <Grid container spacing={2} className={classes.containerSlider}>
          <Grid item xs={12}>
            <Slider {...settingsCarousel} className={classes.slider}>
              {items &&
                items.map((item, index) => {
                  return (
                    <div
                      key={`item-carousel-about-${index}`}
                      className={classes.wrapperImage}
                    >
                      <img src={item.url} className={classes.image} />
                    </div>
                  )
                })}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default CarouselAbout
