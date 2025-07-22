import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#f4f5f5',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    }
  })
)

export default useStyles
