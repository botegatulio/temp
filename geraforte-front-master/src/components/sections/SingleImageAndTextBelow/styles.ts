import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(8, 0)
      }
    },
    text: {
      [theme.breakpoints.up('md')]: {
        columnCount: 2,
        marginTop: theme.spacing(2),
        columnGap: theme.spacing(4),
        '& p:first-child': {
          marginTop: 0
        }
      }
    }
  })
)

export default useStyles
