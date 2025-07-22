import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  backgroundImageUrl: string
}

const useStyles = makeStyles<Theme, Type>((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(1, 2),
      borderRadius: theme.shape.borderRadius * 2,
      backgroundSize: 'cover',
      backgroundImage: ({ backgroundImageUrl }) => `url(${backgroundImageUrl})`,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4, 12.5)
      }
    }
  })
)

export default useStyles
