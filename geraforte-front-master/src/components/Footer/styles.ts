import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      backgroundColor: '#c50d0b',
      color: '#fff',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      backgroundRepeat: 'no-repeat',
      backgroundImage: "url('/img/rodape_detalhe-mobile.png')",
      backgroundPosition: 'center top',
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(6),
        backgroundImage: "url('/img/rodape_detalhe.png')"
      },
      '& .iframe-certificated': {
        borderWidth: 0
      }
    },
    detail: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 30
    },
    paragraph: {
      fontSize: 16
    },
    wrapperWhatsAppIcon: {
      background: '#20B038',
      position: 'fixed',
      right: 32,
      bottom: 32,
      width: 54,
      height: 54,
      borderRadius: '50%',
      fill: 'white',
      zIndex: 9999,
      '&:hover': {
        backgroundColor: '#20B038'
      },
      '& svg': {
        fill: 'white'
      }
    },
    whatsAppIcon: {
      width: '100%',
      height: 'auto'
    }
  })
)

export default useStyles
