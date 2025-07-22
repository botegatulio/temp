/* eslint-disable @typescript-eslint/no-explicit-any */
import { Settings } from 'react-slick'
import { Button } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import useStyles from './styles'

const NextCustomArrow = (props: any) => {
  const { className, style, onClick } = props
  const classes = useStyles()
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        width: 'auto'
      }}
      onClick={onClick}
    >
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disableElevation
        className={classes.buttonArrow}
      >
        <ChevronRightIcon />
      </Button>
    </div>
  )
}
const PrevCustomArrow = (props: any) => {
  const { className, style, onClick } = props
  const classes = useStyles()
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        width: 'auto'
      }}
      onClick={onClick}
    >
      <Button
        variant="contained"
        color="secondary"
        size="large"
        disableElevation
        className={classes.buttonArrow}
      >
        <ChevronLeftIcon />
      </Button>
    </div>
  )
}

export const settingsCarousel: Settings = {
  className: 'center',
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 2,
  nextArrow: <NextCustomArrow />,
  prevArrow: <PrevCustomArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}
