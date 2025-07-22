import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#434343',
      color: theme.palette.common.white,
      borderRadius: theme.shape.borderRadius * 2,
      overflow: 'hidden',
      height: '100%'
    },
    rootHalfWidth: {
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    image: {
      width: '100%',
      height: 'auto'
    },
    content: {
      padding: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4, 5)
      }
    },
    contentHalfWidthFromMd: {
      [theme.breakpoints.up('md')]: {
        maxWidth: '50%'
      }
    },
    divider: {
      height: 2,
      backgroundColor: '#e03936',
      maxWidth: theme.spacing(6),
      margin: theme.spacing(2, 0)
    },
    imageHalfWidthFromMd: {
      [theme.breakpoints.up('md')]: {
        maxWidth: '50%'
      }
    },
    wrapperText: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'block'
      }
    },
    wrapperTextVisibible: {
      display: 'block'
    },
    wrapperReadMore: {
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  })
)

export default useStyles
