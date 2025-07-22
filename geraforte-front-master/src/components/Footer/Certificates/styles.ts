import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    certificates: {
      display: 'flex',
      paddingTop: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        justifyContent: 'center'
      }
    },
    image: {
      maxWidth: 120,
      margin: theme.spacing(0, 2)
    }
  })
)

export default useStyles
