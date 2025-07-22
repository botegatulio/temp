import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  backgroundDesktop?: string
}

const useStyles = makeStyles<Theme, Type>((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(4),
        paddingTop: theme.spacing(8),
        background: ({ backgroundDesktop }) => backgroundDesktop
      },
      '& .MuiGrid-item + .MuiGrid-item': {
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
          marginTop: 0
        }
      }
    }
  })
)

export default useStyles
