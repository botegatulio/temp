import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'calc(50% + 250px) 0'
      },
      '& .slick-track': {
        display: 'flex !important'
      },
      '& .slick-slide': {
        height: 'auto'
      },
      '& .slick-slide > div': {
        display: 'flex',
        minHeight: '100%',
        paddingBottom: 20
      }
    },
    backgroundLinear: {
      position: 'relative',
      '&:before': {
        position: 'absolute',
        content: '""',
        top: 147,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: '#dcdcdc',
        [theme.breakpoints.up('md')]: {
          top: 230
        }
      }
    },
    containerSlider: {
      paddingBottom: theme.spacing(2),
      marginLeft: theme.spacing(-3),
      marginRight: theme.spacing(-2),
      [theme.breakpoints.up('md')]: {
        marginLeft: 0,
        marginRight: 0
      }
    },
    carouseItem: {
      minHeight: '100%',
      [theme.breakpoints.up('md')]: {
        padding: 10
      }
    },
    rootCard: {
      maxWidth: 345,
      marginRight: 20
    },
    slider: {
      paddingLeft: 0,
      '& .slick-dots li button:before': {
        content: '""',
        border: '3px solid #2e2e2e',
        borderRadius: '10px',
        width: theme.spacing(2),
        height: theme.spacing(2)
      },
      '& .slick-dots li.slick-active button:before': {
        backgroundColor: '#2e2e2e'
      }
    }
  })
)

export default useStyles
