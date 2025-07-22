import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    lineBlack: {
      backgroundColor: '#000',
      color: '#ffffff',
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block',
        padding: theme.spacing(1, 0)
      },
      '& .MuiContainer-root': {
        [theme.breakpoints.up('lg')]: {
          width: '1122px',
          paddingRight: 0,
          paddingLeft: 0
        }
      }
    },
    paper: {
      zIndex: theme.zIndex.appBar,
      borderRadius: theme.shape.borderRadius * 3
    },
    flagButton: {
      minWidth: theme.spacing(3),
      padding: theme.spacing(1)
    },
    arrowButton: {
      minWidth: theme.spacing(2),
      padding: theme.spacing(1)
    },
    menuList: {
      width: theme.spacing(18)
    },
    menuItem: {
      justifyContent: 'space-between',
      '& img': {
        marginLeft: 'auto'
      },
      '& + & ': {
        borderTop: '1px solid #6C6C6C'
      }
    },
    circularFlag: {
      borderRadius: '50%',
      width: 20,
      height: 20,
      backgroundSize: 'cover',
      opacity: '0.7',
      '&:hover': {
        border: '2px solid white',
        opacity: '1'
      }
    },
    circularFlagActive: {
      border: '2px solid white',
      opacity: '1'
    }
  })
)

export default useStyles
