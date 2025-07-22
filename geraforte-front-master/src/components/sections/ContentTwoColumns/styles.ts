import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0)
    },
    itemTitle: {
      display: 'block',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    itemContent: {
      '& p:first-child': {
        marginTop: 0
      },
      [theme.breakpoints.up('md')]: {
        columnCount: 2,
        columnGap: theme.spacing(4),
        columnfill: 'balance',
        '-moz-column-fill': 'balance'
      }
    }
  })
)

export default useStyles
