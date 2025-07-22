import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#e03936',
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url('/img/detail-square-cta-two.png')",
      backgroundPosition: 'center bottom',
      color: theme.palette.common.white,
      [theme.breakpoints.up('md')]: {
        backgroundColor: 'transparent',
        minHeight: theme.spacing(20),
        background: `url('/img/cta-two-background-desktop.png') center center no-repeat, linear-gradient(0deg, #f2f3f3 50%, #303030 50%)`
      }
    },
    button: {
      borderRadius: '50%',
      backgroundColor: theme.palette.common.white,
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: theme.palette.secondary.main
      }
    },
    container: {
      padding: theme.spacing(3, 2),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(6)
      }
    }
  })
)

export default useStyles
