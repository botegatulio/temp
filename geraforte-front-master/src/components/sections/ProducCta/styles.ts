import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#E3E3E3',
      backgroundRepeat: 'repeat-x',
      backgroundImage: "url('/img/cta-1-bg-mobile.png')",
      backgroundPosition: 'center center',
      color: theme.palette.common.white,
      [theme.breakpoints.up('lg')]: {
        minHeight: theme.spacing(20),
        background: `url('/img/bg-section-cta-with-rectacle-detail.png') center center no-repeat, linear-gradient(0deg, #E3E3E3 50%, #F5F5F5 30%)`
      }
    },
    button: {
      borderRadius: '50%',
      backgroundColor: '#e03936',
      marginLeft: 'auto',
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main
      }
    },
    container: {
      padding: theme.spacing(3, 2),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(5)
      }
    }
  })
)

export default useStyles
