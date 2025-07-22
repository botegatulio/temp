import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      borderRadius: theme.shape.borderRadius * 2,
      padding: theme.spacing(2, 1),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4, 12.5)
      }
    },
    sideMenuShortCuts: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-end'
      }
    },
    button: {
      backgroundColor: '#e0e0e0',
      width: 30,
      height: 30,
      margin: theme.spacing(0, 3),
      borderRadius: theme.shape.borderRadius * 2,
      [theme.breakpoints.up('md')]: {
        width: 100,
        height: 100
      }
    },
    text: {
      fontSize: 20,
      [theme.breakpoints.up('md')]: {
        fontSize: 24
      }
    }
  })
)

export default useStyles
