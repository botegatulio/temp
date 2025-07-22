import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    wrapperLine: {
      margin: '0 auto',
      maxWidth: theme.breakpoints.values.lg,
      textAlign: 'right'
    },
    topDrawerOptions: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: theme.spacing(1),
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      backgroundColor: '#e3e3e3'
    },
    wrapperLogoDrawer: {
      display: 'flex',
      alignItems: 'center'
    },
    sideMenuShortCutsAlignLeft: {
      display: 'flex',
      alignContent: 'center'
    },
    logoDrawer: {
      width: theme.spacing(25),
      height: 'auto'
    },
    listSideMenu: {
      width: 250
    },
    fullList: {
      width: 'auto'
    },
    listMenu: {
      backgroundColor: '#e3e3e3',
      paddingTop: 0,
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1)
    },
    listMenuItem: {
      fontWeight: 700
    },
    nestedItems: {
      paddingTop: 0,
      paddingBottom: 0
    },
    buttonFlag: {
      padding: theme.spacing(1, 2),
      borderWidth: 0
    },
    buttonFlagActive: {
      padding: theme.spacing(1, 2),
      backgroundColor: '#F1F0F0'
    },
    containerFlagsAndLabel: {
      flexDirection: 'column'
    },
    containerFlags: {
      display: 'flex',
      minWidth: '100%',
      justifyContent: 'space-between',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2)
    },
    labelLanguage: {
      display: 'block',
      minWidth: '100%'
    }
  })
)

export default useStyles
