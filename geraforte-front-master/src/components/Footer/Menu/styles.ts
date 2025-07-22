import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360
    },
    item: {
      color: theme.palette.common.white
    },
    divider: {
      backgroundColor: '#d32422'
    }
  })
)

export default useStyles
