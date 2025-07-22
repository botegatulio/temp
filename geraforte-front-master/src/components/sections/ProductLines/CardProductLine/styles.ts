import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      maxWidth: 345,
      boxShadow: '4px 4px 10px #e5e6e6',
      marginBottom: 10
    },
    fiCardContent: {
      color: theme.palette.common.white,
      background: 'linear-gradient(45deg, #000000 5%, transparent 40%)',
      position: 'absolute',
      bottom: 0,
      paddingTop: theme.spacing(20),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3, 3)
      }
    },
    fiCardContentTextSecondary: {
      color: 'rgba(255,255,255,0.78)',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    fiCardActionArea: {
      height: 350
    },
    divider: {
      height: 2,
      backgroundColor: theme.palette.secondary.main,
      maxWidth: theme.spacing(6)
    }
  })
)

export default useStyles
