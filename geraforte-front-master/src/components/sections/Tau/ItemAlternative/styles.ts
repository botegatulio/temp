import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      position: 'relative',
      margin: theme.spacing(0, 1),
      borderRadius: theme.shape.borderRadius * 4,
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: 'auto'
    },
    wrapperText: {
      position: 'absolute',
      bottom: 0,
      padding: theme.spacing(2, 2)
    },
    title: {
      color: '#ffffff',
      paddingTop: theme.spacing(1)
    }
  })
)

export default useStyles
