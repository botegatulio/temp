import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      backgroundColor: theme.palette.common.black,
      position: 'relative',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      '&:before': {
        position: 'absolute',
        top: 0,
        right: '50%',
        left: 0,
        content: '""',
        height: theme.spacing(0.5),
        backgroundColor: '#e03936',
        zIndex: 2,
        [theme.breakpoints.up('md')]: {
          right: '60%',
          height: theme.spacing(1.25)
        }
      }
    },
    header: {
      justifyContent: 'center',
      minHeight: 200,
      paddingTop: theme.spacing(6),
      color: '#fff',
      [theme.breakpoints.up('sm')]: {
        minHeight: 270 // <-- AJUSTE 1: Reduzido de 400 para 320
      }
    },
    headerWithBottomButons: {
      justifyContent: 'space-between',
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(8) // <-- AJUSTE 2: Reduzido de 20 para 12 (96px)
      }
    },
    headText: {},
    headTextTop: {
      marginBottom: theme.spacing(1)
    },
    headerListButtons: {
      display: 'flex',
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(5)
      }
    },
    headerButtons: {
      fontSize: 10,
      fontWeight: 'normal',
      textAlign: 'center',
      flexGrow: 1,
      '& + & ': {
        marginLeft: 4
      },
      '&.MuiButton-containedSecondary': {
        backgroundColor: '#e03936',
        '&:before': {
          content: '""',
          position: 'absolute',
          bottom: -10,
          width: 0,
          height: 0,
          borderStyle: 'solid',
          borderWidth: '10px 10px 0 10px',
          borderColor: '#e03936 transparent transparent transparent'
        }
      },
      '&.MuiButton-outlined': {
        borderColor: '#ffffff',
        color: '#ffffff'
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: 12,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
      }
    },

    // NOVAS CLASSES PARA IMAGENS
    imageMobile: {
      display: 'block',
      [theme.breakpoints.up('lg')]: {
        display: 'none'
      }
    },
    imageDesktop: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'block'
      }
    }
  })
})

export default useStyles
