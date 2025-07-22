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
    addLineUpMd: {
      [theme.breakpoints.up('md')]: {
        position: 'relative',
        '&:before': {
          position: 'absolute',
          top: 0,
          left: 0,
          content: '""',
          width: '40%',
          height: 10,
          backgroundColor: '#e03936',
          zIndex: 2
        }
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
    }
  })
)

export default useStyles
