import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Props = {
  backgroundImageMobile: string
  backgroundImageDesktop: string
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    root: {
      backgroundPosition: 'center top',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      backgroundColor: theme.palette.common.black,
      backgroundImage: ({ backgroundImageMobile }) =>
        `url(${backgroundImageMobile})`,
      [theme.breakpoints.up('md')]: {
        backgroundImage: ({ backgroundImageDesktop }) =>
          `url(${backgroundImageDesktop})`
      },
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
      minHeight: '250px',
      paddingTop: theme.spacing(6),
      color: '#fff',
      [theme.breakpoints.up('md')]: {
        minHeight: '500px'
      }
    },
    headText: {
      justifySelf: 'center',
      marginTop: 'auto',
      marginBottom: theme.spacing(6)
    },
    headerListButtons: {
      display: 'flex',
      paddingBottom: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(5)
      }
    }
  })
)

export default useStyles
