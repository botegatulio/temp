import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#e0e0e0',
      paddingTop: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        backgroundImage: 'url("/img/segments-detail-bg-gallery-desktop.png")',
        backgroundPosition: 'calc(50% - 10px) 16px',
        backgroundRepeat: 'no-repeat'
      }
    },
    container: {
      maxWidth: 1170,
      margin: '0 auto'
    }
  })
)

export default useStyles
