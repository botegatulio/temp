import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      backgroundSize: 'fill'
    },
    wrappText: {
      '& p:first-child': {
        marginTop: 0
      },
      [theme.breakpoints.up('md')]: {
        columnCount: 2,
        marginBottom: theme.spacing(2)
      }
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    imgContent: {
      width: '100%',
      height: 'auto',
      borderRadius: theme.shape.borderRadius * 2
    }
  })
)

export default useStyles
