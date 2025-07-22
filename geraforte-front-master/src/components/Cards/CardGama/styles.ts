import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#2e2e2e',
      color: theme.palette.common.white,
      position: 'relative',
      minHeight: '100%',
      borderRadius: theme.shape.borderRadius * 2
    },
    content: {
      paddingTop: theme.spacing(8),
      paddingRight: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(12),
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(4)
      }
    },
    title: {
      position: 'relative',
      paddingBottom: theme.spacing(2),
      '&:before': {
        position: 'absolute',
        left: 0,
        bottom: 0,
        content: '""',
        width: theme.spacing(8),
        height: theme.spacing(0.5),
        backgroundColor: '#e03936',
        zIndex: 2
      }
    },
    text: {
      padding: theme.spacing(1, 1, 3, 1)
    },
    wrapperIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: theme.spacing(-2),
      left: theme.spacing(1),
      backgroundColor: '#e03936',
      width: theme.spacing(8),
      height: theme.spacing(8),
      borderRadius: theme.shape.borderRadius,
      [theme.breakpoints.up('md')]: {
        width: theme.spacing(12),
        height: theme.spacing(12),
        top: theme.spacing(-4),
        left: theme.spacing(4)
      }
    },
    icon: {
      maxWidth: theme.spacing(3),
      height: 'auto',
      [theme.breakpoints.up('md')]: {
        maxWidth: theme.spacing(4)
      }
    }
  })
)

export default useStyles
