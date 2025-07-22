import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapperTopBar: {
      flexGrow: 1
    },
    wrapperLine: {
      margin: '0 auto',
      maxWidth: theme.breakpoints.values.lg,
      textAlign: 'right'
    },
    AppBar: {
      position: 'static',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        paddingTop: 0,
        position: 'fixed',
        zIndex: 9999
      }
    },
    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        width: '100%',
        margin: '0 auto',
        paddingTop: theme.spacing(2)
      },
      [theme.breakpoints.up('lg')]: {
        width: '1122px',
        paddingRight: 0,
        paddingLeft: 0
      }
    },
    buttonShowDrawerMenu: {
      marginRight: 0,
      marginLeft: 'auto',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    logoImage: {
      width: theme.spacing(22),
      height: 'auto',
      [theme.breakpoints.up('lg')]: {
        width: theme.spacing(28)
      }
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        paddingLeft: theme.spacing(0)
      }
    },
    itemMenuDesktop: {
      '&.MuiButton-root': {
        padding: theme.spacing(1.5, 0.6)
      },
      [theme.breakpoints.up('lg')]: {
        '&.MuiButton-root': {
          padding: theme.spacing(1.5, 1.7)
        }
      }
    },
    sectionDesktopItemLabel: {
      fontSize: '14px important!',
      fontWeight: 400
    },
    topDrawerOptions: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: theme.spacing(2, 3)
    },
    sideMenuShortCutsAlignLeft: {
      display: 'flex',
      alignContent: 'center'
    },
    shortListContacts: {
      display: 'none',
      justifyContent: 'flex-end',
      paddingTop: theme.spacing(0.5),
      paddingBottom: theme.spacing(0.5),
      [theme.breakpoints.up('lg')]: {
        display: 'flex'
      }
    },
    highlighted: {
      marginLeft: theme.spacing(1),
      padding: '18px 16px !important',
      [theme.breakpoints.up(1024)]: {
        marginLeft: theme.spacing(4)
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(4),
        padding: '18px 36px !important'
      }
    },
    arrow: {
      position: 'absolute',
      content: "'>'",
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      color: '#2e2e2e'
    }
  })
)

export default useStyles
