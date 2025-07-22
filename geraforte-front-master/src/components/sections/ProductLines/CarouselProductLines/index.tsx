import React from 'react'
import useStyles from './styles'
import Slider from 'react-slick'
import { settingsCarousel } from './settings'
import { Box } from '@material-ui/core'
import CardSimpleWithBgImageResponsive, {
  CardSimpleWithBgImageResponsiveProps
} from 'components/Cards/CardSimpleWithBgImageResponsive'

type CardItemExtendend = {
  iconUrl: string
} & CardSimpleWithBgImageResponsiveProps

export type CarouselProductLinesProps = {
  items: CardItemExtendend[]
}

const CarouselProductLines = ({ items }: CarouselProductLinesProps) => {
  const classes = useStyles()
  return (
    <div className={classes.containerSlider}>
      <Slider {...settingsCarousel} className={classes.slider}>
        {items &&
          items.map((item, index) => {
            return (
              <div className={classes.carouseItem} key={index}>
                <Box className={classes.iconButton}>
                  {item.iconUrl && (
                    <img src={item.iconUrl} className={classes.iconImage} />
                  )}
                </Box>
                <CardSimpleWithBgImageResponsive {...item} />
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default CarouselProductLines
