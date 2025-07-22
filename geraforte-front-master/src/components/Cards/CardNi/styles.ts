import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#ffffff',
      borderRadius: theme.shape.borderRadius * 2,
      overflow: 'hidden'
    },
    itemImage: {
      position: 'relative',
      minHeight: theme.spacing(30),
      [theme.breakpoints.up('sm')]: {
        minHeight: theme.spacing(40)
      }
    },
    imageBackground: {
      width: 'auto',
      height: 'auto',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      backgroundSize: 'cover'
    },
    itemContent: {
      backgroundColor: '#2e2e2e',
      padding: theme.spacing(2, 3),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(7, 8)
      }
    },
    divider: {
      height: 2,
      backgroundColor: '#e03936',
      maxWidth: theme.spacing(6),
      margin: theme.spacing(2, 0)
    },
    cta: {
      textTransform: 'initial',
      '&, &:hover': {
        textDecoration: 'underline'
      }
    }
  })
)

export default useStyles
