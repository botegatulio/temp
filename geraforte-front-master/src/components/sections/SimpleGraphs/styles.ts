import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#2e2e2e',
      padding: theme.spacing(4, 0)
    },
    item: {
      display: 'flex',
      flexDirection: 'column'
    },
    wrapperImage: {
      marginTop: 'auto'
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      margin: '0 auto'
    },
    body: {
      paddingTop: theme.spacing(2),
      minHeight: 85
    },
    text: {
      paddingTop: theme.spacing(1)
    }
  })
)

export default useStyles
