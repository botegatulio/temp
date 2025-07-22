import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rootCard: {
      height: '100%',
      marginRight: 20,
      marginBottom: theme.spacing(2)
    },
    cardContent: {
      position: 'relative',
      '&:before': {
        position: 'absolute',
        top: -2,
        left: 20,
        content: '""',
        width: theme.spacing(8),
        height: theme.spacing(0.5),
        backgroundColor: theme.palette.secondary.main,
        zIndex: 2
      }
    }
  })
)

export default useStyles
