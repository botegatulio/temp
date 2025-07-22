import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideMenuShortCuts: {
      display: 'flex',
      paddingLeft: theme.spacing(2),
      lineHeight: 1,
      backgroundColor: '#e3e3e3'
    }
  })
)

export default useStyles
