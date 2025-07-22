import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(8),
      backgroundColor: '#f5f5f5',
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url('/img/detail-product-line.png')",
      backgroundPosition: ' calc(50% + 450px) 0',
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
      }
    },
    iconButton: {
      position: 'absolute',
      top: theme.spacing(-1),
      left: theme.spacing(4),
      zIndex: 9
    }
  })
)

export default useStyles
