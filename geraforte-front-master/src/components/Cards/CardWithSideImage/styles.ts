import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('md')]: {}
    },
    card: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: theme.breakpoints.values.lg,
      margin: '0 auto',
      backgroundColor: '#2e2e2e',
      overflow: 'initial',
      color: '#ffffff',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row'
      }
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        width: '60%'
      }
    },
    content: {
      flex: '1 0 auto',
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(15),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        paddingBottom: theme.spacing(2)
      }
    },
    contentText: {
      fontSize: 16
    },
    cover: {
      width: '100%',
      minHeight: theme.spacing(20),
      [theme.breakpoints.up('md')]: {
        width: '40%',
        minHeight: theme.spacing(62),
        order: 1
      }
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
        width: theme.spacing(15),
        height: theme.spacing(15),
        top: theme.spacing(-4),
        left: theme.spacing(8)
      }
    },
    imageIcon: {
      maxWidth: theme.spacing(5),
      [theme.breakpoints.up('md')]: {
        maxWidth: theme.spacing(12)
      }
    },
    title: {
      position: 'relative',
      fontSize: 20,
      paddingBottom: theme.spacing(1),
      '&:before': {
        position: 'absolute',
        left: 0,
        bottom: 0,
        content: '""',
        width: theme.spacing(8),
        height: theme.spacing(0.5),
        backgroundColor: '#e03936',
        zIndex: 2
      },
      [theme.breakpoints.up('md')]: {
        fontSize: 26
      }
    }
  })
)

export default useStyles
