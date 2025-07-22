import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    shortListContacts: {
      display: 'none',
      justifyContent: 'flex-end',
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    shortListContactsItem: {
      width: 'auto'
    },
    shortListContactsItemIcon: {
      minWidth: '40px',
      color: theme.palette.common.white
    },
    shortListContactsItemText: {
      color: theme.palette.common.white
    }
  })
)

export default useStyles
