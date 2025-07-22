/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const settingsCarousel = {
  dots: false,
  infinite: false,
  speed: 500,
  initialSlide: 0,
  arrows: true,
  slidesToShow: 2,
  nextArrow: <NextCustomArrow />,
  prevArrow: <PrevCustomArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '40px',
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: false,
        centerMode: false,
        dots: true
      }
    }
  ]
}
