import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  backgroundColor?: string
  backgroundImageUrlDesktop?: string
}
const useStyles = makeStyles<Theme, Type>((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: ({ backgroundColor = '' }) => backgroundColor,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(6),
      [theme.breakpoints.up(768)]: {
        paddingBottom: theme.spacing(4)
      },
      [theme.breakpoints.up('md')]: {
        backgroundImage: ({ backgroundImageUrlDesktop = '' }) =>
          `url(${backgroundImageUrlDesktop})`
      }
    },
    containerSlider: {
      paddingLeft: 0,
      '&.variantCarousel--0': {},
      '&.variantCarousel--1': {
        '& .slick-dots li button:before': {
          borderColor: '#929292'
        },
        '& .slick-dots li.slick-active button:before': {
          backgroundColor: '#929292'
        },
        '& .carousel-item': {
          padding: theme.spacing(0.5),
          [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2)
          }
        }
      },
      '&.variantCarousel--2': {
        '& .slick-dots li button:before': {
          borderColor: '#929292'
        },
        '& .slick-dots li.slick-active button:before': {
          backgroundColor: '#929292'
        },
        '& .carousel-item': {}
      },
      '& .carousel-item': {
        padding: theme.spacing(2)
      }
    }
  })
)

export default useStyles
