import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  minHeightMobile?: number
}

const HEIGHT_IMAGE_CAROUSEL = 520

const useStyles = makeStyles<Theme, Type>((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#F5F5F5',
      overflow: 'hidden',
      //border: '2px solid blue',
      minHeight: ({ minHeightMobile = 437 }) => minHeightMobile,
      [theme.breakpoints.up('md')]: {
        minHeight: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('/img/detail-red-desktop.png')",
        backgroundPosition: 'center bottom',
        paddingBottom: theme.spacing(4),
        height: HEIGHT_IMAGE_CAROUSEL + 40
      },
      '& .indicators': {
        position: 'absolute',
        bottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {}
      },
      '.CarouselItem': {
        textAlign: 'center'
      }
    },
    item: {
      textAlign: 'center',
      //border: '5px solid green',
      [theme.breakpoints.up('md')]: {}
    },
    image: {
      width: '100%',
      height: 'auto',
      [theme.breakpoints.up('md')]: {
        //border: '5px solid orange',
        height: HEIGHT_IMAGE_CAROUSEL,
        objectFit: 'cover',
        maxWidth: 1920
      }
    },
    indicatorCustom: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      margin: 'auto 5px',
      border: '1px solid #2e2e2e'
    },
    indicatorCustomActive: {
      backgroundColor: 'transparent',
      '& div': {
        backgroundColor: '#2e2e2e'
      }
    },
    detail: {
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: '50%',
        backgroundColor: '#e03936',
        height: 10,
        zIndex: 2,
        [theme.breakpoints.up('md')]: {
          right: '60%'
        }
      }
    }
  })
)

export default useStyles
