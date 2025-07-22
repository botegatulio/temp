import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      '& img': {
        transition: 'all .25s linear'
      },
      ' &:hover img': {
        boxShadow: theme.shadows[15]
      }
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: theme.shape.borderRadius * 2
    },
    topThumb: {
      maxWidth: theme.spacing(15),
      height: 'auto',
      position: 'absolute',
      transform: 'translateY(-50%)',
      top: 0,
      left: theme.spacing(2),
      borderRadius: theme.shape.borderRadius * 2,
      boxShadow: theme.shadows[24],
      [theme.breakpoints.up('md')]: {
        maxWidth: '25%',
        left: theme.spacing(4)
      }
    }
  })
)

export default useStyles
