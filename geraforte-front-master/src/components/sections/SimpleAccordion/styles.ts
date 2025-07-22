import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  backgroundUrlImage?: string
}

const useStyles = makeStyles<Theme, Type>((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top center',
      backgroundSize: 'cover',
      backgroundImage: ({ backgroundUrlImage = '' }) =>
        `url(${backgroundUrlImage})`
    },
    wrappText: {
      '& p:first-child': {
        marginTop: 0
      },
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        columnCount: 2,
        marginBottom: theme.spacing(6)
      }
    },
    imgContent: {
      width: '100%',
      height: 'auto',
      borderRadius: theme.shape.borderRadius * 2
    },
    expandIcon: {
      color: '#e03936'
    },
    container: {
      padding: theme.spacing(0, 1),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0, 2)
      }
    }
  })
)

export default useStyles
