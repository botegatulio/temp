import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    socialNetWorks: {
      display: 'flex',
      lineHeight: 1,
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(2),
        justifyContent: 'center'
      }
    }
  })
)

export default useStyles
