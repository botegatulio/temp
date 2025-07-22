import React from 'react'
import useStyles from './styles'
import Slider, { Settings } from 'react-slick'
import { settingsCarousel } from './settings'
import { SmallDivider } from 'components/DividerCustom'
import { Box } from '@material-ui/core'
import clsx from 'clsx'

export type ImageProps = {
  url: string
  text?: {
    overTitle: string
    title: string
  }
}

type CarouselAlfaProps = {
  items?: ImageProps[]
  settings?: Settings
}

const CarouselAlfa = ({ items, settings }: CarouselAlfaProps) => {
  const classes = useStyles()
  const mySettings = settings
    ? Object.assign(settingsCarousel, settings)
    : settingsCarousel

  const classesCarouselItem = clsx({
    [classes.carouselItem]: true,
    'carousel-item': true
  })

  return (
    <Slider {...mySettings} className={classes.slider}>
      {items &&
        items.map((item) => {
          return (
            <div key={item.url} className={classesCarouselItem}>
              <img src={item.url} className={classes.image} />
              {item.text && (
                <div className={classes.wrapperText}>
                  <Box
                    fontSize="h6.fontSize"
                    color="common.white"
                    dangerouslySetInnerHTML={{ __html: item.text.overTitle }}
                    mb={1}
                  />
                  <SmallDivider />
                  <Box
                    fontSize="subtitle2.fontSize"
                    color="common.white"
                    dangerouslySetInnerHTML={{ __html: item.text.title }}
                    mt={1}
                  />
                </div>
              )}
            </div>
          )
        })}
    </Slider>
  )
}

export default CarouselAlfa
