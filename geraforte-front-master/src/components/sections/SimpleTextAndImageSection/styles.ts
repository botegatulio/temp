import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Props = {
  backgroundImageMobile: string
  backgroundImageDesktop: string
}
const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      position: 'relative',
      backgroundImage: ({ backgroundImageMobile }) =>
        `url(${backgroundImageMobile})`,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(12, 0),
        backgroundImage: ({ backgroundImageDesktop }) =>
          `url(${backgroundImageDesktop})`,
        '&.smal-container': {
          padding: theme.spacing(10, 0)
        }
      },
      '&:before': {
        position: 'absolute',
        right: 0,
        left: '50%',
        bottom: 0,
        content: '""',
        height: theme.spacing(0.5),
        backgroundColor: '#e03936',
        zIndex: 2,
        [theme.breakpoints.up('md')]: {
          height: theme.spacing(1.25)
        }
      },
      color: '#ffffff'
    },
    wrapperText: {
      [theme.breakpoints.up('md')]: {
        maxWidth: theme.spacing(45)
      }
    }
  })
)

export default useStyles
