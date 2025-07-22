import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
    },
    wrappText: {
      '& p:first-child': {
        marginTop: 0
      },
      [theme.breakpoints.up('md')]: {
        columnCount: 2
      }
    },
    containerAditionalContent: {
      paddingTop: theme.spacing(4)
    },
    imageAdtionalContent: {
      maxWidth: '100%',
      height: 'auto'
    }
  })
)

export default useStyles
