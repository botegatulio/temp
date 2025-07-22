import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    columnButtons: {},
    columnBackground: {
      backgroundColor: 'black',
      borderRadius: theme.shape.borderRadius * 2,
      overflow: 'hidden',
      marginTop: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        marginTop: 0
      }
    },
    containerButtons: {
      display: 'flex',
      margin: theme.spacing(0, -1),
      [theme.breakpoints.up('md')]: {
        flexDirection: 'column',
        margin: theme.spacing(0),
        height: '100%',
        alignContent: 'space-between'
      }
    },
    button: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      borderRadius: theme.shape.borderRadius * 2,
      position: 'relative',
      minWidth: '30%',
      margin: theme.spacing(0, 0.5),
      padding: theme.spacing(2, 1),
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: -10,
        width: 0,
        height: 0,
        left: '50%',
        borderStyle: 'solid',
        borderWidth: '10px 10px 0 10px',
        borderColor: '#ffffff transparent transparent transparent',
        transform: 'translate(-50%, 0)',
        [theme.breakpoints.up('md')]: {
          top: '50%',
          left: 'auto',
          bottom: 'auto',
          right: -14,
          transform: 'translate(0, -50%) rotate(-90deg)'
        }
      },
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(0),
        flexDirection: 'row',
        alignItems: 'center',
        height: '33%',
        marginRight: theme.spacing(4),
        '& + &': {
          marginTop: theme.spacing(3)
        }
      }
    },
    buttonActive: {
      backgroundColor: '#2e2e2e',
      color: 'white',
      '&:before': {
        borderColor: '#2e2e2e transparent transparent transparent'
      }
    },
    buttonIcon: {
      textAlign: 'center',
      paddingBottom: theme.spacing(1),
      color: '#e03936',
      [theme.breakpoints.up('md')]: {
        width: '33%',
        paddingBottom: 0
      }
    },
    buttonLabel: {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
        fontWeight: 600,
        fontSize: 18,
        marginLeft: theme.spacing(1)
      }
    },
    columnContent: {
      display: 'none',
      color: '#ffffff',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding: theme.spacing(2, 1),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4, 3),
        minHeight: 400,
        height: '100%'
      }
    },
    columnContentActive: {
      display: 'block'
    },
    containerTextContentAndButton: {
      padding: theme.spacing(0, 1),
      [theme.breakpoints.up('md')]: {
        height: '100%'
      }
    },
    columnContentButton: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        minHeight: '100%',
        flexDirection: 'column'
      }
    },
    buttonCTA: {
      [theme.breakpoints.up('md')]: {
        marginTop: 'auto',
        marginLeft: 'auto',
        maxWidth: theme.spacing(20)
      }
    },
    iconImage: {
      maxWidth: theme.spacing(4),
      height: 'auto',
      [theme.breakpoints.up('md')]: {
        maxWidth: theme.spacing(5.5)
      }
    },
    title: {
      position: 'relative',
      paddingBottom: theme.spacing(1.5),
      '&:after': {
        position: 'absolute',
        content: "''",
        left: 0,
        bottom: 0,
        backgroundColor: '#e03936',
        width: theme.spacing(8),
        height: theme.spacing(0.5)
      }
    }
  })
)

export default useStyles
