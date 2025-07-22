import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#393939',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      backgroundPosition: 'center bottom',
      [theme.breakpoints.up('md')]: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: "url('/img/our-history-bg-desktop.jpg')"
      }
    },
    wrapperBox: {
      '& iframe': {
        minHeight: 400
      }
    },
    containerContent: {
      paddingTop: theme.spacing(4)
    },
    wrapperTextContent: {
      marginTop: theme.spacing(1),

      color: theme.palette.common.white,
      '& p:first-child ': {
        marginTop: 0
      }
    },
    contentColumn: {
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(3)
      }
    },
    title: {
      color: theme.palette.common.white,
      [theme.breakpoints.up('sm')]: {
        color: theme.palette.common.black
      }
    }
  })
)

export default useStyles
