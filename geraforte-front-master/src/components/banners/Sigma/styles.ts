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
    }
  })
)

export default useStyles
