import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerSlider: {
      marginLeft: theme.spacing(-2),
      marginRight: theme.spacing(-2),
      paddingTop: theme.spacing(0)
    },
    slider: {
      '& .slick-dots li button:before': {
        content: '""',
        color: 'white',
        border: '3px solid #504f50',
        borderRadius: '10px',
        width: theme.spacing(2),
        height: theme.spacing(2)
      },
      '& .slick-dots li.slick-active button:before': {
        backgroundColor: '#504f50'
      }
    },
    carouseItem: {
      paddingTop: theme.spacing(6),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(3),
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(1.5),
        paddingLeft: theme.spacing(1.5)
      }
    },
    iconButton: {
      position: 'absolute',
      display: 'flex',
      top: 15,
      left: theme.spacing(4),
      backgroundColor: '#e03936',
      zIndex: 9,
      width: theme.spacing(8),
      height: theme.spacing(8),
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconImage: {
      maxWidth: theme.spacing(3),
      height: 'auto'
    }
  })
)

export default useStyles
