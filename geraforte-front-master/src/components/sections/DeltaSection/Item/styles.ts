import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemWrapper: {
      position: 'relative',
      marginBottom: theme.spacing(4),
      margin: '0 auto'
    },
    paper: {
      height: 'auto',
      minHeight: theme.spacing(13),
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(3),
      paddingBottom: theme.spacing(2),
      marginLeft: 32,
      [theme.breakpoints.up('sm')]: {
        paddingRight: theme.spacing(3)
      }
    },
    container: {
      padding: theme.spacing(3, 2)
    },
    subText: {
      [theme.breakpoints.up('md')]: {
        columnCount: 2
      }
    },
    iconButton: {
      padding: theme.spacing(2),
      display: 'block',
      margin: '0 auto',
      width: theme.spacing(8),
      height: theme.spacing(8),
      borderRadius: theme.shape.borderRadius,
      transform: 'translate(0, 0)',
      '& .MuiButton-startIcon': {
        margin: 0
      }
    },
    number: {
      padding: theme.spacing(2),
      width: theme.spacing(5),
      height: theme.spacing(5),
      display: 'flex',
      alignItems: 'center',
      justifyItems: 'center',
      borderRadius: theme.shape.borderRadius,
      margin: '0 auto',
      transform: 'translate(0, -10px)',
      zIndex: 999
    },
    itemIndicator: {
      zIndex: 2
    },
    itemContent: {
      zIndex: 1
    },
    imageIcon: {
      maxWidth: theme.spacing(3),
      height: 'auto'
    },
    containerLeft: {
      position: 'absolute',
      top: -8,
      left: 0,
      zIndex: 2
    }
  })
)

export default useStyles
