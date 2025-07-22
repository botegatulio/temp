import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  paddingTopDesktop?: number
  backgroundColor?: string
  backgroundImageUrl?: string
  backgroundPosition?: string
  backgroundImageUrlDesktop?: string
  backgroundPositionDesktop?: string
}

const useStyles = makeStyles<Theme, Type>((theme: Theme) => {
  return createStyles({
    root: {
      padding: theme.spacing(4, 0),
      paddingBottom: theme.spacing(7),
      backgroundRepeat: 'no-repeat',
      backgroundColor: ({ backgroundColor = '' }) => backgroundColor,
      backgroundImage: ({ backgroundImageUrl = '' }) => backgroundImageUrl,
      backgroundPosition: ({ backgroundPosition = '' }) => backgroundPosition,
      [theme.breakpoints.up('md')]: {
        paddingTop: ({ paddingTopDesktop }) =>
          paddingTopDesktop && theme.spacing(paddingTopDesktop),
        paddingBottom: theme.spacing(5),
        backgroundImage: ({ backgroundImageUrlDesktop }) =>
          backgroundImageUrlDesktop,
        backgroundPosition: ({ backgroundPositionDesktop }) =>
          backgroundPositionDesktop
      }
    },
    rootWithDetailTop: {
      position: 'relative',
      '&:after': {
        position: 'absolute',
        content: "''",
        left: 0,
        top: 0,
        border: '5px solid #e03936',
        width: '33%'
      }
    },
    rootWithDetailBottom: {
      position: 'relative',
      '&:before': {
        position: 'absolute',
        content: "''",
        right: 0,
        bottom: 0,
        border: '5px solid #e03936',
        width: '33%'
      }
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: theme.shape.borderRadius * 2,
      margin: theme.spacing(2),
      [theme.breakpoints.up(768)]: {
        maxWidth: '33%'
      }
    },
    imageOnly: {
      maxWidth: '100%',
      [theme.breakpoints.up('md')]: {
        maxWidth: '33%'
      }
    },
    containerSlider: {
      paddingLeft: 0,
      '&.variantCarousel--0': {},
      '&.variantCarousel--1, &.variantCarousel--2': {
        '& .slick-dots li button:before': {
          borderColor: '#929292'
        },
        '& .slick-dots li.slick-active button:before': {
          backgroundColor: '#929292'
        }
      },
      '&.variantCarousel--3': {
        '& .slick-dots li button:before': {
          borderColor: '#ffffff'
        },
        '& .slick-dots li.slick-active button:before': {
          backgroundColor: '#ffffff'
        }
      },
      '&.variantCarousel--4': {
        '& .slick-dots li button:before': {
          borderColor: '#929292'
        },
        '& .slick-dots li.slick-active button:before': {
          backgroundColor: '#929292'
        }
      },
      '& .carousel-item': {
        padding: theme.spacing(2)
      },

      [theme.breakpoints.up(768)]: {
        paddingTop: theme.spacing(4)
      }
    },
    subText: {
      '& p': {
        marginTop: 0
      },
      [theme.breakpoints.up('md')]: {
        columnCount: 2
      }
    },
    boxImagesLowerstThree: {
      paddingRight: 14,
      paddingLeft: 14
    }
  })
})

export default useStyles
