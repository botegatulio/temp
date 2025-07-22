import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slider: {
      '&.slick-slider': {
        [theme.breakpoints.up('md')]: {}
      },
      '& .slick-slide ': {},
      '& .slick-arrow, & .slick-next': {
        color: 'white',
        zIndex: 9
      },
      '& .slick-prev': {
        left: theme.spacing(-2)
      },
      '& .slick-next': {
        right: theme.spacing(-2)
      },
      '& .slick-next:before, & .slick-prev:before': {
        content: "''"
      },
      '& .slick-dots li button:before': {
        content: '""',
        color: 'white',
        border: '3px solid white',
        borderRadius: '10px',
        width: theme.spacing(2),
        height: theme.spacing(2)
      },
      '& .slick-dots li.slick-active button:before': {
        backgroundColor: 'white'
      }
    },
    image: {
      width: '100%',
      height: 'auto'
    },
    buttonArrow: {
      minWidth: theme.spacing(4),
      padding: theme.spacing(0.5, 0)
    },
    carouselItem: {
      position: 'relative',
      '& img': {
        borderRadius: theme.shape.borderRadius * 2
      }
    },
    wrapperText: {
      position: 'absolute',
      right: 0,
      left: 0,
      bottom: 0,
      zIndex: 2,
      padding: theme.spacing(4, 4)
    }
  })
)

export default useStyles
