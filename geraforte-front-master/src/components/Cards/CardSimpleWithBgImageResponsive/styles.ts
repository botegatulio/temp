import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: theme.shape.borderRadius * 2
    },
    card: {
      position: 'relative',
      flexDirection: 'column',
      transition: 'all .25s linear',
      borderRadius: theme.shape.borderRadius * 2,
      '&:hover': {
        boxShadow: theme.shadows[7]
      }
    },
    wrapperText: {
      position: 'absolute',
      bottom: theme.spacing(3),
      left: theme.spacing(2),
      right: theme.spacing(2),
      color: '#ffffff',
      [theme.breakpoints.up('md')]: {
        bottom: theme.spacing(4),
        left: theme.spacing(4),
        right: theme.spacing(4)
      }
    },
    title: {
      fontSize: 20,
      [theme.breakpoints.up('md')]: {
        fontSize: 24
      }
    },
    divider: {
      backgroundColor: theme.palette.secondary.dark,
      maxWidth: theme.spacing(5),
      height: 3,
      margin: theme.spacing(1.5, 0)
    },
    description: {
      color: 'rgba(255,255,255,0.78)',
      paddingBottom: theme.spacing(2),
      fontSize: 14,
      [theme.breakpoints.up('md')]: {
        fontSize: 16
      }
    }
  })
)

export default useStyles
