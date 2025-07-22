import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: '#434343',
      paddingTop: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(5),
        borderRadius: theme.shape.borderRadius * 2
      }
    },
    text: {
      fontSize: 16,
      '& p': {
        marginTop: 0
      },
      [theme.breakpoints.up('md')]: {
        columnCount: 2,
        columnFill: 'balance',
        columnGap: theme.spacing(4)
      }
    },
    containerBanner: {
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(5)
      }
    },
    itemBanner: {}
  })
)

export default useStyles
