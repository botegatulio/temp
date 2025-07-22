import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#303030',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url("/img/our-cases-bg-mobile.jpg")',
      backgroundPosition: 'center top',
      [theme.breakpoints.up('md')]: {
        backgroundImage: "url('/img/our-cases-bg-desktop.jpg')"
      }
    }
  })
)

export default useStyles
