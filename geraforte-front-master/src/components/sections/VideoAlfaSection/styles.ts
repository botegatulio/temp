import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      backgroundColor: '#282828',
      [theme.breakpoints.up('md')]: {
        overflow: 'hidden',
        position: 'relative',
        '&:after, &:before': {
          content: '""',
          position: 'absolute',
          width: 256,
          height: 180,
          zIndex: 1,
          backgroundRepeat: 'no-repeat'
        },
        '&:after': {
          top: 16,
          left: 'calc(50% - 650px)',
          backgroundImage: 'url(/img/red-squares-one.png)'
        },
        '&:before': {
          bottom: 16,
          right: 'calc(50% - 730px)',
          backgroundImage: 'url(/img/red-squares-two.png)'
        }
      }
    },
    wrapperVideo: {
      zIndex: 2,
      '& iframe': {
        minHeight: theme.spacing(30),
        [theme.breakpoints.up('md')]: {
          minHeight: theme.spacing(72)
        }
      }
    }
  })
)

export default useStyles
