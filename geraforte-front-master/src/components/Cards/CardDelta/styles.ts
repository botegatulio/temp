import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: theme.spacing(15),
      backgroundColor: '#2e2e2e',
      color: theme.palette.common.white,
      position: 'relative',
      borderRadius: theme.shape.borderRadius * 2
    },
    content: {
      minWidth: '66.66%',
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(3, 3),
      [theme.breakpoints.up('md')]: {}
    },
    title: {
      paddingBottom: theme.spacing(2),
      color: theme.palette.common.white
    },
    wrapperIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.shape.borderRadius,
      minWidth: '33.33%',
      color: '#e03936',
      '& img': {
        width: 'auto',
        height: '100%',
        maxHeight: theme.spacing(5)
      }
    }
  })
)

export default useStyles
