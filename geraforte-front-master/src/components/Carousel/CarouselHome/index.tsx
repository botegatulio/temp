import React, { useEffect } from 'react'
import useStyles from './styles'
import clsx from 'clsx'
import Carousel from 'react-material-ui-carousel'
import { useState } from 'react'
import { useWindowSize } from 'useHooks/useWindowSize'

type ItemProps = {
  mobile: string
  desktop: string
  link: string
}

export type CarouselHomeProps = {
  items: ItemProps[]
  showDetail?: boolean
}

const CAROUSEL_INTERVAL = 5000

const CarouselHome = ({ items, showDetail = false }: CarouselHomeProps) => {
  const [width] = useWindowSize()
  const [imagesLoaded, setImageLoad] = useState<string[]>([])
  const classes = useStyles({
    minHeightMobile: width < 960 ? width * 1.3 + 30 : undefined
  })

  const classesSection = clsx({
    [classes.root]: true,
    [classes.detail]: showDetail
  })

  useEffect(() => {
    const addImageLoaded = (image: string) => {
      if (imagesLoaded.some((item) => item === image)) {
        return
      }
      setImageLoad((prev) => [...prev, image])
    }
    items.forEach((item) => {
      const myImage = new Image()
      myImage.src = item.mobile
      myImage.onload = () => {
        addImageLoaded(myImage.src)
      }
    })
  }, [items, imagesLoaded])

  return (
    <section className={classesSection} id="carousel-home">
      <Carousel
        interval={CAROUSEL_INTERVAL}
        autoPlay={true}
        stopAutoPlayOnHover={false}
        changeOnFirstRender={true}
        indicatorContainerProps={{
          className: 'indicators',
          style: {}
        }}
        IndicatorIcon={<div className={classes.indicatorCustom} />}
        activeIndicatorIconButtonProps={{
          style: {},
          className: classes.indicatorCustomActive
        }}
        navButtonsProps={{
          style: { display: 'none' },
          className: 'nav-buttons'
        }}
      >
        {items &&
          items.map((item, index) => {
            return (
              <div key={index} className={classes.item}>
                <a href={item.link || '#'}>
                  <picture>
                    <source srcSet={item.desktop} media="(min-width: 960px)" />
                    <img
                      src={item.mobile}
                      className={classes.image}
                      alt="Image"
                    />
                  </picture>
                </a>
              </div>
            )
          })}
      </Carousel>
    </section>
  )
}

export default CarouselHome
