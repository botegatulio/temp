import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    drawerProducts: {
      '& .MuiDrawer-paperAnchorTop': {
        top: '120px',
        overflow: 'hidden',
        backgroundColor: '#F5F5F5'
      }
    },
    container: {
      maxWidth: 800,
      margin: '0 auto'
    },
    menuItem: {
      minWidth: 260,
      '&:hover': {
        backgroundColor: theme.palette.common.white
      }
    }
  })
)

export default useStyles
