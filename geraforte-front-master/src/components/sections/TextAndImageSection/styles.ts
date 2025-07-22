import { Theme } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Type = {
  backgroundImageUrlDesktop?: string
  backgroundPositionDesktop?: string
}

const useStyles = makeStyles<Theme, Type>((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      [theme.breakpoints.up('md')]: {
        backgroundRepeat: 'no-repeat',
        backgroundImage: ({ backgroundImageUrlDesktop = '' }) =>
          `url(${backgroundImageUrlDesktop})`,
        backgroundPosition: ({ backgroundPositionDesktop = '' }) =>
          backgroundPositionDesktop
      }
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: theme.shape.borderRadius * 2
    }
  })
)

export default useStyles
