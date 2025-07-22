import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      backgroundColor: '#f5f5f5',
      padding: theme.spacing(2),
      paddingTop: 0,
      borderRadius: theme.shape.borderRadius * 2,
      boxShadow: theme.shadows[4],
      minHeight: '100%',
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3),
        paddingTop: 0
      }
    },
    wrapperIcon: {
      backgroundColor: '#434343',
      width: theme.spacing(9),
      height: theme.spacing(9),
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius * 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: theme.spacing(2),
      transform: 'translateY(-50%)',
      '& .MuiSvgIcon-root': {
        fill: theme.palette.common.white
      },
      '& img': {
        maxWidth: theme.spacing(3.5)
      }
    },
    wrapperText: {
      paddingTop: theme.spacing(6)
    }
  })
)

export default useStyles
