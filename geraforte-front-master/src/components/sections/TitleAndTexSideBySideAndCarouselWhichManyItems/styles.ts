import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0)
    },
    containerSlider: {
      paddingLeft: 0,
      '&.variantCarousel--0': {
        '& .slick-dots li button:before': {
          borderColor: '#1d1d1b'
        },
        '& .slick-dots li.slick-active button:before': {
          backgroundColor: '#1d1d1b'
        }
      },
      '& .carousel-item': {
        padding: theme.spacing(1)
      },
      '& .slick-slide': {
        [theme.breakpoints.up(768)]: {
          padding: theme.spacing(0, 3)
        }
      },

      [theme.breakpoints.up(768)]: {
        paddingTop: theme.spacing(4)
      }
    },
    wrapperItemCarousel: {
      '& .slick-slider': {
        margin: theme.spacing(0, -1)
      }
    },
    text: {
      '& p:first-child': {
        [theme.breakpoints.up(768)]: {
          marginTop: 0
        }
      }
    }
  })
)

export default useStyles
