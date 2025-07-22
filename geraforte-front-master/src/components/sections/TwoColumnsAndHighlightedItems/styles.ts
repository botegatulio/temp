import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  backgroundDesktop?: string
}

const useStyles = makeStyles<Theme, Type>((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        background: ({ backgroundDesktop }) => backgroundDesktop
      }
    },
    containerText: {
      paddingTop: theme.spacing(2)
    },
    wrappText: {
      '& p:first-child': {
        marginTop: 0
      },
      [theme.breakpoints.up('md')]: {
        columnCount: 2
      }
    },
    containerItems: {
      paddingTop: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(8)
      }
    },
    itemBox: {
      marginBottom: theme.spacing(4)
    }
  })
)

export default useStyles
